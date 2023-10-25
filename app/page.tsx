import Link from 'next/link'
import { reader } from './reader'

export default async function Home() {
  const generations = await reader.collections.generations.all()

  return (
    <main className="flex min-h-screen p-6">
      <ol>
        {generations.map(item => {
          return (
            <li key={item.slug}>
              <Link href={`/generations/${item.slug}`}>{item.entry.title}</Link>
            </li>
          )
        })}
      </ol>
    </main>
  )
}
