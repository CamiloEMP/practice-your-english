import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs'

import { MiniGame } from '../../components/dashboard/MiniGame'
import { Profile } from '../../components/dashboard/Profile'
import { StatsUser } from '../../components/dashboard/StatsUser'

export default function Dashboard({ user }) {
  console.log(user)
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
          <h4 className="text-xl text-center mb-4">Mini Games</h4>
          <div className="flex gap-12">
            <MiniGame img="https://i.imgur.com/uiXGkeV.png" title="Concentration" />
            <MiniGame img="https://i.imgur.com/uiXGkeV.png" title="Find the verb" />
          </div>
        </div>
        <div>
          <h4 className="text-xl text-center mb-4">Resources</h4>
          <div className="flex gap-12">
            <MiniGame img="https://i.imgur.com/uiXGkeV.png" title="Regular Verbs List" />
            <MiniGame img="https://i.imgur.com/uiXGkeV.png" title="Irregular Verbs List" />
          </div>
        </div>
      </section>
    </section>
  )
}

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' })
