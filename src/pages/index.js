import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HomeContentBlocks from '../components/HomeContentBlocks'
import Expander from '../components/Expander'
import { FaPaw } from 'react-icons/fa'
import SeparatorDots from '../components/SeparatorDots'
import { motion } from 'framer-motion'



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
        <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: .5, delay: .5 }}
            >

          <div className={styles.home_content}>

            <Expander
              title='inspire'
              text='...with live music from one of the most compelling stories in American&nbsp;history.'
              index={1}
              activeExpanderIndex={activeExpanderIndex}
              setActiveExpanderIndex={setActiveExpanderIndex}
              >
              <SeparatorDots />
              <p className={styles.content_text}>About 100 years ago, a handful of musicians from the most disadvantaged region in America created a sound that changed the course of popular music all over the world.</p>

              <div className={styles.flex_center}>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  transition={{ duration: 1, delay: .25 }}
                  >
                  <div className={styles.youtube_embed}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3v312lWTSrs?si=oPzOZ8sMLUUVBxAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </motion.div>

              </div>

              <p className={styles.content_text}>
              <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> celebrates the pre-electric roots of the blues and highlights the promise of America where, no matter what your heritage or background, you can touch people&rsquo;s lives in a positive way and make the world a better place.
              </p>
            </Expander> 

            <Expander
              title='educate'
              text='...with picture-oriented storytelling of people and their achievements over five&nbsp;eras.'
              index={2}
              activeExpanderIndex={activeExpanderIndex}
              setActiveExpanderIndex={setActiveExpanderIndex}
              >
              <SeparatorDots />
              <p className={styles.content_text}>
                History is less about memorizing dates and more about the stories of people and the things they do. </p>
              <p className={styles.content_text}>
                Everything has a story, be it boats or trains or blues music &mdash; or even things we take for granted like shoes &mdash; but the amazing thing about all these stories is that they&rsquo;re all interconnected.
              </p>

              <div  className={styles.flex_center}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  transition={{ duration: 1, delay: .25 }}
                  >
                  <div className={styles.youtube_embed}>

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LHHfBZQEHjU?si=rjIkfUtXyIR_tbnF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </motion.div>
              </div>

              <p className={styles.content_text}>
                Our project takes five iconic American songs that reflect a mode of transportation, each of which represents an era. We illustrate the progression of these eras in a series of images, each of which tells a story. And all of these images together form a context. The result is image-based, connect-the-dots storytelling that helps the audience conceptualize events into that larger chronology we call <span className={styles.semibold_italic}>history</span>. 
              </p>
            </Expander> 

            <Expander
              title='engage'
              text='...audiences with a multi&#8209;stream performance merging music, media, and&nbsp;narrative.'
              index={3}
              activeExpanderIndex={activeExpanderIndex}
              setActiveExpanderIndex={setActiveExpanderIndex}
              >
              <SeparatorDots />
              <p className={styles.content_text}>
                People in the Smartphone Age are accustomed to fast-moving images coming from multiple sources at once. Our program gives kids and adults multiple ways to engage &mdash; through live performance, multimedia content, and active participation. 
              </p>
              <p className={styles.content_text}>
                So if kids in the audience get distracted and lose their primary focus, there are other actions they can focus on to help them stay engaged throughout the program. 
              </p>


              <div  className={styles.flex_center}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  transition={{ duration: .5, delay: .25 }}
                >
                <div className={styles.youtube_embed}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MUJDVtsBn9o?si=xiI_jdspYJoAIO__" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </motion.div>
              </div>

              <p className={styles.content_text}>
                The objective is for participants to focus on whichever stream captures their attention and imagination most at any given moment while still engaging with &mdash; and learning from &mdash; the other streams. 
              </p>
            </Expander> 
          </div>

          <div className={styles.home_separator_bar}>
            <SeparatorDots />
          </div>

        </motion.div>
          

      </section>



    </>
  )
}

export default Home
