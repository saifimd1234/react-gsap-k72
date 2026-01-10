import React from 'react'

export const Video = () => {
  return (
    <div className='h-screen w-screen'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="/homepage1.mp4" />
    </div>
  )
}
