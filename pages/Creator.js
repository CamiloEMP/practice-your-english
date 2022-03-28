import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'

function Creator() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="mb-20">
        <blockquote className="text-4xl font-bold italic text-center text-slate-900">
          Hello my name is
          <br />
          <span className="mt-4 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-emerald-400 relative inline-block">
            <span className="relative text-white">Camilo Mora</span>
          </span>
        </blockquote>
        <div className="flex justify-center mt-6 text-4xl">
          <a href="https://github.com/CamiloEMP/" rel="noreferrer" target="_blank">
            <FaLinkedin className="mr-4 transition-colors hover:fill-emerald-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/camilo-mora/" rel="noreferrer" target="_blank">
            <FaGithub className="transition-colors hover:fill-emerald-400 cursor-pointer" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-xl text-justify font-semibold">
          My reason for this project is simple, I want to practice English, but I also want to
          practice my programming skills, so I am working on this project to increase my knowledge
          and create something useful that will benefit both me and you, unknown reader.
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-2 text-xl">
        <span>I hope you like it</span>
        <FaHeart className="fill-red-500" />
      </div>
    </section>
  )
}

export default Creator
