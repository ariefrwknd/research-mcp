import {
  batikA,
  batikB,
  batikC,
  batikD,
  batikE,
  batikF,
  mgmChest,
  mgmTexture,
} from '../assets'

const batikShapes = [batikA, batikB, batikC, batikD, batikE, batikF]

export function AMildMissionsMgmBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#ececec] bg-white p-6 shadow-sm md:p-10">
      <img src={mgmTexture} alt="" className="pointer-events-none absolute inset-0 w-full object-cover opacity-40" />
      {batikShapes.map((shape, index) => (
        <img
          key={shape}
          src={shape}
          alt=""
          className={`pointer-events-none absolute opacity-40 ${index % 2 === 0 ? 'h-16' : 'h-12'}`}
          style={{
            top: `${10 + index * 12}%`,
            left: index % 2 === 0 ? `${5 + index * 6}%` : undefined,
            right: index % 2 !== 0 ? `${5 + index * 6}%` : undefined,
          }}
        />
      ))}
      <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex w-full items-center justify-center md:w-1/3">
            <img src={mgmChest} alt="Treasure chest illustration" className="max-w-xs drop-shadow-2xl" />
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-3xl bg-white/90 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase text-[#ed1c24]">Extra Poin!!</p>
            <h3 className="text-2xl font-bold text-[#2c2a29]">
              Ajak temen lo bergabung di Amild.id dan dapatkan EXTRA POIN & Exclusive Merchandise.
            </h3>
            <p className="text-base text-[#413f3e]">
              Pastikan temen lo perokok dewasa berusia 18+ dan belum pernah terdaftar di Amild.id ya!
            </p>
            <button
              type="button"
              className="inline-flex max-w-xs items-center justify-center rounded-full bg-[#ed1c24] px-6 py-3 text-sm font-black uppercase text-white shadow-lg"
            >
              Undang Teman Sekarang!
            </button>
          </div>
      </div>
    </section>
  )
}

