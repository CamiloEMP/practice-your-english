import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

import { Header } from '../components/Home/Header'
import { Layout } from '../container/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
