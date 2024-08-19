import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadBrace from '../../public/images/img-head-brace.jpg'
import { motion } from 'framer-motion'

import ShowMoreContent from '../components/ShowMoreContent'

import * as styles from '../styles/Pages.module.scss'

const Teach = () => {
  const [activeIndex, setActiveIndex] = useState(null) 
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
               Crossroads Blues Experience is currently developing supplemental online assets that teachers can use to build on the learning framework established during the live music/multimedia performance. These assets can help teachers initiate deep learning by reinforcing ideas and information from the program and encouraging students to ask questions and create their own stories.
              </p>
              <h3 className={styles.page_subheading}>
                What&lsquo;s the Story Behind This Picture?
              </h3>
              <Image 
                  src={HeadBrace} 
                  width="0"
                  height="0"
                  sizes="100vw"
                  // style={{ width: '100%', height: 'auto' }}
                  className={styles.figure_full_width} alt="Acme Guitars" 
                />
              <p className={styles.content_text}>
                This picture sparks a lot of curiosity during our performances and provides a wealth of learning moments to stimulate discussion and creative action. Teachers can start by asking students to create a story around this picture without knowing anything about it. They can then ask directed questions that help students discover the real story behind the image. 
              </p>
              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='Are these men twins or is it the same person?'
                  index={1}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                     It&lsquo;s the same person. This is an early example of &lsquo;trick&rsquo; photography. It is actually two separate photos taken in the same room with the same subject in two different positions. 
                    </p>
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      <span className={styles.semibold}>For Discussion</span>: A picture that combines elements from multiple images is called a <span className={styles.italic}>composite</span> image. Can you use your phone to make a composite image that shows you in two different places in the same picture? How can you use software to create a composite image? How is the process different using software compared to how it was done back then?
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What&lsquo;s that thing behind the head of the man on the left?'
                  index={2}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      Modern cell phone cameras have very sensitive digital light sensors. That means they don’t need much light to capture an image. The shutter on your phone’s camera is only open for one five-hundredth of a second or less and still captures enough light to create a clear picture.
                    </p>
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      But in the early days of photography, images were captured by exposing chemicals on a photographic plate to light. These chemicals were not very light-sensitive at all. In early cameras, the shutter had to be open for 30 seconds to capture enough light for the chemical reaction required to create the image.
                    </p>
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      That meant that the subject had to be perfectly still for up to 30 seconds while the picture was being taken. Any movement at all could make the picture blurry or even unrecognizable. Photographers often used braces behind the subjects head to help them remain motionless while the picture was being taken.
                    </p>
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      <span className={styles.semibold}>For Discussion:</span> How hard is it to stay completely motionless for 30 seconds without moving your face at all or even blinking? Can anyone do it? Why do early photos rarely show people smiling? Can you hold a smile on your face for thirty seconds? How does a camera&lsquo;s shutter work? How can you change the shutter speed on your cell phone camera and what happens to the pictures if you do? What other settings on your phone&lsquo;s camera can you change and how do they affect your pictures?   
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}

              {/* ShowMoreComponent content start */}
              <div className={styles.content_text}>
                <ShowMoreContent
                  title='What do our eyes see when things move very fast?'
                  index={3}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  >
                  <div className="showmore-content-text">
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      When a camera shutter is open, the camera captures everything happening in the scene. If something is moving while the shutter is open, that motion is captured, too, and the moving object appears as a blur. We see the same effect with our eyes when something moves very fast within our field of vision.
                    </p>
                    <span className="showmore-content-space"></span>
                    <p className="showmore-content-text">
                      <span className={styles.semibold}>For Discussion:</span> What do you see when you wave your hand back and forth in front of your face really fast? How about when you look at an electric rotary fan? Do you see the individual fan blades or do all the fan blades blend together? How is this like using a very slow shutter speed on your phone&lsquo;s camera? Have you ever made a snow angel? How is that similar to how our eyes perceive very fast motion?   
                    </p>
                  </div>
                </ShowMoreContent>
              </div>  
              {/* ShowMoreComponent content end */}
              <h3 className={styles.page_heading}>About The Images</h3>
              <p className={styles.content_text}>
                All the images used in the <span className={styles.semibold}>Crossroads Blues Experience</span> program were curated for historical significance and suitability as learning aids in the classroom. As we collect feedback from our audiences moving forward, we will be expanding the teaching materials available on our website.
              </p>
            </div>       
  
  
          </motion.div>
        </section>
      </>
    )
}

export default Teach
