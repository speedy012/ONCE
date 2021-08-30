import '../styles/CardContainer.css'

import React, { useEffect, useState } from 'react'

import Masonry from 'react-masonry-css'

function CardContainer({ cards }) {

  const [sortedCards, setSortedCards] =useState([])
  const [newDate,setNewDate] = useState("")

  useEffect(() => {
    let arr;
    let dateFormat;
    const sortedArr = () => {
  
      
      
        if(cards.length > 0) {
          dateFormat = new Date(cards.date).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
          
          
          arr = cards.sort((a,b) => {
      
  return new Date(a.date) - new Date(b.date)
        })
        setSortedCards(arr)
        setNewDate(dateFormat)
        console.log(sortedCards)
    }
    
  }
  sortedArr()
    
}, [cards, sortedCards, newDate])


  const mapCards = () => {
    
    if(cards.length > 0) {
      return sortedCards.map((card, index) => {


        return (
          <div key={index}> 
            <img src={card.image} alt="random" />
            <h6>{new Date(card.date).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})}</h6>
            <h3>{card.title}</h3>
            <h6>Presented by <span>{card.author}</span></h6>
          </div>
        )
      })

    }
    
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700:1
  }


  return (
    <div className="card-container">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {mapCards()}
      </Masonry>
    </div>
  )
}

export default CardContainer
