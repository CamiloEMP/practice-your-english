import { useRouter } from 'next/router'

export default function Play() {
  const { query } = useRouter()

  console.log(query)

  return <div>Play</div>
}
