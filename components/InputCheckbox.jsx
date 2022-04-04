export const InputCheckbox = ({ identifier, text, checked, handleChecked }) => {
  const boolean = checked[identifier]

  return (
    <>
      <label className="text-lg" htmlFor={identifier}>
        {text}
      </label>
      <input
        required
        checked={boolean}
        className="h-5 w-5 ml-2"
        id={identifier}
        name={identifier}
        type="checkbox"
        onClick={handleChecked}
      />
    </>
  )
}
