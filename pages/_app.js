import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { ContextOptionsProvider } from 'context/OptionsMinigamesContext'
import { Layout } from 'container/Layout'
import { Modal } from 'components/modals/Modal'
import { Header } from 'components/Home/Header'
import { Success } from 'components/Success'

import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false)

  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ContextOptionsProvider>
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
      </ContextOptionsProvider>
    </UserProvider>
  )
}

export default MyApp
