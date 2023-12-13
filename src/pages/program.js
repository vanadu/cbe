import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProgramBranding from '../../public/images/img-cbe-branding-slug-no-logo.png'
import AcmeGuitars from '../../public/images/img-acme-guitars.jpg'
import HohnerHarps from '../../public/images/img-hohner-harps.jpg'

import * as styles from '../styles/Pages.module.scss'

const Program = () => {
  return (
    <>
      <section className={`${styles.home_bg} ${styles.section}` }>
        <div className={styles.home_content}>
          <div className={styles.program_head}>
            <h1 className={styles.program_head_branding}><span className={styles.secondary_color}>crossroads</span> blues <span className={styles.secondary_color}>experience</span></h1>
            <h2 className={styles.program_head_slug}>inspire&nbsp;&bull;&nbsp;educate&nbsp;&bull;&nbsp;engage</h2>
            <hr className={styles.program_head_rule}/>
          </div>
          <h2 className={styles.program_heading}>The CBE Program</h2>
          <p className={styles.content_text}>
            <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is a live performance/multimedia program for people of all ages. Originally conceived as a program for schools, <span className={styles.semibold}>CBE</span> also performs at public venues where all ages can come together to share in the experience of our American story.  
          </p>
          <p className={styles.content_text}>
          <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> fills a need for parents, grandparents, guardians &mdash; or even siblings &mdash; to experience live music together in a safe, moderate-volume environment with a program that crosses generational and cultural divides and educates as well as entertains.
          </p>
          <h2 className={styles.program_heading}>Blues is History</h2>
          <p className={styles.content_text}>
            Most people associate blues music with gritty vocals and full bands with electric instruments and drums. But before the invention of electric instruments, the people of the South were using whatever instruments they could get their hands on to imprint their own experience and history on their music.
          </p>
          <div className={styles.flex_center}>
            <figure className={styles.figure_two_up}>
              <Image 
                src={AcmeGuitars} 
                width="0"
                height="0"
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_two_up_image} alt="Acme Guitars" 
              />
              /
              <Image 
                src={HohnerHarps} 
                width="0"
                height="0"
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_two_up_image} alt="Hohner Harmonicas" 
              />
            </figure>
          </div>
          <p className={styles.content_text}>
             From Texas to Appalachia, each region developed a distinct character of the blues. What they all share is a <span className={styles.italic}>feeling</span> that touched people all over the world and is deeply rooted in the American experience.
          </p>
          <p className={styles.content_text}>
           Blues music speaks to a wide range of people for whom the more complex melodic and harmonic structures of traditional jazz may be perceived as inaccessible. 
          </p>
          <p className={styles.content_text}>
          <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is dedicated to bringing authentic pre&#8209;electric blues music to live audiences so that new generations of Americans can connect with our shared heritage and carry the blues tradition forward.
          </p>
          <h2 className={styles.program_heading}>
            Our Mission
          </h2>
          <p className={styles.content_text}>
            Our mission is to inspire, educate and engage students with a multimedia experience interweaving live music, geography, social studies, and history based on the narrative of the origins of blues music in the Mississippi Delta. Founded on the concept of the Crossroads as intersection point between cultures and backgrounds, <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> aims to empower young people to achieve their innate potential.
          </p>

          <h2 className={styles.program_heading}>
            Supporting CBE
          </h2>
          <p className={styles.content_text}>
            To bring <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> to your school, church or venue, or to learn how you can support us in bringing our innovative, inspirational program to financially-challenged public schools, go to the Contact page.  
          </p>
          <p className={styles.content_text}>
            Thanks for supporting <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span>.
          </p>
        </div>
      </section>
    
    </>

  )
}

export default Program