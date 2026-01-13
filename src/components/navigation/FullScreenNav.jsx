import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav' className="text-white h-screen py-40 w-full absolute bg-amber-900">
            <div id='all-links' className=''>
                <div className='link border-y border-white'>
                    <h1 className='font-font[2] text-[8vw] uppercase'>Projects</h1>
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
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav