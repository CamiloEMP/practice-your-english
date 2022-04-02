import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

import { Header } from '../components/Home/Header'
import { Layout } from '../container/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
