import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav' className="text-white h-screen py-40 w-full absolute bg-amber-900">
            <div id='all-links' className=''>
                <div className='link relative border-t-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Projects</h1>
                    <div className='absolute w-full left-0 top-0 overflow text-black bg-[#D3FD50]'>
                        <div className='flex w-max'>
                            <div className='moveX flex items-center'>
                                <h2 className='font-font[2] whitespace-nowrap text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>See Everything</h2>
                                <img className='px-2 h-24 rounded-full shrink-0 w-96 object-cover' src='public\images\luffy0.jpg' alt='' />
                                <h2 className='font-font[2] whitespace-nowrap text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>See Everything</h2>
                                <img className='px-2 h-24 rounded-full shrink-0 w-96 object-cover' src='public\images\luffy1.png' alt='' />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='font-font[2] whitespace-nowrap text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>See Everything</h2>
                                <img className='px-2 h-24 rounded-full shrink-0 w-96 object-cover' src='public\images\luffy0.jpg' alt='' />
                                <h2 className='font-font[2] whitespace-nowrap text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>See Everything</h2>
                                <img className='px-2 h-24 rounded-full shrink-0 w-96 object-cover' src='public\images\luffy1.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='link border-t-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Agency</h1>
                    <div>
                        <div>
                            <h2>See Everything</h2>
                            <img src='public\images\luffy0.jpg' alt='' />
                            <h2>See Everything</h2>
                            <img src='public\images\luffy1.png' alt='' />
                        </div>
                        <div>
                            <h2>See Everything</h2>
                            <img src='public\images\luffy0.jpg' alt='' />
                            <h2>See Everything</h2>
                            <img src='public\images\luffy1.png' alt='' />
                        </div>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default FullScreenNav