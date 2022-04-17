import { ListVerbsLayout } from 'components/dashboard/ListVerbsLayout'

export function SentencesLayout({ children }) {
  return (
    <section className="flex gap-12">
      <div className="w-96">
        <ListVerbsLayout />
      </div>
      <section className="w-full flex flex-col static">{children}</section>
    </section>
  )
}
