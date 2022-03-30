import Image from 'next/image'
import Link from 'next/link'
// https://i.imgur.com/uiXGkeV.png
export const MiniGame = ({ title, description, img }) => {
  return (
    <Link href="/">
      <a className="flex flex-col w-80 transition-transform hover:scale-105">
        <Image
          alt="img"
          className=" rounded-t-lg"
          height={260}
          objectFit="cover"
          src={img}
          width={320}
        />
        <div>
          <h5 className="bg-emerald-600 rounded-sm text-teal-50 text-xl text-center my-2 py-1">
            {title}
          </h5>
          <p className="">{description}</p>
        </div>
      </a>
    </Link>
  )
}
