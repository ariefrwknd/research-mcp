type PageSixHeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
}

export function PageSixHero({ badgeLabel, title, description, backgroundImage }: PageSixHeroProps) {
  return (
    <section className="relative isolate flex min-h-[520px] w-full items-end justify-start overflow-hidden">
      <img
        alt=""
        src={backgroundImage}
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative z-10 flex w-full flex-col gap-4 px-10 pb-16 pt-24">
        <span className="inline-flex w-max items-center justify-center rounded bg-primary-strong px-3 py-1 text-sm font-medium text-white">
          {badgeLabel}
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[0.01em] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-zinc-300 sm:text-xl">{description}</p>
      </div>
    </section>
  )
}



