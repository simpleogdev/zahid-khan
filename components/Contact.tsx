import { FC } from 'react'

interface ContactProps {
  
}

const Contact: FC<ContactProps> = ({  }) => {
  return (
    <div className='contact md:-mt-16 mt-6'>
      <div className='flex -mt-20 flex-col md:mx-0 mx-5 items-center justify-center'>
        <h4 className='uppercase font-bold text-5xl '>Contact</h4>
        <p className='my-8 text-2xl'>
        Would you like to work with me? Awesome!
        </p>
        <a className='text-xl border-white border-2 px-4 py-2 font-bold hover:bg-white hover:text-primary transition-all duration-200' href="mailto:mrzkk07@gmail.com">Email : mrzkk07@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact