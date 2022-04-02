import { ListOfVerbs } from '../../../../components/dashboard/ListOfVerbs'

export default function Sentences() {
  return (
    <section className="flex">
      <div className="w-96">
        <ListOfVerbs />
      </div>
      <div className="w-full flex justify-center static">
        <span>Select a verb to start</span>
      </div>
    </section>
  )
}
