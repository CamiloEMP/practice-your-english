import { supabase } from './supabaseClient'

export async function signInWithGithub() {
  // await supabase.auth.signIn({
  //   provider: 'github',
  // })
  await supabase.auth.signIn({
    provider: 'github',
  })
}

export async function signout() {
  await supabase.auth.signOut()
}
