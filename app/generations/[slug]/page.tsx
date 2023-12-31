import { reader } from '@/app/reader'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page({ params }: { params: { slug: string } }) {
  const generation = await reader.collections.generations.readOrThrow(params.slug)

  if (!generation.image) {
    throw new Error('Generation image not found')
  }

  return (
    <main className="flex min-h-screen flex-col items-start gap-2 p-6">
      <Link href="/" className="text-sm hover:underline">
        Back
      </Link>
      <hr />
      <h3>{generation.title}</h3>
      <p className="text-slate-500">{generation.prompt}</p>
      <Image
        className="bg-pink-100"
        src={generation.image}
        alt={generation.prompt}
        width={448}
        height={576}
      />
    </main>
  )
}

// Instead of using a "hack" to include "content" directory in the build we can pre-generate the static paths during build time which will be better in this scenario
export async function generateStaticParams() {
  const slugs = await reader.collections.generations.list()

  return slugs.map(slug => ({ slug }))
}
