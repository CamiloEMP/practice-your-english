export const TextArea = ({ identifier, title, setError }) => {
  return (
    <div>
      <label className="mb-2" htmlFor={identifier}>
        {title}
      </label>
      <textarea
        className="mt-2 w-full py-2 px-4 border-2 rounded-sm border-transparent resize-y max-h-52 min-h-[120px] focus:outline-none focus:border-emerald-600"
        id={identifier}
        name={identifier}
        onFocus={() => setError('')}
      />
    </div>
  )
}
