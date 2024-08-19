import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import ShowMoreContent from '../components/ShowMoreContent'

import ProgramBranding from '../../public/images/img-cbe-branding-slug-no-logo.png'
import AcmeGuitars from '../../public/images/img-acme-guitars.jpg'
import HohnerHarps from '../../public/images/img-hohner-harps.jpg'

import * as styles from '../styles/Pages.module.scss'

const Program = () => {

  const [activeIndex, setActiveIndex] = useState(null) 

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
              <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is a live performance/multimedia educational program for people of all ages. Originally conceived as a program for schools, we also perform at public venues where all ages can come together to share in the experience of our American story.  
            </p>



            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>

              <ShowMoreContent
                title='Learn more...'
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                  <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Our unique blend of music performance and image-based storytelling fills a need for parents, grandparents, guardians &mdash; or even siblings &mdash; to experience live music together in a safe, moderate-volume environment with a program that crosses generational and cultural divides and educates as well as entertains.
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

            <h3 className={styles.page_subheading}>Blues Is American History</h3>
            <p className={styles.content_text}>
              Most people associate blues music with gritty vocals and full bands with electric instruments and drums. But before the invention of electric instruments, the people of the American South were imprinting their own experience and history on their music mostly using two instruments they could carry on their backs or in their pocket &mdash; the acoustic guitar and the harmonica.
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
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>

              <ShowMoreContent
                title='Learn more...'
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                  <div className={styles.showmore_content_block}>
                  <span className={styles.showmore_content_space}></span>
                  <p className={styles.showmore_content_text}>
                    Blues music speaks to a wide range of people for whom the more complex melodic and harmonic structures of traditional jazz may be perceived as inaccessible. <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is dedicated to bringing authentic Mississippi Delta, Piedmont, and Ragtime Blues music to live audiences so that new generations of Americans can connect with our shared heritage and carry the blues tradition forward.
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}





            
            <h2 className={styles.page_heading}>
              Our Mission
            </h2>
            <p className={styles.content_text}>
              Our mission is to inspire, educate and engage students with a multimedia experience interweaving live music, geography, social studies, and history based on the narrative of the origins of blues music in the Mississippi Delta at the beginning of the 20th century. Founded on the concept of the Crossroads as intersection point between cultures, backgrounds and generations, <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> aims to empower young people to achieve their innate potential.
            </p>

            <h2 className={styles.page_heading}>
              Program Structure
            </h2>
            <p className={styles.content_text}>
              The Crossroads Blues Experience program performs a series of iconic American songs, each of which represents an era or pivotal event in American history. Each song is accompanied with a multimedia show that presents the historical progression of that era (i.e., walking, steamboats, trains, automobiles, and air travel) or imagery from that event. All of these eras experienced a transition nexus sometime around 100 years ago, as blues music was also in its formative years. These overlapping chronologies are reinforced with multimedia imagery as the program progresses through history. 
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    Crossroads Blues Experience offers a standard 45-minute program designed for the classroom and a two-set extended program for stage venues or larger assemblies that can accommodate longer performances. Our self-contained program provides all audio/visual equipment needed for the performance without the need for A/V, network, or other technical support from teachers or administrators. 
                    </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            
            <h3 className={styles.page_subheading}>
              Things You Can Do If You&lsquo;re You
            </h3>
            <p className={styles.content_text}>
              Our program opens with graphical picturebook video that tells the story of how a handful of musicians from the most disadvantaged, underdeveloped region of the country created a sound that changed the course of popular music all over the world.  
            </p>
            <h3 className={styles.page_subheading}>
              Walking Blues (Son House) &amp; Backwater Blues (Bessie Smith)
            </h3>
            <p className={styles.content_text}>
              Walking Blues provides the live soundtrack as we lead students through a brief history of photography so they can better understand the images that follow. Then, we take a stroll through the Mississippi Delta, the birthplace of blues music, about 100 years ago when for most people walking was the only means of transportation. With Backwater Blues, we introduce our audience to the Great Mississippi Flood of 1927 and its far-reaching consequences.   
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
              The steam locomotive brought about the end of
               the Riverboat Era. The imagery accompanying this song takes us through the rise of trains to transportation preeminence, the building of the railroads and transformation in the 20th century.  
            </p>
          </div>

        </motion.div>
      </section>
    
    </>

  )
}

export default Program