import PropertyDetailsClient from '@/components/properties/PropertyDetailsClient'

interface PageProps {
    params: {
        slug: string
    }
}

export default async function PropertyDetailsPage({ params }: PageProps) {
    // Await params in case of future Next.js changes, though currently sync in 14 (mostly)
    // Actually in Next 15+ params are promises. The user is on Next 16.
    // We should await params.
    const { slug } = await params

    return <PropertyDetailsClient slug={slug} />
}
