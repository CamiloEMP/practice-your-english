export const InputSelect = ({ options }) => {
  return (
    <select
      required
      className="block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:ring-1 focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      id=""
      name=""
    >
      {options.map(option => (
        <option key={option.id} value={option.value}>
          {option.description}
        </option>
      ))}
    </select>
  )
}
