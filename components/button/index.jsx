const Button = ({ title, kind }) => {
  const buttonPrimaryPresets = 'bg-[#0DC74F] hover:bg-[#099a3d] text-white'
  const buttonSecundaryPresets =
    'bg-[#FFFFFF] hover:bg-[#0FCE33] text-purple-primary hover:text-white'

  const buttonColor =
    kind === 'primary' ? buttonPrimaryPresets : buttonSecundaryPresets

  return (
    <button className={`${buttonColor} py-3 px-10  rounded-md font-bold`}>
      {title}
    </button>
  )
}

export default Button
