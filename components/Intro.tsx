import { FC } from 'react'

interface IntroProps {
  
}

const Intro: FC<IntroProps> = ({  }) => {
  return (
    <div className="flex items-center md:my-0 my-6 justify-center">
    <h3 className="md:text-5xl text-4xl  font-bold text-gray-800">Projects</h3>
  </div>
  )
}

export default Intro