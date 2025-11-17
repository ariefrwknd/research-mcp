import { iconCheckCircle } from '../assets'
import type { MissionEpisode } from '../types/amildMissions.types'

type MissionEpisodeCardProps = {
  episode: MissionEpisode
}

export function MissionEpisodeCard({ episode }: MissionEpisodeCardProps) {
  const isNew = episode.status === 'new'
  return (
    <article className="relative flex h-48 w-48 flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <img src={episode.thumbnail} alt={episode.label} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      <div className="relative flex flex-1 flex-col justify-between p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-white/90">{episode.label}</span>
          <div
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${
              isNew ? 'bg-[#ed1c24] text-white' : 'bg-white/80 text-[#555]'
            }`}
          >
            {isNew ? (
              'NEW!'
            ) : (
              <>
                <img src={iconCheckCircle} alt="" className="h-3 w-3" />
                Finished
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#ed1c24] shadow"
        >
          Tonton
        </button>
      </div>
    </article>
  )
}

