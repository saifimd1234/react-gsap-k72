import React from 'react'
import { Video } from './Video'

export const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-[12vw] text-center'>
      <div className="text-white uppercase leading-[11vw] pt-[20vw] flex items-center justify-center">
        The spark for
      </div>
      <div className="text-white uppercase leading-[11vw] flex items-center justify-center">
        all
        <div className="h-[7vw] w-[16vw] -mt-2 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-white uppercase leading-[11vw] flex items-center justify-center">
        creative
      </div>
    </div>
  )
}