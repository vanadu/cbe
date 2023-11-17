import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaRegMinusSquare } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'

import SeparatorDots from './SeparatorDots'
import RedDownArrow from '../../public/images/img-red-arrow-down.png'
import RedRightArrow from '../../public/images/img-red-arrow-right.png'
import GoldDownArrow from '../../public/images/img-gold-down-arrow.png'

import * as styles from '../styles/Expander.module.scss'

// !VA Get the props from the child
const Expander = ({
  title,
  text,
  children,
  index,
  activeExpanderIndex,
  setActiveExpanderIndex,
}) => {

  // !VA 
  const expanderRef = useRef()

  const handleSetIndex= (index) => {
    if (activeExpanderIndex !== index ) {
      setActiveExpanderIndex(index);
      // console.log('LATER activeExpanderIndex :>> ' + activeExpanderIndex);

    } else {
      setActiveExpanderIndex(0);
    }
    // !VA Once the Expander content has expanded, we can move the top of the Expander container to the top of the screen with the scroll-margin set in the CSS. If you scrollIntoView before the Expander is expanded, the scroll operation will run first and then when the Expander opens it will scroll again to accommodate the new container.
    // !VA expanderRef -> expanderRef
    setTimeout(() => {
      expanderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300);
  }


  return (
    <>
      <div className={styles.main}
        ref={expanderRef}
        >


          <div
            onClick={() => handleSetIndex(index)}
            className={styles.block}
            >
            <div className={styles.head}>

              <div className={styles.head_header}>
                <div className={styles.head_header_icon}>
                  {activeExpanderIndex === index ? (
                    <Image 
                      src={RedDownArrow} 
                      width="0"
                      height="0"
                      sizes="100vw"
                      // style={{ width: '40px', height: 'auto' }}
                      className={styles.head_header_icon_right} alt="XXX" 
                    />
                  ) : (
                    <Image 
                      src={RedRightArrow} 
                      width="0"
                      height="0"
                      sizes="100vw"
                      // style={{ width: '12px', height: 'auto' }}ddd
                      className={styles.head_header_icon_down} alt="XXX" 
                    />
                  )}
                </div>
                <h3 className={styles.head_header_heading}>{title}
                </h3>
              </div>

              <div className={styles.head_content}>
                <p className={styles.head_content_text}>
                  {text}
                </p>
                <div className={`${styles.head_content_learnmore} ${activeExpanderIndex === index ? styles.hide_learnmore : ''}`}>
                  <h4 className={styles.head_content_learnmore_text}>
                    Learn More
                  </h4>
                  <Image 
                    src={GoldDownArrow} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    // style={{ width: '100%', height: 'auto' }}
                    className={styles.head_content_learnmore_icon} alt="Learn more..." 
                  />
                </div>
              </div>
            </div>

            {activeExpanderIndex === index && (
              <div 
                className={styles.content}
              >
                {children}
  
              </div>
            )}
          </div>
          {index !== 3 ? <hr className={styles.separator} /> : null}


        
      </div>
    </>
  )
}

export default Expander
