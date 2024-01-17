import React from 'react'
import { motion } from 'framer-motion'

import * as styles from '../styles/Pages.module.scss'

const About = () => {
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

        
            <h2 className={styles.page_heading}>About CBE</h2>
            <p className={styles.content_text}>
              <span className={styles.semibold}>Van L. Albert</span> has been playing Delta blues and ragtime guitar since the age of 12. He studied classical guitar at Stetson University and jazz violin performance with <a href="https://en.wikipedia.org/wiki/Michael_White_(violinist)" className='semibold'>Michael White</a> at <a href="https://www.cornish.edu/" className='semibold'>Cornish College of the Arts</a> in Seattle, WA. In 1991 he earned a M.A. from the University of Washington where he taught college-level German before following a career path in digital technology with Microsoft and other Seattle-area software giants while also playing in variety of Seattle tradtional music ensembles. Van&rsquo;s educational history and multi-dimensional skill set encompassing music and digital content production inspired him to create the <span className='italic'>Crossroads Blues Experience</span> project.</p>
            <p className={styles.content_text}>
              <span className={styles.semibold}>Karen Somerville</span> is a cornerstone of Maryland culture who is well-known as vocalist, recording artist and producer far beyond the borders of her native Kent County. Locally, she is known for her work as curator of African-American culture with the Kent County&rsquo;s <a href="https://www.visitmaryland.org/listing/attraction/african-american-schoolhouse-museum" className='semibold'>African-American Schoolhouse Museum</a>. As a performer, she has worked with Stevie Wonder, performed at the NYC Fringe Festival, received the coveted Kenny Award from the Kent County Arts Council and graced many stages in solo or with her a capella trio Sombarkin to delight and educate audiences in the living history of negro spirituals and contemporary songs. </p>

              <p className={styles.content_text}>
                <span className={styles.semibold}>Steve McGovern</span> fell in love with roots American music as a teenager in Wheaton MD. At 17, he took a bus to Memphis, TN to find the blues and soon afterwards found himself hitchhiking across the country and learning harmonica from his British travelling companion. After settling in Baltimore he immersed himself in the folk and blues scene until 2000 when he moved to Rock Hall and became a founding member of Kent County&rsquo;s flagship Chicago blues band, <span className={styles.italic}>The Blueskeepers</span>. In late 2022, he joined with Van Albert to form <a href="https://crossandhigh.com" className={styles.semibold}>Cross &amp; High</a>, a blues duo focusing on pre-Chicago Delta, Psiedmont and Country blues music created by African-American musicians in the early 20th century American South.
              </p>
          </div>

          <div className="page-separator"></div>

        </motion.div>

      </section>
    </>
  )
}

export default About