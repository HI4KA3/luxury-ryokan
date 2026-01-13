import { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'
import { rooms } from '@/content/rooms'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kuunoniwa.jp' // Replace with actual domain

    const staticRoutes = [
        '',
        '/rooms',
        '/onsen',
        '/dining',
        '/experiences',
        '/facilities',
        '/offers',
        '/gallery',
        '/access',
        '/about',
        '/contact',
        '/faq',
        '/booking',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const roomRoutes = rooms.map((room) => ({
        url: `${baseUrl}/rooms/${room.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...staticRoutes, ...roomRoutes]
}
