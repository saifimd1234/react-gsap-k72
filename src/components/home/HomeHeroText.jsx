import React from 'react'
import { Video } from './Video'

export const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-[9.5vw] text-center'>
      <div className="text-white uppercase leading-[9vw] pt-[10vw] flex items-center justify-center">
        The spark for
      </div>
      <div className="text-white uppercase leading-[9vw] flex items-center justify-center">
        all
        <div className="h-[7vw] w-[16vw] -mt-2 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-white uppercase leading-[9vw] flex items-center justify-center">
        creative
      </div>
    </div>
  )
}