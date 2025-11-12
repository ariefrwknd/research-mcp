type PageNineHeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
}

export function PageNineHero({ badgeLabel, title, description, backgroundImage }: PageNineHeroProps) {
  return (
    <section className="relative isolate flex min-h-[569px] w-full items-end justify-start overflow-hidden">
      <img alt="" src={backgroundImage} className="absolute inset-0 size-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-10 flex w-full flex-col gap-4 px-10 pb-16 pt-20 md:pb-20">
        <span className="inline-flex w-max items-center justify-center bg-primary-strong px-2.5 py-1 text-sm font-medium text-white tracking-[-0.015em]">
          {badgeLabel}
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[0.01em] text-white md:text-6xl">{title}</h1>

        <p className="max-w-3xl text-lg leading-7 text-zinc-300 md:text-xl md:leading-8">{description}</p>
      </div>
    </section>
  )
}


