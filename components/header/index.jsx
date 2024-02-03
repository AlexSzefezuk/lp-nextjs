import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'
import Button from '../button'

const Header = () => {
  return (
    <div className="max-w-[100rem] mx-auto bg-purple-primary flex justify-between items-center border-white border-solid border-b-[0.01px] border-stone-400/70 px-[180px] py-3 ">
      <div className="">
        <Image src={logo} alt="logo image" />
      </div>
      <div className="text-base font-semibold flex gap-x-6 text-white">
        <Link href="/">Home</Link>
        <Link href="/">O que fazemos</Link>
        <Link href="/">Cases</Link>
      </div>
      <div className="">
        <Button kind="primary" title="Fale conosco" />
      </div>
    </div>
  )
}

export default Header
