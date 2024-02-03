import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'

const Header = () => {
  return (
    <div className="bg-purple-primary flex justify-around items-center border-white border-solid border-b-[0.5px] border-stone-400  max-w-full py-3 ">
      <div className="">
        <Image src={logo} />
      </div>
      <div className="text-base font-semibold flex gap-x-3">
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div className="">
        <button className="bg-[#0DC74F] hover:bg-[#099a3d] py-3 px-10  rounded-md font-bold">
          Fale conosco
        </button>
      </div>
    </div>
  )
}

export default Header
