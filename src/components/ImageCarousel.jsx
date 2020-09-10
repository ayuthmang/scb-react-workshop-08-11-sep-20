import React, { useState, useEffect } from 'react'
import matcha1 from '../images/matcha-1.jpg'
import matcha2 from '../images/matcha-2.jpg'
import matcha3 from '../images/matcha-3.jpg'
import matcha4 from '../images/matcha-4.jpg'

const images = [matcha1, matcha2, matcha3, matcha4]

function Image({ src }) {
  useEffect(() => {
    return () => {
      console.log('image unmounted')
    }
  })
  return (
    <img
      style={{ borderRadius: '10px', boxShadow: '2px 2px 20px 1px grey' }}
      width={250}
      height={250}
      src={src}
    />
  )
}

function ImageCarousel() {
  const [showIndex, setShowIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    // componentDidMount, componentDidUpdate
    let interval
    console.log('interval', interval)
    if (isPlaying) {
      interval = setTimeout(() => {
        setShowIndex((showIndex + 1) % images.length)
      }, 2000)
    }

    // componentWillUnmount
    return () => {
      console.log('ImageCarousel unmounted')
      // console.log('clearEffect')
      clearTimeout(interval)
    }
  }, [showIndex, isPlaying])

  return (
    <div>
      <h1>Image Carousel</h1>
      <Image src={images[showIndex]} />
      <p>
        Showing {showIndex + 1} of {images.length}
      </p>
      <div>
        <button onClick={() => setShowIndex(0)}>{'<<'}</button>
        <button
          onClick={() =>
            setShowIndex((showIndex - 1 + images.length) % images.length)
          }
        >
          {'<'}
        </button>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => setShowIndex((showIndex + 1) % images.length)}>
          {'>'}
        </button>
        <button onClick={() => setShowIndex(images.length - 1)}>{'>>'}</button>
      </div>
    </div>
  )
}

export default ImageCarousel
