import Image from 'next/image'

export const Profile = ({ name, img }) => {
  return (
    <div className="w-96 flex flex-col items-center gap-2">
      <Image alt={'profile, ' + name} className="rounded-full" height={200} src={img} width={200} />
      <h2 className="text-3xl text-emerald-500 font-semibold">{name}</h2>
    </div>
  )
}
