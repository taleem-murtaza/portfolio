import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function WorkExperience() {


  const slideRef = useRef()

  const settings = {
    dots:false,
    infinite:true,
    slidesToShow:2,
    slideToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint: 769,
        settings:{
          slidesToShow:1,
          slideToScroll:1,
        }
      }
    ]
  }

  const slideRight = ()=>{
    slideRef.current.slickNext()
  }

  const slideLeft = () =>{
    slideRef.current.slickPrev()
  }
  return (
    <section className="experience-container" id='work'>
        <h5>Projects & Qualification</h5>

        <div className="experience-content">
          <div className="arrow-left"  onClick={slideLeft}>
            <span><ArrowBackIosIcon/></span>
          </div>
          <div className='arrow-right' onClick={slideRight}>
            <span ><ArrowForwardIosIcon/></span>
          </div>
          

          <Slider ref={slideRef} {...settings}>
            {
                WORK_EXPERIENCE.map((item) =>(
                    <ExperienceCard key={item.title} details={item}/>
                ))
            }
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience