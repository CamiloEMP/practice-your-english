import Image from 'next/image'

export const Profile = ({ name, img }) => {
  return (
    <div className="w-96 flex flex-col items-center gap-2">
      <div className="w-full flex justify-center">
        <Image
          alt={'profile, ' + name}
          className="rounded-full"
          height={96}
          objectPosition="center"
          src={img}
          width={96}
        />
      </div>
      <h2 className="text-2xl text-center text-emerald-500 font-semibold">{name}</h2>
    </div>
  )
}
