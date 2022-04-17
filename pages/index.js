import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useRouter } from 'next/router'
import { CardInfo } from 'components/Home/CardInfo'

export default function Home() {
  const { user } = useUser()
  const router = useRouter()

  if (user) router.push('/dashboard') // Provitional

  return (
    <section>
      <blockquote className="text-4xl font-bold italic text-center">
        Learn{' '}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative inline-block">
          <span className="relative text-white">English</span>
        </span>{' '}
        with <br /> practice and motivation <br /> during 100 days
      </blockquote>
      <div className="mt-24 flex flex-wrap gap-6 justify-center">
        <CardInfo title="Which is the purpose of this project?">
          That you practice your writing and improve your vocabulary at the same time
        </CardInfo>
        <CardInfo title="How will you learn on this page?">
          The objective of this page is that through three verbs daily&apos;s with three sentences
          for each verb increase your vocabulary and your grammar.
        </CardInfo>
        <CardInfo title="How do I think this could help you?">
          On this page you will find 300 verbs with which you can make 900 sentences in English, so
          my idea is that you practice the times present, past and future with all variations
          (present simple, verb to be, etc)
        </CardInfo>
      </div>
    </section>
  )
}
