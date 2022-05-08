import { useRouter } from 'next/router'
import { InputSelect } from 'components/InputSelect'
import { useForm } from 'hook/useForm'
import { useOptions } from 'hook/useOptions'
import { validateMemoryGame } from 'validations/validateMemoryGame'

export default function MinigameMemory() {
  const { setOptionsMinigame, options } = useOptions()
  const router = useRouter()
  const initialState = {
    quantityVerbs: 6,
    timesVerbFirst: '',
    timesVerbSecond: '',
    random: false,
    byOne: false,
  }
  const { values, handleChange, handleSubmit } = useForm(initialState)

  const validateForm = () => {
    const isError = validateMemoryGame(values.timesVerbFirst, values.timesVerbSecond)

    if (isError) {
      throw new Error('Error')
    } else {
      const minigame = options.minigame

      setOptionsMinigame({
        minigame: minigame,
        ...values,
      })
      router.push('/dashboard/minigames/play')
    }
  }

  return (
    <section className="px-4">
      <h2 className="text-3xl font-bold text-center">Memory Game</h2>
      <form
        className="min-w-min max-w-3xl gap-20 mx-auto flex flex-col mt-8"
        onSubmit={e => handleSubmit(e, validateForm)}
      >
        <div>
          <p className="text-xl">- How many verbs do you want to use?</p>
          <span className="text-emerald-600 dark:text-emerald-400 text-lg">
            {values.quantityVerbs} verbs
          </span>
          <input
            className="w-full h-2 bg-emerald-400 appearance-none cursor-pointer rounded-sm"
            id="quantityVerbs"
            max={15}
            min={3}
            name="quantityVerbs"
            type="range"
            value={values.quantityVerbs}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="text-xl mb-4">- Choose two times of verbs for use in the game</p>
          <div className="flex gap-5">
            <InputSelect identifier="timesVerbFirst" isSelect={values} setIsSelect={handleChange} />
            <InputSelect
              identifier="timesVerbSecond"
              isSelect={values}
              setIsSelect={handleChange}
            />
          </div>
        </div>
        <button
          className="text-lg border-4 border-emerald-500 transition-colors hover:bg-emerald-500 hover:text-slate-100 uppercase py-2"
          type="submit"
        >
          ¡ play !
        </button>
      </form>
    </section>
  )
}
