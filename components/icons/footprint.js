import Image from 'next/image'
const FootprintIcon = props => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      width="20"
      height="20"
      alt='Frazix'
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      {...props}
      src="/images/frazix.png"
    />
  )
}

export default FootprintIcon
