import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Spinner } from 'components/Spinner'
import { CardResource } from 'components/dashboard/CardResource'
import { Modal } from 'components/modals/Modal'
import { Minigame } from 'components/modals/Minigame'
import { Resources } from 'components/modals/Resources'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BtnCloseModal } from 'components/modals/BtnCloseModal'

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState({ minigames: false, resources: false })
  const router = useRouter()
  const state = useUser()
  const { user } = state

  const handleVisible = useCallback(
    key => {
      setIsVisible({ ...isVisible, [key]: !isVisible[key] })
    },
    [isVisible],
  )

  if (state.isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    )

  const name = user.user_metadata.name

  return (
    <section>
      <h2 className="text-3xl font-bold text-emerald-600 md:text-[2.5rem] text-center dark:text-emerald-500">
        Welcome {name}
      </h2>
      <p className="text-xl md:text-2xl text-center mt-2">What do you want to do?</p>
      <section className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20 gap-5 justify-items-center">
        <Link href={`${router.pathname}/practice/sentences`}>
          <a className="w-80 lg:w-96 space-y-6 p-6 px-8 border-4 border-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white rounded-sm cursor-pointer">
            <h3 className="text-2xl uppercase text-center font-semibold">
              Pracite irregular verbs
            </h3>
            <p className="text-lg">¡All irregular verbs to practice with all their verb tenses!</p>
            <ul className="text-lg">
              <li>Infinitive</li>
              <li>Past</li>
              <li>Past Participle</li>
              <li>Translation</li>
            </ul>
          </a>
        </Link>
        <CardResource handleVisible={handleVisible} title="Minigames" to="minigames">
          <p className="text-lg">You can find the next games</p>
          <ul className="text-lg">
            <li>Memory game</li>
            <li>Find the verb</li>
            <li>Wordle</li>
          </ul>
        </CardResource>
        <CardResource handleVisible={handleVisible} title="Resources" to="resources">
          <ul className="text-lg">
            <li>Irregular verb list</li>
            <li>More coming soon...</li>
          </ul>
        </CardResource>
      </section>
      {/*
            <Link href="/dashboard/list/verbs/irregular">
  */}
      {!!isVisible.minigames ? (
        <Modal>
          <BtnCloseModal handleVisible={() => handleVisible('minigames')} />
          <Minigame />
        </Modal>
      ) : !!isVisible.resources ? (
        <Modal>
          <BtnCloseModal handleVisible={() => handleVisible('resources')} />
          <Resources />
        </Modal>
      ) : null}
    </section>
  )
}
