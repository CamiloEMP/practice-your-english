import { ListOfVerbs } from '../components/dashboard/ListOfVerbs'

export function SentencesLayout({ children }) {
  return (
    <section className="flex gap-12">
      <div className="w-96">
        <ListOfVerbs />
      </div>
      <section className="w-full flex flex-col static">{children}</section>
    </section>
  )
}
