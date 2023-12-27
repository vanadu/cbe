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
            <div className={styles.program_head}>
              <h1 className={styles.program_head_branding}><span className={styles.secondary_color}>crossroads</span> blues <span className={styles.secondary_color}>experience</span></h1>
              <h2 className={styles.program_head_slug}>inspire&nbsp;&bull;&nbsp;educate&nbsp;&bull;&nbsp;engage</h2>
              <hr className={styles.program_head_rule}/>
            </div>
            <h2 className={styles.program_heading}>Things You Can Do If You&rsquo;re You</h2>
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



          </div>       


        </motion.div>
      </section>
    </>
  )
}

export default Watch