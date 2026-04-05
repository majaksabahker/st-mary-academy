import { useEffect, useMemo, useState } from 'react'
import campusLifeImage from '../assets/images/campus life.jpeg'
import laboratoryImage from '../assets/images/laboratory.jpeg'
import sportImage from '../assets/images/sport.jpeg'

const photos = [
  {
    title: 'Science Fair 2025',
    caption: 'Nurturing the Future: Our 2025 Science Fair.',
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80',
    display_order: 1,
  },
  {
    title: 'Campus Life',
    caption: 'Daily life at St. Mary’s Academy with active student engagement.',
    src: campusLifeImage,
    display_order: 2,
  },
  {
    title: 'Laboratory Session',
    caption: 'Hands-on experiments in our modern science laboratories.',
    src: laboratoryImage,
    display_order: 3,
  },
  {
    title: 'Sports Day',
    caption: 'Students building teamwork, discipline and confidence through sports.',
    src: sportImage,
    display_order: 4,
  },
]

const fallbackVideos = [
  {
    id: 'event-assembly',
    title: 'Ms. Adhel Michael Mabior - Top CPE 2025 Performer',
    category: 'Events',
    duration: '0:45',
    platform: 'tiktok',
    tiktokId: '7618678502300093716',
    videoUrl: 'https://www.tiktok.com/@whitesouthmedia/video/7618678502300093716',
    thumbnailSrc:
      'https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oc8Egfv1FgmRDowQEu5EAOBceBuFQuUSpBtyPt~tplv-tiktokx-origin.image',
    display_order: 1,
  },
  {
    id: 'sports-day',
    title: 'Inter-House Sports Day Recap',
    category: 'Sports',
    duration: '2:45',
    youtubeId: 'ScMzIvxBSi4',
    display_order: 2,
  },
  {
    id: 'lab-demo',
    title: 'STEM Lab Practical Session',
    category: 'Academics',
    duration: '1:50',
    youtubeId: 'ysz5S6PUM-U',
    display_order: 3,
  },
]

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null)
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [videos, setVideos] = useState(fallbackVideos)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeVideoId, setActiveVideoId] = useState(null)
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const [imagesRes, videosRes] = await Promise.all([
          fetch(`${apiBaseUrl}/api/gallery/images/`),
          fetch(`${apiBaseUrl}/api/gallery/videos/`),
        ])

        if (imagesRes.ok) {
          const imageData = await imagesRes.json()
          if (Array.isArray(imageData) && imageData.length > 0) {
            setGalleryPhotos(
              imageData
                .map((item) => ({
                  title: item.title,
                  caption: item.caption || item.title,
                  src: item.image_url,
                  display_order: item.display_order ?? 0,
                }))
                .sort((a, b) => a.display_order - b.display_order)
            )
          }
        }

        if (videosRes.ok) {
          const videoData = await videosRes.json()
          if (Array.isArray(videoData) && videoData.length > 0) {
            setVideos(
              videoData
                .map((item) => ({
                  id: String(item.id),
                  title: item.title,
                  category: item.category || 'Events',
                  duration: item.duration || '',
                  platform: item.platform,
                  youtubeId: item.youtube_id || '',
                  tiktokId: item.tiktok_id || '',
                  thumbnailSrc: item.thumbnail_url || campusLifeImage,
                  display_order: item.display_order ?? 0,
                }))
                .sort((a, b) => a.display_order - b.display_order)
            )
          }
        }
      } catch {
        // Keep fallback data if API is unavailable.
      }
    }

    loadGallery()
  }, [apiBaseUrl])

  const videoCategories = useMemo(() => {
    const categories = Array.from(new Set(videos.map((video) => video.category).filter(Boolean)))
    return ['All', ...categories]
  }, [videos])

  const filteredVideos =
    activeCategory === 'All' ? videos : videos.filter((video) => video.category === activeCategory)

  return (
    <section id="gallery" className="rounded-2xl border border-[#2F7A4D]/30 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2F7A4D]">Life at SMAK</h2>
      <p className="mt-3 text-[#333333]">
        A glimpse into daily life, excellence and community at St. Mary’s Academy.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryPhotos.map((photo) => (
          <button
            key={photo.title}
            type="button"
            onClick={() => setActivePhoto(photo)}
            className="overflow-hidden rounded-xl border border-[#2F7A4D]/30 text-left shadow-sm transition hover:scale-[1.01] hover:shadow-md"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="h-44 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="bg-white p-3">
              <p className="text-sm font-semibold text-[#1F5E3B]">{photo.title}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[#2F7A4D]">Video Gallery</h3>
        <p className="mt-2 text-sm text-[#333333]">
          Short, meaningful videos (1-3 minutes). Tap a thumbnail to play.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {videoCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category)
                setActiveVideoId(null)
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-[#2F7A4D] text-white'
                  : 'border border-[#2F7A4D]/35 text-[#2F7A4D] hover:bg-[#EAF5EE]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => {
            const thumbnail = video.youtubeId
              ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
              : video.thumbnailSrc
            const embedUrl = video.youtubeId
              ? `https://www.youtube.com/embed/${video.youtubeId}`
              : video.tiktokId
                ? `https://www.tiktok.com/player/v1/${video.tiktokId}`
                : ''
            const isActive = activeVideoId === video.id

            return (
              <article key={video.id} className="overflow-hidden rounded-xl border border-[#2F7A4D]/30 bg-white shadow-sm">
                {isActive ? (
                  <iframe
                    title={video.title}
                    src={embedUrl}
                    className="h-52 w-full"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button type="button" onClick={() => setActiveVideoId(video.id)} className="relative block w-full">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="h-52 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#1F5E3B]">
                        Play Video
                      </span>
                    </span>
                  </button>
                )}
                <div className="p-3">
                  <p className="text-sm font-semibold text-[#1F5E3B]">{video.title}</p>
                  <p className="mt-1 text-xs text-[#56605A]">
                    {video.category} • {video.duration}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[75vh] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center justify-between gap-3 p-4">
              <p className="text-sm text-[#333333]">{activePhoto.caption}</p>
              <button
                type="button"
                className="rounded-lg bg-[#1F5E3B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4CAF50]"
                onClick={() => setActivePhoto(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
