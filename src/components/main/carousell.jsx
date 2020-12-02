import React from 'react'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 2, itemsToScroll: 2 }
];

export default function Carousell() {
  return (
      <Carousel breakPoints={breakPoints}>

          <div class='item-tags'>
            <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt='tags' />
            <p class='item-text'>Trends in 2020</p>
          </div>

          <div class='item-tags'>
            <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt='tags' />
            <p class='item-text'>Black edition</p>
          </div>

          <div class='item-tags'>
            <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt='tags' />
            <p class='item-text'>Trends in 2020</p>
          </div>

          <div class='item-tags'>
            <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt='tags' />
            <p class='item-text'>Black edition</p>
          </div>

      </Carousel>
  )
}
