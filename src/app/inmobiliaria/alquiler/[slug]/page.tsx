import PropertyDetailsClient from '@/components/properties/PropertyDetailsClient'

interface PageProps {
    params: {
        slug: string
    }
}

export default async function PropertyDetailsPage({ params }: PageProps) {
    const { slug } = await params

    return <PropertyDetailsClient slug={slug} />
}
