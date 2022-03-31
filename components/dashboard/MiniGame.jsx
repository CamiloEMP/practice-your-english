import Image from 'next/image'
import Link from 'next/link'
// https://i.imgur.com/uiXGkeV.png
export const MiniGame = ({ title, img }) => {
  return (
    <Link href="/">
      <a className="flex flex-col w-64 transition-transform hover:scale-105">
        <Image
          alt="img"
          className=" rounded-t-lg"
          height={180}
          layout="responsive"
          objectFit="cover"
          src={img}
          width={220}
        />{' '}
        <h5 className="bg-emerald-600 rounded-b-lg text-teal-50 text-xl text-center my-2 py-1">
          {title}
        </h5>
      </a>
    </Link>
  )
}
