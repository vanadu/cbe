// !VA These are the image bricks that scroll across the screen in the Header
import React from 'react'
import Image from 'next/image'
import * as styles from '../styles/Header.module.scss'

const HeaderBrick = ({src, className, alt}) => {

  return (
    <>
      <Image 
        src={src} 
        width="0"
        height="0"
        className={className} alt={alt} 
      />
    </>
  )
}

export default HeaderBrick