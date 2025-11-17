import {
  inspirationThumb1,
  inspirationThumb2,
  inspirationThumb3,
  inspirationThumb4,
  inspirationThumb5,
  inspirationThumb6,
  inspirationThumb7,
  missionDefaultThumb,
  missionFeaturedThumb,
  promoSlide,
} from '../assets'
import type { InspirationVideo, MissionEpisode, PromoSlide } from '../types/amildMissions.types'

export const missionEpisodes: MissionEpisode[] = [
  { id: 'episode-6', label: 'Episode 6', status: 'new', thumbnail: missionFeaturedThumb },
  { id: 'episode-5', label: 'Episode 5', status: 'new', thumbnail: missionFeaturedThumb },
  { id: 'episode-4', label: 'Episode 4', status: 'finished', thumbnail: missionDefaultThumb },
  { id: 'episode-3', label: 'Episode 3', status: 'finished', thumbnail: missionDefaultThumb },
  { id: 'episode-2', label: 'Episode 2', status: 'finished', thumbnail: missionDefaultThumb },
  { id: 'episode-1', label: 'Episode 1', status: 'finished', thumbnail: missionDefaultThumb },
]

export const inspirationVideos: InspirationVideo[] = [
  { id: 'brainstorming', title: 'Brainstorming Session', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb1 },
  { id: 'songcrafting', title: 'Song Crafting', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb2 },
  { id: 'recording', title: 'Recording Session', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb3 },
  { id: 'jamming', title: 'Jamming Session', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb4 },
  { id: 'conversation', title: 'Bicara Lirik', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb5 },
  { id: 'stage-story', title: 'Cerita Panggung', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb6 },
  { id: 'staycation', title: 'Staycation Stories', category: 'Inspirasi', points: 25, duration: '1:15', thumbnail: inspirationThumb7 },
]

export const promoSlides: PromoSlide[] = [
  {
    id: 'backstage',
    badge: 'Bukan Main',
    title: 'Enaknya Gimana, Gimana Enaknya',
    description: 'Temuin inspirasi biar jadi gak seenaknya lewat konten yang bisa lo nikmatin di sini!',
    cta: 'Cek Sekarang',
  },
  {
    id: 'collab',
    badge: 'Eksklusif',
    title: 'Keseruan di Balik Layar',
    description: 'Ikutin cerita kolaborasi seniman favorit lo dan unlock hadiah spesial yang cuma ada di sini.',
    cta: 'Lihat Detailnya',
  },
  {
    id: 'highlight',
    badge: 'Highlight',
    title: 'Kita Gak Enakan, Dia Seenaknya',
    description: 'Dapetin insight kreatif dan konten behind the scene buat nemenin keseharian lo.',
    cta: 'Mulai Nonton',
  },
]

export const missionProgress = {
  completed: 4,
  total: 6,
  remainingVideos: 8,
}

export const PROMO_IMAGE = promoSlide

