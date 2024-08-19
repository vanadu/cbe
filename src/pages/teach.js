import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadBrace from '../../public/images/img-head-brace.jpg'
import { motion } from 'framer-motion'

import ShowMoreContent from '../components/ShowMoreContent'

import * as styles from '../styles/Pages.module.scss'

const Teach = () => {
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
              <h2 className={styles.page_heading}>Assets for Teachers</h2>
              <p className={styles.content_text}>
                In addition to the in-class/onstage performance, Crossroads Blues Experience is currently developing supplemental online assets that teachers can use to build on the learning framework established during the live music/multimedia performance. These assets can help teachers initiate deep learning by reinforcing ideas and information from the program and encouraging students to ask questions and create their own stories.
              </p>


              <Image 
                  src={HeadBrace} 
                  width="0"
                  height="0"
                  sizes="100vw"
                  // style={{ width: '100%', height: 'auto' }}
                  className={styles.figure_two_up_image} alt="Acme Guitars" 
                />
  
  
  
            </div>       
  
  
          </motion.div>
        </section>
      </>
    )
}

export default Teach
