/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'hook/useWindowSize'
import { randomVerbs } from 'utils/randomVerbs'
import { shuffleVerbs } from 'utils/shuffleVerbs'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'

import { CardMemoryGame } from './CardMemoryGame'

export const MemoryGame = ({ verbs, optionsGame }) => {
  const { timesVerbFirst, timesVerbSecond, quantityVerbs } = optionsGame
  const [verbsForGame, setVerbsForGame] = useState([])
  const [choiseOne, setChoiseOne] = useState(null)
  const [choiseTwo, setChoiseTwo] = useState(null)
  const [disable, setDisable] = useState(false)
  const [win, setWin] = useState(6)
  const { width, height } = useWindowSize()
  const handleChoise = verb => (choiseOne ? setChoiseTwo(verb) : setChoiseOne(verb))

  const handleMatched = () => {
    setVerbsForGame(prevVerbs => {
      return prevVerbs.map(verb => {
        if (verb.word === choiseOne.pairCorrect || verb.pairCorrect === choiseTwo.word) {
          return { ...verb, matched: true }
        } else {
          return verb
        }
      })
    })
    toast.success('Matched!', {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setWin(prevWin => prevWin - 2)
  }

  const resetStates = () => {
    setChoiseOne(null)
    setChoiseTwo(null)
    setDisable(false)
  }

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisable(true)
      if (choiseOne.pairCorrect === choiseTwo.word) {
        handleMatched()
        resetStates()
      } else if (choiseTwo.pairCorrect === choiseOne.word) {
        handleMatched()
        resetStates()
      } else {
        toast.error('Not Matched!', {
          position: 'bottom-left',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          resetStates()
        }, 1000)
      }
    }
  }, [choiseOne, choiseTwo])

  useEffect(() => {
    const verbsRandom = randomVerbs(verbs, quantityVerbs)

    shuffleVerbs({ verbsRandom, setVerbsForGame, timesVerbFirst, timesVerbSecond })
    if (verbsForGame.length !== 0) {
      setWin(verbsForGame.length)
    }

    return () => {
      setVerbsForGame([])
    }
  }, [quantityVerbs, timesVerbFirst, timesVerbSecond, verbs])

  return (
    <>
      {win === 0 ? (
        <div className="flex flex-col items-center gap-6">
          <Confetti height={height} width={width} />
          <h1 className="text-center text-5xl text-emerald-500">You win!</h1>
          <Link href="/dashboard/minigames/memory">
            <a className="text-emerald-100 min-w-fit mx-auto text-2xl bg-emerald-700 p-4 font-semibold">
              Volver a jugar
            </a>
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {verbsForGame.map((verb, index) => (
            <CardMemoryGame
              key={index}
              disable={disable}
              isFlipped={verb === choiseOne || verb === choiseTwo || verb.matched}
              verb={verb}
              onChoise={handleChoise}
            />
          ))}
        </section>
      )}
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        hideProgressBar={false}
        limit={3}
        newestOnTop={false}
        position="bottom-left"
        rtl={false}
        theme="colored"
      />
    </>
  )
}
