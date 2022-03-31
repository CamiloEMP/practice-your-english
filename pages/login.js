import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser, Auth } from '@supabase/supabase-auth-helpers/react'

export default function Login() {
  const { user, error } = useUser()

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <Auth
          className=" max-w-xs mx-auto"
          providers={['google', 'github', 'discord']}
          redirectTo="/dashboard"
          socialButtonSize="xlarge"
          socialColors={true}
          socialLayout="vertical"
          supabaseClient={supabaseClient}
        />
      </>
    )

  return <div />
}
