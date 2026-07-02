export interface AirbnbApi {
    accommodation: Accommodation[]
    icons: Icons[]
}

export interface Accommodation {
    id: string
    title: string
    date: string
    testimonials: Testimonials[]
    hasBadge: boolean
    host: string
    slug: string
    location: Location
    price: number
    rating: number
    photos: Photo[]
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    stayedAt: number
}

export interface Photo {
    id: string
    source: string
    description: string
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}

export interface Icons {
    id: string
    description: string
    source: string
    url: string
}