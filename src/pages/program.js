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
              Our mission is to inspire, educate and engage students with a multimedia experience interweaving live music, geography, social studies, and history based on the narrative of the origins of blues music in the Mississippi Delta at the beginning of the 20th century.
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more..'
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    Founded on the concept of the Crossroads as intersection point between cultures, backgrounds and generations, <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> aims to empower young people to achieve their innate potential.
                  </p>
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    The messaging of our program is clear &mdash; no matter what your background or heritage, if you find something you love to do and work at it, you can make a difference in people&lsquo;s lives &mdash; and maybe even change the world.
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            

            <h2 className={styles.page_heading}>
              Program Structure
            </h2>
            <p className={styles.content_text}>
              The Crossroads Blues Experience program comprises a series of iconic American songs, each of which represents an era associated with a mode of transportation or a pivotal event in American history. Each song is accompanied with a multimedia show that presents the historical progression of that era or imagery from that event.
            </p>
            <p className={styles.content_text}>
              Each of these eras experienced a transformation sometime around 100 years ago as our society transitioned from the coal-driven steam engine to liquid fossil fuels and the internal-combustion engine. At that time, blues music was also in its formative years. Our program reinforces these overlapping timelines with multimedia imagery to help students visualize and conceptualize the progressive chronology we call <span className={styles.italic}>history</span>. 
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={4}
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
              I. Introduction
            </h3>
            <p className={styles.content_text}>
              Our program opens with an inspirational short (4-minute) video entitled <span className={styles.italic}>Things You Can Do If You&lsquo;re You</span>.   
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    People in the Smartphone Generation are accustomed to fast-paced graphics and image-based storytelling. In this way, our introductory video captures students&lsquo; attention and imagination to tell the story of how a handful of musicians from the most disadvantaged, underdeveloped region of the country created a sound that changed the course of popular music all over the world. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            
            <h3 className={styles.page_subheading}>
              I. Walking Blues (Son House) &amp; Backwater Blues (Bessie Smith)
            </h3>
            <p className={styles.content_text}>
              The Mississippi Delta has the distinction of being both the birthplace of blues as well as the most economically depressed region in America.    
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                  <span className={styles.italic}>Walking Blues</span> provides the live soundtrack as we lead students through a brief history of photography so they can better understand the images that follow. Then, we take a stroll through the Mississippi Delta about 100 years ago, when for most people walking was the only means of transportation. 
                  </p>
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    Our visit to the Mississippi Delta continues with the Great Mississippi Flood of 1927. Arguably America&lsquo;s most devastating natural disaster, 1927 was the first time photography played a large-scale critical role in the relief and rescue effort. The multimedia imagery captures the magnitude of the devastation, accompanied by the haunting live rendition of Bessie Smith&lsquo;s blues classic <span className={styles.italic}>Backwater Blues</span>. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            
            <p className={styles.content_text}>
            
            </p>

            <h3 className={styles.page_subheading}>
              II. Down By The Riverside (African-American Spiritual)
            </h3>
            <p className={styles.content_text}>
              The Great Mississippi River and the Steamboat Era are inextricably linked in our national consciousness.
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    We begin our journey on the Mississippi and follow steam engine through the course of its development and impact on maritime history, from the earliest steamboat in 1797 through to the last steam-powered American aircraft carrier in 1968. Students can sing along to the well-known spiritual <span className={styles.italic}>Down By The Riverside</span>, performed in the authentic Piedmont blues style.  
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            
            <h3 className={styles.page_subheading}>
              III. This Train (African-American Spiritual)
            </h3>
            <p className={styles.content_text}>
              While the steam locomotive did bring about the end of the Riverboat Era, the transition to the Railroad Era took many decades. 
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={8}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    The steam locomotive brought many engineering challenges that steamboats weren&lsquo;t subject to, in particular with regard to boiler safety and access to the water required to drive steam engines across land. We guide students through the amazing history of the Railroad Era in images and song, accompanied by an live singalong performance of the well-known spiritual <span className={styles.italic}>This Train</span> played in the authentic Delta Blues style. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            
            <h3 className={styles.page_subheading}>
              IV. Key to the Highway (Big Bill Broonzy)
            </h3>
            <p className={styles.content_text}>
              In the extended program for stage venues, we continue our journey with the arrival of the Automobile Age and Thomas Edison&lsquo;s fleet of electric taxis at the beginning of the 20th century.
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>
              <ShowMoreContent
                title='Learn more...'
                index={9}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    The electic vehicle, however, was no match for liquid fossil fuels and the internal combustion engine. By the 1920s, gas-powered automobiles were already supplanting the railroad as the world&lsquo;s primary people-mover. Like many people in the American South, blues music, too, packed up and headed north. In this section, students can follow the development of the car, accompanied by an unplugged Chicago version of Big Bill Broonzy&lsquo;s classic <span className={styles.italic}>Key to the Highway</span>. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}

            <h3 className={styles.page_subheading}>
              V. I&lsquo;ll Fly Away (Albert E. Brumley)
            </h3>
            <p className={styles.content_text}>
              Nothing will give you the blues faster than building an airplane that doesn&lsquo;t fly.
            </p>
            {/* ShowMoreComponent content start */}
            <div className={styles.content_text}>

              <ShowMoreContent
                title='Learn more...'
                index={10}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                >
                <div className="showmore-content-text">
                  <span className="showmore-content-space"></span>
                  <p className="showmore-content-text">
                    By the time of the arrival of the Jet Age, blues music had been supplanted on the American popular music landscape by rock-and-roll and eventually what became known as classic rock music. Blues music was rooted in the American South of the early- to mid-20th century, so airplanes never took a prominent role in blues songs like trains or riverboats did. But that doesn&lsquo;t mean the influence of blues music doesn&lsquo;t live on. Our extended program closes with <span className={styles.italic}>I&lsquo;ll Fly Away</span>, a singalong tribute played in the Piedmont style to the men and women who pioneered flight &mdash; some successfully, some not. 
                  </p>
                </div>
              </ShowMoreContent>
            </div>  
            {/* ShowMoreComponent content end */}
            

            
          </div>

        </motion.div>
      </section>
    
    </>

  )
}

export default Program