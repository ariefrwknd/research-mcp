export type MissionEpisodeStatus = 'new' | 'finished'

export interface MissionEpisode {
  id: string
  label: string
  status: MissionEpisodeStatus
  thumbnail: string
}

export interface InspirationVideo {
  id: string
  title: string
  category: string
  points: number
  duration: string
  thumbnail: string
}

export interface PromoSlide {
  id: string
  badge: string
  title: string
  description: string
  cta: string
}

