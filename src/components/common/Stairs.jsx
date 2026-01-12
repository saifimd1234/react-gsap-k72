import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

// use props to view the children of stairs
const Stairs = (props) => {

  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: 'block',
    })
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25
      }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to(stairParentRef.current, {
      display: 'none',
    })
    tl.to('.stair', {
      y: '0%',
    })
  }, [currentPath])

  console.log(props)
  console.log(props.children)

  return (
    <div>
      <h1 className='text-3xl font-bold text-white'>Stairs</h1>
      <div ref={stairParentRef} className="h-screen w-screen fixed z-10 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/4 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
          <div className="stair h-full w-1/5 bg-black" />
        </div>
      </div>
    </div>
  )
}

export default Stairs