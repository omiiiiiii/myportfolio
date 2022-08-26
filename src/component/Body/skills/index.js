import React, { useEffect, useRef, useState } from 'react'
import Seprator from '../../common/socialcontact/seprator'
import { Skilldata } from '../../data/skill'
import Skillcard from './skill-card';
import './skill.css'


function Skills() {
    const data = Skilldata;
    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting){
            setshowAnimation(true)
        }   
    }
    const option={
        root:null,
        rootMargin:"0px",
        threshold:0.5
    }
    const [showAnimation ,setshowAnimation]=useState(false)
    const ref =useRef(null)
    useEffect(() => {
        const observer=new IntersectionObserver(toggleAnimation,option)
        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current)
            }
        }
        
        return()=>{
            
            if(ref.current){
                // eslint-disable-next-line
                observer.unobserve(ref.current)
            }
        }
    })
  return (
  
    <div className={`skills ${showAnimation?'swirl-in-fwd':""}`} ref={ref}>
        <Seprator />
        <label className='section-title'>Skills</label>
        <div className='skill-container'>
        {data.map((item)=>{
            return (<div className='skills-section'>
            <label className='skills-section-title'>{item.type}</label>
            <div className='skills-list'>
                {item.list.map((skill)=>{
                    return(
                        <Skillcard skill={skill } />
                    )
                    
                })}
            </div>
            </div>) 
        })}
        </div>
    </div>
  )
}

export default Skills