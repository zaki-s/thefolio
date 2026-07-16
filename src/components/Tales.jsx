import React from 'react'
import './Tales.css'

const Tales = () => {
  // the general idea is to have the tales as photos scattered all over the screen as polaroids.
  // these images will act and will be links to the actual places where the tales of the said image lives at.
  // are they static? Probably NOT, statics way too boring.
  // once at the page's tale, what will be the design behind the said page. A simple interface that has the images for reference that once hoveres upon increase in size and straighten up from the initial tilted design
  // the said images on the design to be a bit different on each of the tales page. just to offer a bit of randomness and ruggedness and not to neat
  
  // the design that i have settled with is a design that revolves around "pollaroid pics", for the tale page, the word tale in a styled font, will sit at the ded center of a page and maybe have a light glowing behind it
  // the diff tales will be displayes all at once, in the form of a bunch of different pollaroid design cards. Upon hover the pollaroid straightens out and you can see a description on the white part of i.
  // the redirection link will be a simple arrow icon, not straight but be curved a bit to add a stylised thing.
  // another styling feature, i will implement a light behind everything, but mostly beneath the word "tales" like some holy light! and the light reacts to the cards, casting shadows etc (this will be interesting to make)
  return (
    <div className="tales">
      <h1 classname="tales-title">TALES</h1>
       
    </div>

  )
}

export default Tales
