type PageSevenHeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
}

export function PageSevenHero({ badgeLabel, title, description, backgroundImage }: PageSevenHeroProps) {
  return (
    <section className="relative isolate flex min-h-[569px] w-full items-end justify-center overflow-hidden">
      <img
        alt=""
        src={backgroundImage}
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1329px] flex-col gap-4 px-6 pb-16 pt-20 sm:px-10">
        <span className="inline-flex w-max items-center justify-center rounded bg-primary-strong px-2.5 py-1 text-sm font-medium tracking-[-0.01em] text-white">
          {badgeLabel}
        </span>

        <h1 className="max-w-[535px] text-4xl font-semibold tracking-[0.015em] text-white sm:text-[60px] sm:leading-[60px] sm:tracking-[0.2637px]">
          {title}
        </h1>

        <p className="max-w-[650px] text-base leading-7 text-zinc-300 sm:text-xl sm:leading-[28px] sm:tracking-[-0.4492px]">
          {description}
        </p>
      </div>
    </section>
  )
}


