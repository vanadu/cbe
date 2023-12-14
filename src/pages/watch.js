import React from 'react'
import { motion } from 'framer-motion'

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
          </div>       


        </motion.div>
      </section>
    </>
  )
}

export default Watch