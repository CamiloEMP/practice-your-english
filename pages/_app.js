import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { Modal } from 'components/Modal'
import { Header } from 'components/Home/Header'
import { Layout } from 'container/Layout'
import { Success } from 'components/Success'

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false)

  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Layout>
          <Header />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component setShow={setShow} {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
        {show && (
          <Modal>
            <Success setShow={setShow} />
          </Modal>
        )}
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
