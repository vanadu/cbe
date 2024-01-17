import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import * as styles from '../styles/Pages.module.scss'

const Watch = () => {
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
            <div className={styles.page_head}>
              <h1 className={styles.page_head_branding}><span className={styles.secondary_color}>crossroads</span> blues <span className={styles.secondary_color}>experience</span></h1>
              <h2 className={styles.page_head_slug}>inspire&nbsp;&bull;&nbsp;educate&nbsp;&bull;&nbsp;engage</h2>
              <hr className={styles.page_head_rule}/>
            </div>
            <h2 className={styles.page_heading}>Things You Can Do If You&rsquo;re You</h2>
            <p className={styles.content_text}>
              The <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> program opens with the inspirational story of how the music of the Mississippi Delta grew to have an enormous influence on the popular music of the late 20th century and beyond.
            </p>
            <div  className={styles.flex_center}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1, delay: .25 }}
                >
                <div className={styles.vimeo_embed}>
                  <iframe src="https://player.vimeo.com/video/789703203?h=705b9456fc" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                </motion.div>
            </div>
            <p className={styles.content_text}>
              This intro video sets the tone for the motivational message and image-based storytelling at the core of the <span className={styles.semibold}>Crossroads&nbsp;Blues&nbsp;Experience</span> concept.
            </p>

            <h2 className={styles.page_heading}>This Train (Excerpt)</h2>
            <p className={styles.content_text}>
              In February 2022 the pilot performance of Crossroads Blues Experience, supported by a grant from the <Link href='https://kentculture.org/' className={styles.link_secondary}>Kent Cultural Alliance</Link> and <Link href='https://sumnerhall.org/' className={styles.link_secondary}>Sumner Hall</Link>, took place before two classes of 4th graders on Maryland&rsquo;s Eastern Shore. 
            </p>
            <p className={styles.content_text}>
              We expected a positive response to the live music, but we didn&rsquo;t expect such an eagerness to participate. The kids sang along, threw their hands in the air to ask questions and &mdash; possibly the greatest compliment of all &mdash; not one of them misbehaved during the entire program. One teacher confided that to go an entire assembly without once having to discipline even the most unruly of students was quite a feat.
            </p>
            <div  className={styles.flex_center}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1, delay: .25 }}
                >
                <div className={styles.vimeo_embed}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/u3tJKlSSi8o?si=LlEkM3s9bGf4efM7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </motion.div>
            </div>
            <p className={styles.content_text}>
              In this video you can listen to the live performance of <Link href='https://en.wikipedia.org/wiki/This_Train' className={styles.link_secondary}>This Train</Link> from the pilot and watch the accompanying multimedia show. After each of the five songs in the program, we take a few minutes to talk about some of the images and give students a chance to ask questions. 
            </p>
            <h2 className={styles.page_heading}>The Gotcha</h2>
            <p className={styles.content_text}>
              Each multimedia show also contains a &lsquo;gotcha&rsquo; &mdash; one image that just doesn&rsquo;t fit. We encourage participants to identify the &lsquo;gotcha&rsquo; image on their own and ask questions to help them figure it out. For instance, in the video excerpt above you saw an image dated 1862 of a train collapsing on a burning bridge. The train is undoubtedly a Civil War-era train. But in 1862, photographic technology was nowhere near capable of producing that image.
            </p>
            <p className={styles.content_text}>
              This &lsquo;gotcha&rsquo; is resolved with the incredible story of Buster Keaton&rsquo;s 1926 film <Link href='https://en.wikipedia.org/wiki/The_General_(1926_film)' className={styles.link_secondary}>The General</Link>, in which Keaton tells the real-life 1862 Civil War story of how one train chased another behind enemy lines. In reality, the burning bridge did collapse with a real Civil War-era train on it &mdash; not <span className={styles.semibold}>in</span> 1862, but rather in a nearly 100-year-old film <span className={styles.semibold}>depicting</span> 1862. The collapsing bridge image reflects real-life history from 1862 that is embedded in another historical artifact from 1926. Keaton&rsquo;s <span className={styles.italic}>The General</span> is now on the Library of Congress&rsquo; <Link href='https://www.loc.gov/programs/national-film-preservation-board/film-registry/' className={styles.link_secondary}>National Film Registry</Link>, making the bridge collapse scene <span className={styles.semibold}>history within history</span> and a story worth including in our program.
            </p>
            <p className={styles.content_text}>
              Each image in the Crossroads Blues Experience program was curated for its historical significance and thought-provoking backstory. 
            </p>



          </div>       


        </motion.div>
      </section>
    </>
  )
}

export default Watch