// !VA These are the image bricks that scroll across the screen in the Header
import React from 'react'
import Image from 'next/image'
import * as styles from '../styles/Header.module.scss'

const HeaderBrick = ({src, alt}) => {

  console.log('src :>> ');
  console.log(src);

  console.log('alt :>> ');
  console.log(alt);


  return (
    <>
      <Image 
        src={src} 
        width="0"
        height="0"
        className={styles.brick_img} alt={alt} 
      />
    </>
  )
}

export default HeaderBrick