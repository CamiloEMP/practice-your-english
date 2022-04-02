import Head from 'next/head'

import { SentencesLayout } from '../../../../layout/SentecesLayout'

function Sentences() {
  return (
    <>
      <Head>
        <title>Practice | Sentences</title>
      </Head>
      <span>Select a verb to start</span>
    </>
  )
}

Sentences.PageLayout = SentencesLayout

export default Sentences
