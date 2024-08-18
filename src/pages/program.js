import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import ProgramBranding from '../../public/images/img-cbe-branding-slug-no-logo.png'
import AcmeGuitars from '../../public/images/img-acme-guitars.jpg'
import HohnerHarps from '../../public/images/img-hohner-harps.jpg'

import * as styles from '../styles/Pages.module.scss'

const Program = () => {
  return (
    <>
      <section className={`${styles.home_bg} ${styles.section}` }>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: .5, delay: .25 }}
        >

          <div className={styles.home_content}>
            <div className={styles.page_head}>
              <h1 className={styles.page_head_branding}><span className={styles.secondary_color}>crossroads</span> blues <span className={styles.secondary_color}>experience</span></h1>
              <h2 className={styles.page_head_slug}>inspire&nbsp;&bull;&nbsp;educate&nbsp;&bull;&nbsp;engage</h2>
              <hr className={styles.page_head_rule}/>
            </div>
            <h2 className={styles.page_heading}>What is Crossroads Blues Experience?</h2>
            <p className={styles.content_text}>
              <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is a multidimensional ive performance/multimedia educational program for people of all ages. Originally conceived as a program for schools, we also perform at public venues where all ages can come together to share in the experience of our American story.  
            </p>
            <p className={styles.content_text}>
            Our unique blend of music performanc and image-based storytelling fills a need for parents, grandparents, guardians &mdash; or even siblings &mdash; to experience live music together in a safe, moderate-volume environment with a program that crosses generational and cultural divides and educates as well as entertains.
            </p>
            <h3 className={styles.page_subheading}>Blues Is American History</h3>
            <p className={styles.content_text}>
              Most people associate blues music with gritty vocals and full bands with electric instruments and drums. But before the invention of electric instruments, the people of the South were imprinting their own experience and history on their music using two instruments they could carry on their backs or in their pocket &mdash; the acoustic guitar and the harmonica.
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
            Blues music speaks to a wide range of people for whom the more complex melodic and harmonic structures of traditional jazz may be perceived as inaccessible. <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is dedicated to bringing authentic Mississippi Delta, Piedmont, and Ragtime Blues music to live audiences so that new generations of Americans can connect with our shared heritage and carry the blues tradition forward.
            </p>
            <h2 className={styles.page_heading}>
              Our Mission
            </h2>
            <p className={styles.content_text}>
              Our mission is to inspire, educate and engage students with a multimedia experience interweaving live music, geography, social studies, and history based on the narrative of the origins of blues music in the Mississippi Delta. Founded on the concept of the Crossroads as intersection point between cultures, backgrounds and generations, <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> aims to empower young people to achieve their innate potential.
            </p>

            <h2 className={styles.page_heading}>
              Program Structure
            </h2>
            <p className={styles.content_text}>
              The Crossroads Blues Experience program performs five iconic American songs, each of which represents mode of transportation associated with an era of American history. Each song is accompanied with a multimedia show that presents the historical progression of the that era: walking, steamboats, trains, automobiles, and air travel. All of these eras experienced a transition nexus sometime around 100 years ago, as blues music was also in its formative years. These overlapping chronologies are reinforced with multimedia imagery as the program progresses through history. 
            </p>
            <h3 className={styles.page_subheading}>
              Things You Can Do If You&lsquo;re You
            </h3>
            <p className={styles.content_text}>
              Our program opens with graphical storybook video that tells the story of how a handful of musicians from the most disadvantaged, underdeveloped region of the country created sound that changed the course of popular music all over the world.  
            </p>
            <h3 className={styles.page_subheading}>
              Walking Blues (Son House) &amp; Backwater Blues (Bessie Smith)
            </h3>
            <p className={styles.content_text}>
              Walking Blues provides the live soundtrack as we lead students through a brief history of photography so they can better understand the images that follow. Then we take a stroll through the Mississippi Delta, the birthplace of blues music, in the days when for most people walking was the only means of transportation available. With Backwater Blues, we introduce our audience to the Great Mississippi Flood of 1927 and some of its far-reaching consequences.   
            </p>

            <h3 className={styles.page_subheading}>
              Down By The Riverside (African-American Spiritual)
            </h3>
            <p className={styles.content_text}>
              The Great Mississippi and the Steamboat Era are inextricably linked in our national consciousness. With this song, we begin our journey on the Mississippi and follow the steam engine through its impact on maritime history.
            </p>
            <h3 className={styles.page_subheading}>
              This Train (African-American Spiritual)
            </h3>
            <p className={styles.content_text}>
              The steam locomotive brought about the end of the Riverboat Era. This song takes us  
            </p>
          </div>

        </motion.div>
      </section>
    
    </>

  )
}

export default Program