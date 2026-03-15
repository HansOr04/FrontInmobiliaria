'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import type { PropertyImage } from '@/types/property'
import { cn } from '@/lib/utils'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface PropertyGalleryProps {
    images: PropertyImage[]
    title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

    // Sort images by order
    const sortedImages = [...images].sort((a, b) => a.order - b.order)

    return (
        <div className="space-y-4">
            {/* Main Slider */}
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    } as any}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-full w-full"
                >
                    {sortedImages.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.image_url}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority={image.is_main}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Thumbnail Slider */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-slider h-24"
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                }}
            >
                {sortedImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="relative w-full h-full rounded-md overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                            <Image
                                src={image.image_url}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
