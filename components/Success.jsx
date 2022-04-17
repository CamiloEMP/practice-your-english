import { CgCloseO, CgCheckO } from 'react-icons/cg'

export const Success = ({ setShow }) => {
  return (
    <section className="max-w-md mx-auto p-4 mt-24 bg-primary-50 rounded-md bg-emerald-600 text-slate-100">
      <div className="flex justify-end items-center p-2">
        <button className="text-4xl p-2" onClick={() => setShow(false)}>
          <CgCloseO />
        </button>
      </div>
      <div className="animate-bounce flex items-center flex-col">
        <CgCheckO className="text-7xl" />
        <h1 className="text-3xl font-bold">Success!</h1>
      </div>
    </section>
  )
}
