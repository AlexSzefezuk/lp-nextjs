import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'
import Button from '../button'

const Header = () => {
  return (
    <div className="bg-purple-primary flex justify-around items-center border-white border-solid border-b-[0.5px] border-stone-400  max-w-full py-3 ">
      <div className="">
        <Image src={logo} alt="logo image" />
      </div>
      <div className="text-base font-semibold flex gap-x-3">
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  )
}

export default Header
