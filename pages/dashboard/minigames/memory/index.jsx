import { useState } from 'react'

import { InputCheckbox } from '../../../../components/InputCheckbox'
import { InputSelect } from '../../../../components/InputSelect'
import { timesVerbs } from '../../../../constants/timesVerbs'

export default function Memory() {
  const [checked, setChecked] = useState({ random: false, byOne: false })
  const [valueRange, setValueRange] = useState(8)

  function handleChecked(e) {
    const id = e.target.id

    if (id === 'byOne') {
      setChecked({ random: false, byOne: true })
    } else {
      setChecked({ random: true, byOne: false })
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center">Memory Game</h2>
      <form className="min-w-min max-w-3xl gap-20 mx-auto flex flex-col mt-8">
        <div>
          <p className="text-xl">- How many verbs do you want to use?</p>
          <span className="text-emerald-600 dark:text-emerald-400 text-lg">{valueRange} verbs</span>
          <input
            className="w-full h-2 bg-emerald-400 appearance-none cursor-pointer rounded-sm"
            id=""
            max={15}
            min={3}
            name=""
            type="range"
            onChange={e => setValueRange(e.target.value)}
          />
        </div>
        <div>
          <p className="text-xl mb-4">- Choose two times of verbs for use in the game</p>
          <div className="flex gap-5">
            <InputSelect options={timesVerbs} />
            <InputSelect options={timesVerbs} />
          </div>
        </div>
        <div>
          <p className="text-xl mb-4">
            - Do you want to select the verbs one by one or do you want it randomly
          </p>
          <div className="inline-flex items-center mr-4">
            <InputCheckbox
              checked={checked}
              handleChecked={handleChecked}
              identifier="byOne"
              text="One by one"
            />
          </div>
          <div className="inline-flex items-center">
            <InputCheckbox
              checked={checked}
              handleChecked={handleChecked}
              identifier="random"
              text="Definitely random"
            />
          </div>
        </div>
        <button
          className="text-lg border-4 border-emerald-500 transition-colors hover:bg-emerald-500 hover:text-slate-100 uppercase py-2"
          type="submit"
        >
          ¡ I want play now !
        </button>
      </form>
    </section>
  )
}
