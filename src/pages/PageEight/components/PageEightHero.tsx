type PageEightHeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
}

export function PageEightHero({ badgeLabel, title, description, backgroundImage }: PageEightHeroProps) {
  return (
    <section className="relative isolate flex min-h-[569px] w-full items-end overflow-hidden">
      <img alt="" src={backgroundImage} className="absolute inset-0 size-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1329px] flex-col gap-4 px-6 pb-16 pt-20 sm:px-8 md:px-10 md:pb-20">
        <span className="inline-flex w-max items-center justify-center bg-primary-strong px-2.5 py-1 text-sm font-medium tracking-[-0.015em] text-white">
          {badgeLabel}
        </span>

        <h1 className="max-w-[535px] text-[40px] font-normal leading-[1.1] tracking-[0.2637px] text-white sm:text-[52px] md:text-[60px] md:leading-[60px]">
          {title}
        </h1>

        <p className="max-w-[650px] text-xl leading-[28px] tracking-[-0.02em] text-zinc-300">{description}</p>
      </div>
    </section>
  )
}



