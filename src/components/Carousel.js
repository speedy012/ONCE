import '../styles/slick-theme.css'
import '../styles/slick.css'
import '../styles/Carousel.css'

import React, { useEffect, useState } from 'react'

import Slider from "react-slick";

function Carousel({slides, slideText}) {
  const [firstTitle, setFirstTitle] = useState('')
  const [secondTitle, setSecondTitle] = useState('')
  const [firstSub, setFirstSub] = useState(" ")
  const [secondSub, setSecondSub] = useState(" ")
  const [revisedDate, setRevisedDate] = useState("")

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  useEffect (() => {
    const rearrangeTitles = () => {
      let newString;
      let firstWord;
      let restOfString;

      let sub1;
      let sub2;
      let newDate;
     
      if(slideText) {
        newString = slideText.title.split(" ")
        firstWord = newString[0]
        restOfString = newString.slice(1).join(' ')

        
        sub1 = slideText.subtitle.slice(0,58)
        sub2 = slideText.subtitle.slice(59,106)
        
        newDate = new Date(slideText.date).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
      }
    
      setFirstTitle(firstWord)
      setSecondTitle(restOfString)
      setFirstSub(sub1)
      setSecondSub(sub2)
      setRevisedDate(newDate)
    }
    rearrangeTitles() 
  }, [firstTitle, secondTitle, slideText, revisedDate])


  
 
  
   

  const mapData = () => {
    return slides.map((pics, index) => {
      return (
        <div className="container" key={index}>
          <img className="caro-image" src={pics.image} alt={pics.alt} />
          <div className='text-body'>
            <h2 className="font-sp">{firstTitle}</h2>
            <h2 className="font-ar">{secondTitle}</h2>
            <h4>{revisedDate}</h4>
            <div className="subtitles"> 
              <h6 className="first-sub">{firstSub}</h6>
              <h6 className="sec-sub">{secondSub}</h6>
            </div> 
          </div>
        </div>
      )}
    )
  }
  
  return (
    <div className="carousel">
      <Slider {...settings}>
        {mapData()}
      </Slider>
    </div>
  )
}

export default Carousel
