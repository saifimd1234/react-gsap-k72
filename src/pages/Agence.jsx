import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {

    const imageDivRef = useRef(null);
    const imageRef = useRef(null);
    const imageArray = [
        "/images/luffy0.jpg",
        "/images/luffy1.png",
        "/images/luffy2.jpg",
        "/images/luffy3.jpg",
        "/images/luffy4.jpg",
        "/images/luffy5.jpg",
        "/images/luffy6.jpg",
    ]

    useGSAP(function () {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                markers: true,
                start: "top 34%",
                end: "top -30%",
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: "transform",
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    let imageIndex;
                    if (self.progress < 1) {
                        imageIndex = Math.floor(self.progress * imageArray.length)
                    } else {
                        imageIndex = imageArray.length - 1
                    }
                    imageRef.current.src = imageArray[imageIndex];
                }
            },
        })
    });

    return (
        <div>
            <div className="section1 py-1"> {/* important: py-1  */}
                <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] top-96 left-[30vw] rounded-4xl">
                    <img ref={imageRef} src="/images/luffy0.jpg" alt="luffy" className="w-full h-full object-cover" />
                </div>
                <div className="font-[font2] text-white relative">
                    <div className="mt-[55vh]">
                        <h1 className="text-[19vw] leading-[19vw] text-center uppercase">
                            SEVEN7Y <br /> TWO
                        </h1>
                    </div>
                    <div className="pl-[40%] mt-20">
                        <p className="text-2xl leading-[1em]"> &nbsp; &emsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
                    </div>
                </div>
            </div>
            <div className="section2 h-[200vh]">

            </div>
        </div>
    )
}

export default Agence