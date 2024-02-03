import Image from 'next/image'
import featureIcon from '/public/featureIcon.svg'

const Features = () => {
  return (
    <div className="text-white flex flex-col items-center gap-y-8 mt-5 mx-auto max-w-[50%] text-center">
      <h1 className="font-bold text-4xl">
        Neste bairro, não há agência melhor. Garantimos.
      </h1>
      <p className="font-thin max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-wrap justify-center gap-9">
        <div className="text-start w-[350px] bg-white rounded-md text-purple-primary p-5">
          <Image
            className="w-12"
            src={featureIcon}
            alt="Icone de computador com grafico e lupa"
          />
          <h2 className="font-bold text-2xl my-3">Digital Strategy</h2>
          <p className="text-[#4A4A4A]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="text-start w-[350px] bg-white rounded-md text-purple-primary p-5">
          <Image
            className="w-12"
            src={featureIcon}
            alt="Icone de computador com grafico e lupa"
          />
          <h2 className="font-bold text-2xl my-3">Digital Strategy</h2>
          <p className="text-[#4A4A4A]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="text-start w-[350px] bg-white rounded-md text-purple-primary p-5">
          <Image
            className="w-12"
            src={featureIcon}
            alt="Icone de computador com grafico e lupa"
          />
          <h2 className="font-bold text-2xl my-3">Digital Strategy</h2>
          <p className="text-[#4A4A4A]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="text-start w-[350px] bg-white rounded-md text-purple-primary p-5">
          <Image
            className="w-12"
            src={featureIcon}
            alt="Icone de computador com grafico e lupa"
          />
          <h2 className="font-bold text-2xl my-3">Digital Strategy</h2>
          <p className="text-[#4A4A4A]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
