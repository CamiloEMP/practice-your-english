export const CardResource = ({ to, title, children, handleVisible }) => {
  return (
    <a
      className="w-80 lg:w-96 space-y-6 p-6 px-8 border-4 border-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white rounded-sm cursor-pointer"
      onClick={() => handleVisible(to)}
    >
      <h3 className="text-2xl uppercase text-center font-semibold">{title}</h3>
      {children}
    </a>
  )
}
