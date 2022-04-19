export const ContainerModal = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="min-w-fit w-96 h-80 py-4 px-8 bg-primary-50 rounded-md bg-emerald-600 text-slate-100">
        {children}
      </div>
    </div>
  )
}
