import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HomeContentBlocks from '../components/HomeContentBlocks'
import Expander from '../components/Expander'
import { FaPaw } from 'react-icons/fa'
import SeparatorDots from '../components/SeparatorDots'



import RobertJohnson from '../../public/images/landing-img-robert-johnson.jpg'
import CharleyPatton from '../../public/images/landing-img-charley-patton.jpg'
import SonHouse from '../../public/images/landing-img-son-house.jpg'
import SkipJames from '../../public/images/landing-img-skip-james.jpg'
import MuddyWaters from '../../public/images/landing-img-muddy-waters.jpg'
import BukkaWhite from '../../public/images/landing-img-bukka-white.jpg'
import FiveEras from '../../public/images/img-five-eras-squares.png'
import EngageGif from '../../public/images/gif-home-engage.gif'

import * as styles from '../styles/Pages.module.scss'

//prettier-ignore
function Home() {

  // const [activeIndex, setActiveIndex] = useState(null) 
  const [activeExpanderIndex, setActiveExpanderIndex] = useState(0)

  return (
    <>
      {/* <section className={[styles.home_bg, 'styles.section', out_copy].join(' ')}> */}
      <section className={`${styles.home_bg} ${styles.section}` }>

        <div className={styles.home_expander}>

          <Expander
            className='accordion__faqs'
            title='inspire'
            text='...with live music reflecting one of the most inspirational stories in American&nbsp;history.'
            index={1}
            activeExpanderIndex={activeExpanderIndex}
            setActiveExpanderIndex={setActiveExpanderIndex}
            >
            <SeparatorDots />
            <p className={styles.content_text}>About 100 years ago, a handful of musicians from the most impoverished region in America created a sound that changed the course of popular music all over the world.</p>
            <div className='section_grid--bluesmen'>
              <hr class="section_grid--bluesmen-rule" />
              <div className="section_grid--bluesmen-grid">
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={RobertJohnson} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="XXX" 
                  />
                </figure>
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={CharleyPatton} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="Charley Patton" 
                  />
                </figure>
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={SonHouse} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="Son House" 
                  />
                </figure>
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={SkipJames} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="Skip James" 
                  />
                </figure>
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={BukkaWhite} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="Bukka White" 
                  />
                </figure>
                <figure className='section_grid--bluesmen-figure'>
                  <Image 
                    src={MuddyWaters} 
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className='section_grid--bluesmen-img' alt="Muddy Waters" 
                  />
                </figure>
              </div>
            <hr class="section_grid--bluesmen-rule" />
          </div>
          <p className={styles.content_text}>
           From early rock and roll, to the Beatles and the British invasion, to the Woodstock generation &mdash; if it hadn&rsquo;t been for Mississippi Delta Blues, rock music as we know it may never have come to pass. 
          </p>
          <p className={styles.content_text}>
            Our program celebrates our pre-electric blues heritage and highlights the promise of America where, no matter what your heritage or background, you can touch people&rsquo;s lives in a positive way &mdash; and maybe even change the world.
          </p>

          </Expander> 

          <Expander
            className='accordion__faqs'
            title='educate'
            text='...with picture-oriented storytelling of people and their achievements over five&nbsp;eras.'
            index={2}
            activeExpanderIndex={activeExpanderIndex}
            setActiveExpanderIndex={setActiveExpanderIndex}
            >
            <SeparatorDots />
            <p className={styles.content_text}>
              History is less about memorizing dates than it is about the stories of people and the things they do. Everything has a story, be it boats or trains or blues music &mdash; or even things we take for granted like shoes &mdash; but the amazing thing about all these stories is that they&rsquo;re all interconnected.
            </p>
            <figure className={styles.figure_full_width}>
              <Image 
                src={FiveEras} 
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.placeholder} alt="Songs of Five Eras" 
              />
              <figcaption>Songs of Five Eras</figcaption>
            </figure>
            <p className={styles.content_text}>
              Our project takes five iconic American songs that reflect a mode of transportation, each of which represents an era. We illustrate the progression of these eras in a series of images, each of which tells a story. And all of these images together form a context. The result is image-based connect-the-dots storytelling that helps the audience conceptualize events into that larger chronology we call <span className={styles.semibold_italic}>history</span>. 
            </p>
          </Expander> 

          <Expander
            className='accordion__faqs'
            title='engage'
            text='... audiences young and old with a multi&#8209;stream performance merging music, media, and&nbsp;narrative.'
            index={3}
            activeExpanderIndex={activeExpanderIndex}
            setActiveExpanderIndex={setActiveExpanderIndex}
            >
            <SeparatorDots />
            <p className={styles.content_text}>
              People in the Smartphone Era are accustomed to fast-moving images coming from multiple sources at once. Our program gives kids and adults multiple ways to engage &mdash; through live performance, multimedia content, and active participation. 
            </p>
            <p className={styles.content_text}>
              So if kids in the audience get distracted and lose their primary focus, there are other engagement streams they can focus on to help them stay engaged throughout the program. 
            </p>
            <figure className={styles.figure_full_width}>
              <Image 
                src={EngageGif} 
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={styles.placeholder} alt="Multiple Engagement Streams" 
              />
            </figure>
            <p className={styles.content_text}>
              The objective is for participants to focus on whichever stream speaks to them most at any given moment while still engaging with &mdash; and learning from &mdash; the other streams. 
            </p>
          </Expander> 
        </div>

        <div className={styles.home_separator_bar}>
          <SeparatorDots />
        </div>

        <div className={styles.home_content}>
          <div className={styles.home_content_heading}>
            <h1 className={styles.home_content_heading_h1}>What is the <span className={styles.primary_color}>Crossroads Blues&nbsp;Experience</span>?</h1>
          </div>
          <p className={styles.content_text}>
            <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is a live performance/multimedia program for people of all ages. Originally conceived as a program for schools, <span className={styles.semibold}>CBE</span> now performs at public venues where all ages can come together to share in the experience of our American musical heritage.  
          </p>
          <p className={styles.content_text}>
          <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> fills a need for parents, grandparents, guardians &mdash; or even siblings &mdash; to experience live music together in a safe, volume-moderate environment with a program that crosses generational and cultural divides and educates as well as entertains.
          </p>
          <h2 className={styles.home_content_heading_h2}>Why Blues Music?</h2>
          <p className={styles.content_text}>
            Before electric guitars and amplification, people of the South were using whatever instruments they could get their hands on to create and play blues music. From Texas to Appalachia, each region developed a distinct character of the blues. What they all share is a driving rhythm, a common ancestry, and an essence that is deeply rooted in the American experience.
          </p>
          <p className={styles.content_text}>
          <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> is dedicated to bringing historically-accurate blues music to live audiences so that new generations of Americans can connect with this foundational part of our musical heritage and carry the tradition forward.
          </p>
          <h2 className={styles.home_content_heading_h2}>Our Program</h2>
          <p className={styles.content_text}>
            To learn more about our program, visit the <Link href='/program' className={styles.link_secondary}>Program</Link> page.
          </p>
          <h2 className={styles.home_content_heading_h2}>Performers</h2>
          <p className={styles.content_text}>
            To find out about our performers, visit the <Link href='/about' className={styles.link_secondary}>About</Link> page.
          </p>
          <h2 className={styles.home_content_heading_h2}>Contact</h2>
          <p className={styles.content_text}>
            To learn how you can support <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> or engage us to perform at your school, church or venue, visit the <Link href='/contact' className={styles.link_secondary}>Contact</Link> page.
          </p>
          <p className={styles.content_text}>
            Thanks for visiting and thanks for supporting the <span className={styles.primary_color}><span className={styles.semibold}>Crossroads Blues&nbsp;Experience</span></span>
          </p>
        </div>


      </section>



    </>
  )
}

export default Home
