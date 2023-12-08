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
            <div  className={styles.flex_center}>
              <figure className={styles.figure_full_width}>
                <div className={styles.grid_bluesmen}>
                  <hr className={styles.grid_bluesmen_rule} />
                  <div className={styles.grid_bluesmen_grid}>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={RobertJohnson} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="XXX" 
                      />
                    </figure>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={CharleyPatton} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="Charley Patton" 
                      />
                    </figure>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={SonHouse} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="Son House" 
                      />
                    </figure>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={SkipJames} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="Skip James" 
                      />
                    </figure>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={BukkaWhite} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="Bukka White" 
                      />
                    </figure>
                    <figure className={styles.grid_bluesmen_figure}>
                      <Image 
                        src={MuddyWaters} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className={styles.grid_bluesmen_img} alt="Muddy Waters" 
                      />
                    </figure>
                  </div>
                  <hr className={styles.grid_bluesmen_rule} />
                </div>
              </figure>
            </div>
            {/* <p className={styles.content_text}>
              From early rock and roll, to the Beatles and the British invasion, to the Woodstock generation, to what&rsquo;s now known as &lsquo;classic rock&rsquo; &mdash; if it hadn&rsquo;t been for Mississippi Delta blues, popular music of the late 20th century as we know it may never have come to pass. 
            </p> */}
            <p className={styles.content_text}>
              Crossroads Blues Experience celebrates the pre-electric roots of the blues and highlights the promise of America where, no matter what your heritage or background, you can touch people&rsquo;s lives in a positive way and make the world a better place.
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
            <div className={styles.flex_center}>
              <figure className={styles.figure_full_width}>
                <hr className={styles.grid_bluesmen_rule} />
                <Image 
                  src={FiveEras} 
                  width="0"
                  height="0"
                  sizes="100vw"
                  // style={{ width: '100%', height: 'auto' }}
                  className={styles.figure_full_width_image} alt="Songs of Five Eras" 
                />
                <hr className={styles.grid_bluesmen_rule} />
                <figcaption>Songs of Five Eras</figcaption>
              </figure>
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


              <div className={styles.figure_educate}>

              <figure className={styles.figure_full_width}>
              <Image 
                src={EngageGif} 
                width="0"
                height="0"
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }}
                className={styles.figure_home_gif_image} alt="Multiple Engagement Streams" 
              />
            </figure>

              </div>

            <p className={styles.content_text}>
              The objective is for participants to focus on whichever stream captures their attention and imagination most at any given moment while still engaging with &mdash; and learning from &mdash; the other streams. 
            </p>
          </Expander> 
        </div>

        <div className={styles.home_separator_bar}>
          <SeparatorDots />
        </div>




      </section>



    </>
  )
}

export default Home
