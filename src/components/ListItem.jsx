
import { Add, PlayArrow, ThumbDown, ThumbUp } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import "./css/listItem.scss"

function ListItem({index}) {


  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=HhesaQXLuRY&ab_channel=TrailerBlend";


  return (
    <div className='listItem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{left : isHovered && index * 233 - 100 + index * 2.5}}>
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433" alt="" />


      <div className="item-info">
        <div className="icons">
          <Add className="icon"/>
          <ThumbUp className="icon like"/>
          <ThumbDown className="icon dislike"/>
        </div>

        <div className="item-info-top">
          <span>1 hour 14 minutes</span>
          <span>2008</span>
          <span className="age-limit">16+</span>
          
        </div>

        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis totam repellat laborum aliquid fuga quisquam quasi, animi quos iusto. Repellat consequuntur alias similique explicabo consequatur aperiam, quos assumenda deleniti!</p>
        </div>
      </div>
    </div>
  )
}

export default ListItem