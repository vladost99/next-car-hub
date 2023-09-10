import Image from 'next/image';
import React from 'react'

const SearcrButton = ({othersClasses}: {othersClasses: string;}) => {
  return (
    <button type='submit' className={`-ml-4 z-10 ${othersClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
  )
}

export default SearcrButton