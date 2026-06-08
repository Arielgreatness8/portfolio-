import { NextRequest, NextResponse } from 'next/server'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_REPO = 'Arielgreatness8/portfolio-'
const GITHUB_PATH = 'public/designs'
const ADMIN_PASSWORD = '*#*#440sets'

async function getDesigns() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        cache: 'no-store',
      }
    )
    if (!res.ok) return []
    const files = await res.json()
    if (!Array.isArray(files)) return []
    const images = files.filter((f: any) =>
      f.name.match(/\.(jpg|jpeg|png|gif|webp)$/i) && f.name !== '.gitkeep'
    )
    return images.map((f: any) => ({
      id: f.sha,
      title: f.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
      url: f.download_url,
      date: '',
    }))
  } catch {
    return []
  }
}

export async function GET() {
  const designs = await getDesigns()
  return NextResponse.json(designs)
}

export async function POST(req: NextRequest) {
  const { title, image, filename, password } = await req.json()
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const safeName = title.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '') + '_' + Date.now() + '.' + filename.split('.').pop()
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_PATH}/${safeName}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Add design: ${title}`,
        content: image,
      }),
    }
  )
  if (!res.ok) return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  const { id, password } = await req.json()
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const designs = await getDesigns()
  const design = designs.find((d: any) => d.id === id)
  if (!design) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  const filename = design.url.split('/').pop()
  const fileRes = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_PATH}/${filename}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  )
  const fileData = await fileRes.json()
  await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_PATH}/${filename}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Delete design: ${filename}`,
        sha: fileData.sha,
      }),
    }
  )
  return NextResponse.json({ success: true })
}
