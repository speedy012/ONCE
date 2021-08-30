import React, { useEffect, useState } from 'react'

import CardContainer from './CardContainer'
import Carousel from './Carousel'

function MainContainer() {
  const [slidesText, setSlidesText] = useState('')
  const [slides, setSlides] = useState([])
  const [cards, setCards] = useState([])

  useEffect (() => {
    const fetchImgSlides = async () => {
    const resp = await fetch('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge')
    const data = await resp.json()
    
    setSlidesText(data.hero_text)
    setSlides(data.hero_slides)
    setCards(data.cards)
  
  }
  
  fetchImgSlides()
  
  }, [])


  console.log(slides)

  return (
    <div>
      <Carousel slides={slides} slideText={slidesText}/>
      <CardContainer cards={cards}/>
    </div>
  )
}

export default MainContainer;
