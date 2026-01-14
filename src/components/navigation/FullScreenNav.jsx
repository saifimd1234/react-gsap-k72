import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav' className="text-white h-screen w-full overflow-x-hidden absolute bg-black">
            <div className='flex w-full justify-between items-center bg-amber-500'>
                <div className='p-3 pt-2.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                        <path fill="white" fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z">
                        </path>
                    </svg>
                </div>
                <div className='bg-red-800 h-[10vw] w-[10vw] relative'>
                    <div className='absolute top-1/2 left-1/2 h-[14vw] w-1 bg-[#D3FD50]
               -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full'></div>
                    <div className='absolute top-1/2 left-1/2 h-[14vw] w-1 bg-[#D3FD50]
               -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full'></div>
                </div>

            </div>
            <div id='all-links' className='py-30'>
                <div className='link relative border-t-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Projects</h1>
                    <div className='moveLink absolute w-full left-0 top-0 overflow text-black bg-[#D3FD50]'>
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
                <div className='link relative border-t-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Agency</h1>
                    <div className='moveLink absolute w-full left-0 top-0 overflow text-black bg-[#D3FD50]'>
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
                <div className='link relative border-t-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Contact</h1>
                    <div className='moveLink absolute w-full left-0 top-0 overflow text-black bg-[#D3FD50]'>
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
                <div className='link relative border-y-[0.3px] border-white'>
                    <h1 className='font-font[2] text-center text-[10vw] leading-[1.1] -mt-2 uppercase'>Blog</h1>
                    <div className='moveLink absolute w-full left-0 top-0 overflow text-black bg-[#D3FD50]'>
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

            </div>
        </div>
    )
}

export default FullScreenNav