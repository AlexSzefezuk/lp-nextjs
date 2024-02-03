import Image from 'next/image'
import Button from '../button'
import asideImage from '/public/result.svg'

const Welcome = () => {
  return (
    <div
      className={`flex justify-between items-center pt-3 px-[180px] max-w-[100rem] h-[600px] mx-auto bg-purple-primary bg-[url(../public/backgroundWelcome.svg)] bg-cover bg-no-repeat`}
    >
      <aside className="max-w-[50%]">
        <h1 className="font-bold text-5xl mb-7 text-white">
          Melhor agência de marketing do bairro
        </h1>
        <p className="text-xl font-thin max-w-[70%] mb-7 text-white">
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button kind="secundary" title="Aumentar vendas" />
      </aside>
      <article>
        <Image
          src={asideImage}
          alt="Imagem: pessoas que converteram na campanha"
        />
      </article>
    </div>
  )
}

export default Welcome
