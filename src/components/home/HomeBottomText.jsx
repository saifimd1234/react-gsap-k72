import React from 'react'
import { Link } from 'react-router-dom'

export const HomeBottomText = () => {
  return (
    <div className="font-[font2] text-[9vw] text-center text-white uppercase flex items-center justify-center gap-1 mb-1">
      <Link to="/projects" className="border-2 rounded-full leading-[9vw] px-4 -py-2 pt-1.5 hover:text-[#d3fd50]">
        Projects
      </Link>
      <div className="border-2 rounded-full leading-[9vw] px-4 py-1 hover:text-[#d3fd50]">
        <Link to="/agence" className="text-[9vw] hover:text-[#d3fd50]">
          Agence
        </Link>
      </div>
    </div>
  )
}