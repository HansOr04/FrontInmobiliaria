import PropertyDetailAdmin from '@/components/admin/properties/PropertyDetailAdmin'

interface PageProps {
    params: {
        id: string
    }
}

export default async function AdminPropertyDetailsPage({ params }: PageProps) {
    const { id } = await params

    return (
        <div className="space-y-6">
            <PropertyDetailAdmin id={id} />
        </div>
    )
}
