import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs'
import Link from 'next/link'
import { MiniGame } from 'components/dashboard/MiniGame'
import { Profile } from 'components/dashboard/Profile'
import { StatsUser } from 'components/dashboard/StatsUser'

export default function Dashboard({ user }) {
  const img = user.user_metadata.avatar_url
  const name = user.user_metadata.name

  return (
    <section className="flex flex-col">
      <section className="flex gap-12">
        <Profile img={img} name={name} />
        <StatsUser />
      </section>
      <section className="flex flex-wrap justify-around mt-24">
        <div>
          <h4 className="text-xl text-center mb-4 font-semibold">Mini Games</h4>
          <div className="flex gap-12">
            <MiniGame title="Memory game" url="/dashboard/minigames/memory">
              This game tries to find the pairs of the verb you chose, where you can select the
              number of verbs, which ones you want and with what tenses you want to play.
            </MiniGame>
            <MiniGame title="Remember well" url="/dashboard">
              This game tries to remember the verbs in the all times.
            </MiniGame>
          </div>
        </div>
        <div>
          <h4 className="text-xl text-center mb-4 font-semibold">Resources</h4>
          <div className="flex gap-12">
            <Link href="/dashboard/list/verbs/irregular">
              <a className="text-lg underline">Irregular Verbs List</a>
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' })
