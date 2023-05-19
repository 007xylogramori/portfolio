import React from 'react'
import {techStack} from "../../data.js"
import "./tech.css"
const Tech = () => {
  return (
    <div className="techOuter">
        <div className="pl-texts">
         <h1 className="pl-title">Technologies and Tools</h1>
         <p className="pl-desc">
         Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>
        </div>
        <div className='techContainer'>
      {techStack.map((item,i)=>{
        return (<img   className='techLogo' src={item.link} alt=""/>)
      })}
    </div>
    </div>
  )
}

export default Tech
