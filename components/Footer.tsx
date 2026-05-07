export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/[0.08] py-8 px-6 text-center">
      <p className="text-slate-600 text-xs tracking-wide">
        Designed &amp; Built by{' '}
        <span className="text-purple-400 font-semibold">
          Chinonso Ariel Onyemauchechukwu
        </span>{' '}
        · {year}
      </p>
      <p className="text-slate-700 text-[11px] mt-1 tracking-widest uppercase">
        Built with Next.js · Tailwind CSS · Framer Motion
      </p>
    </footer>
  )
}
