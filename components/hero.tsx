
import Image from 'next/image'
import xataflyWhite from '~/public/LogoDespe.png'


type HeroProps = { searchTerm?: string; totalTitles?: string }

export const Hero = ({ searchTerm, totalTitles }: HeroProps) => (
  <center><div className="container px-4 py-8 mx-auto text-center lg:py-16 lg:px-12 ">
    <center><Image src={xataflyWhite} alt="Xata Logo" className="w-6" /></center>
  </div></center>
)
