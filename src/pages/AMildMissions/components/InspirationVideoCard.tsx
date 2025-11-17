import { iconCoinBase, iconCoinCenter, iconCoinTop, iconPlay } from '../assets'
import type { InspirationVideo } from '../types/amildMissions.types'

type InspirationVideoCardProps = {
  video: InspirationVideo
}

export function InspirationVideoCard({ video }: InspirationVideoCardProps) {
  return (
    <article className="flex w-52 flex-shrink-0 flex-col gap-3 rounded-2xl border border-[#e6e6e6] bg-white p-3 shadow-sm">
      <div className="relative h-36 overflow-hidden rounded-xl">
        <img src={video.thumbnail} alt={video.title} className="size-full object-cover" />
        <div className="absolute left-2 top-2 rounded-full bg-[rgba(97,98,98,0.25)] px-3 py-1 text-xs font-semibold text-white">
          {video.duration}
        </div>
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ed1c24]"
        >
          <img src={iconPlay} alt="" className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm font-bold text-[#ed1c24]">
        <div className="relative h-5 w-5">
          <img src={iconCoinBase} alt="" className="absolute inset-0 size-full" />
          <img src={iconCoinTop} alt="" className="absolute inset-0 size-full" />
          <img src={iconCoinCenter} alt="" className="absolute inset-0 size-3/4 translate-x-1/4 translate-y-1/4" />
        </div>
        {video.points} Points
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-[#2c2a29]">{video.title}</p>
        <p className="text-xs font-bold uppercase tracking-wide text-[#959493]">{video.category}</p>
      </div>
    </article>
  )
}

