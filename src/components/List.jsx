

import React from 'react'

import ListItem from "./ListItem"
import "./css/list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'

function List() {

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  //we use useRef inside methods where we want to access an existing class. In this case we accessed container
  const listRef = useRef()

  

  const handleClick = (direction) => {

    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 100;
    
    if (direction === "left" && slideNumber > 0) {

      setSlideNumber(slideNumber-1)
      //.current is used when accessing useRef class
      listRef.current.style.transform = `translateX(${233 + distance}px)`
    }

    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);

      //.current is used when accessing useRef class
      listRef.current.style.transform = `translateX(${-233 + distance}px)`
    }




    console.log(distance);
  }

  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow back" onClick={() => handleClick("left")} style={{display : !isMoved && "none"}}/>
          <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            <ListItem index={10}/>
            <ListItem index={11}/>
          </div>
          <ArrowForwardIosOutlined className="sliderArrow forward" onClick={() => handleClick("right")}/>
                        
        </div>
    </div>
  )
}

export default List