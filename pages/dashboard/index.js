import { withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs'

import { MiniGame } from '../../components/dashboard/MiniGame'
import { Profile } from '../../components/dashboard/Profile'
import { StatsUser } from '../../components/dashboard/StatsUser'

export default function Dashboard({ user }) {
  const img = user.user_metadata.avatar_url
  const name = user.user_metadata.user_name

  return (
    <section className="flex flex-col gap-10">
      <section className="flex gap-12">
        <Profile img={img} name={name} />
        <StatsUser />
      </section>
      <h4 className="text-2xl text-center mb-4">Mini Games</h4>
      <section className="flex justify-center gap-12">
        <MiniGame
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero incidunt est veritatis! Ipsa, expedita. Illum"
          img="https://i.imgur.com/uiXGkeV.png"
          title="Concentration"
        />
        <MiniGame
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero incidunt est veritatis! Ipsa, expedita. Illum"
          img="https://i.imgur.com/uiXGkeV.png"
          title="Concentration"
        />
      </section>
    </section>
  )
}

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' })
