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
          providers={['google', 'github']}
          redirectTo="/dashboard"
          socialButtonSize="large"
          socialColors={true}
          socialLayout="vertical"
          supabaseClient={supabaseClient}
        />
      </>
    )
  console.log({ user })

  return (
    // <div>
    //   <button
    //     className="text-black flex items-center gap-2 text-lg border-2 border-red-500 rounded-md py-2 px-4 transition-colors hover:bg-red-500 hover:text-white"
    //     type="button"
    //   >
    //     <span>Sign In with Google</span>
    //     <FaGoogle className="text-xl" />
    //   </button>
    //   <button
    //     className="text-black flex items-center gap-2 text-lg border-2 border-black rounded-md py-2 px-4 mt-4 transition-colors hover:bg-black hover:text-white"
    //     type="submit"
    //     onClick={handleSignInWithGitHub}
    //   >
    //     <span>Sign In with GitHub</span>
    //     <FaGithub className="text-xl" />
    //   </button>
    // </div>
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
