export const StatsUser = () => {
  return (
    <div className="w-full">
      <span>
        Your progress is represented by the sentences you have completed. ¡So start practicing!.
      </span>
      <div className="mt-4 max-w-2xl bg-gray-200 rounded-full">
        <div
          className="bg-emerald-600 text-sm font-medium text-slate-100 text-center p-1 leading-none rounded-l-full"
          style={{ width: '5%' }}
        >
          <span>0%</span>
        </div>
      </div>
    </div>
  )
}
