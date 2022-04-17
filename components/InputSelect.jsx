import { timesVerbs } from 'constants/timesVerbs'

export const InputSelect = ({ identifier, isSelect, setIsSelect }) => {
  return (
    <select
      required
      className="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      id={identifier}
      name={identifier}
      onChange={e => setIsSelect({ ...isSelect, [identifier]: e.target.value })}
    >
      <option selected disabled={isSelect.timesVerbFirst || isSelect.timesVerbSecond} value="null">
        Choose a one
      </option>
      {timesVerbs.map(time => (
        <option
          key={time.id}
          disabled={
            isSelect.timesVerbFirst === time.value || isSelect.timesVerbSecond === time.value
          }
          value={time.value}
        >
          {time.title}
        </option>
      ))}
    </select>
  )
}
