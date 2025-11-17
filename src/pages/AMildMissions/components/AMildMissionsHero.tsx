import {
  heroGoAheadBadge,
  heroGuitarBack,
  heroGuitarFront,
  heroScooter,
  heroShirt,
  heroSpeaker,
  heroTumbler,
  heroWave,
  iconBackArrow,
} from '../assets'

export function AMildMissionsHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#fff6f7] via-[#ffeeef] to-[#ffbec0] p-6 shadow-sm md:p-10">
      <img src={heroWave} alt="" className="pointer-events-none absolute inset-x-0 bottom-[-120px] w-full opacity-40" />
      <img src={heroGuitarBack} alt="" className="pointer-events-none absolute left-32 top-8 hidden w-[420px] opacity-20 lg:block" />
      <img src={heroGuitarFront} alt="" className="pointer-events-none absolute left-20 top-12 hidden w-[360px] lg:block" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#2c2a29] shadow"
          >
            <img src={iconBackArrow} alt="" className="h-4 w-4" />
            Kembali
          </button>
          <img src={heroGoAheadBadge} alt="Go Ahead Challenge badge" className="w-full max-w-md rounded-2xl" />
        </div>

        <div className="relative flex flex-1 flex-col gap-6 rounded-3xl bg-[#7c0f15] p-6 text-white md:p-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold leading-tight">Yang di Nanti-Nanti, Akhirnya Balik Lagi!</h1>
            <p className="text-base leading-7 text-white/90">
              Eksplor serunya kegiatan seniman dan musisi favorit lo di Go Ahead Challenge. Tonton semua konten dan unlock
              tantangan yang BUKAN MAIN buat dapetin merch eksklusif Go Ahead Challenge!! Kalau lo beruntung, lo juga bisa bawa
              pulang scooter kolaborasi Naufal Abshar.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[heroScooter, heroShirt, heroTumbler, heroSpeaker].map((src, index) => (
              <img
                key={src}
                src={src}
                alt={['Scooter', 'T-Shirt', 'Tumbler', 'Speaker'][index]}
                className="max-h-32 object-contain drop-shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
