import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaRegMinusSquare } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'

import SeparatorDots from '../components/SeparatorDots'
import RedDownArrow from '../../public/images/img-red-arrow-down.png'
import RedRightArrow from '../../public/images/img-red-arrow-right.png'
import GoldDownArrow from '../../public/images/img-gold-down-arrow.png'

import * as styles from '../styles/Pages.module.scss'

// !VA Get the props from the child
const AccordionContent = ({
  title,
  text,
  children,
  index,
  activeAccordionIndex,
  setActiveAccordionIndex,
}) => {



  // !VA 
  const accordionRef = useRef()

  const handleSetIndex= (index) => {
    if (activeAccordionIndex !== index ) {
      setActiveAccordionIndex(index);
      // console.log('LATER activeAccordionIndex :>> ' + activeAccordionIndex);
      console.log('children :>> ');
      console.log(children);
    } else {
      setActiveAccordionIndex(0);
    }
    // !VA Once the accordion content has expanded, we can move the top of the accordion container to the top of the screen with the scroll-margin set in the CSS. If you scrollIntoView before the accordion is expanded, the scroll operation will run first and then when the accordion opens it will scroll again to accommodate the new container.
    setTimeout(() => {
      accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300);
  }



  return (
    <>
      <div 
        // className={`accordion-container accordion-container-${index}`}
        className={[styles.accordion_container, 'accordion_container_${index}'].join(' ')}

        ref={accordionRef}
        >


        <div
          onClick={() => handleSetIndex(index)}
          className='accordion'>
          <div 
            className='accordion__title'>
            <div className='accordion__icon'>
              {activeAccordionIndex === index ? (
                <Image 
                  src={RedDownArrow} 
                  width="0"
                  height="0"
                  sizes="100vw"
                  // style={{ width: '40px', height: 'auto' }}
                  className='blib' alt="XXX" 
                />
              ) : (
                <Image 
                  src={RedRightArrow} 
                  width="0"
                  height="0"
                  sizes="100vw"
                  // style={{ width: '12px', height: 'auto' }}ddd
                  className='blob' alt="XXX" 
                />
              )}
            </div>
            <h3
              className={`accordion__title-heading ${index === activeAccordionIndex ? 'accordion_open' : ''}`}>{title}
            </h3>

          </div>
          <div className="accordion__content">
            <p  
              className={`accordion__title-text ${index === activeAccordionIndex ? 'accordion_open' : ''}`}>{text}
            </p>
            <div className={`accordion__learn-more ${index === activeAccordionIndex ? 'learn-more-hide' : ''}`}>
              <h4>Learn More</h4>
              <Image 
                src={GoldDownArrow} 
                width="0"
                height="0"
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className='gold-down-arrow' alt="XXX" 
              />
            </div>
          </div>
          {activeAccordionIndex === index && (
            <div className='accordion__content'>
              {children}

            </div>
          )}
        </div>
        <hr className='accordion_separator' />
      </div>
    </>
  )
}

export default AccordionContent
