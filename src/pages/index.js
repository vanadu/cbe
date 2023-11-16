import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HomeContentBlocks from '../components/HomeContentBlocks'
import AccordionContent from '../components/AccordionContent'
import { FaPaw } from 'react-icons/fa'

import Inspire from '../../public/images/img-inspire-home.png'


// import RobertJohnson from '../../public/images/landing-img-robert-johnson.jpg'
// import CharleyPatton from '../../public/images/landing-img-charley-patton.jpg'
// import SonHouse from '../../public/images/landing-img-son-house.jpg'
// import SkipJames from '../../public/images/landing-img-skip-james.jpg'
// import MuddyWaters from '../../public/images/landing-img-muddy-waters.jpg'
// import BukkaWhite from '../../public/images/landing-img-bukka-white.jpg'
// import Arrowhead from '../../public/images/arrowhead-bullet.svg'

import * as styles from '../styles/Pages.module.scss'

//prettier-ignore
function Home() {

  // const [activeIndex, setActiveIndex] = useState(null) 
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

  return (
    <>
      <section className={[styles.home_bg, 'styles.section'].join(' ')}>

      <AccordionContent
            className='accordion__faqs'
            title='inspire'
            text='Live performance based on one of the most inspirational stories in American&nbsp;history.'
            index={1}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>About 100 years ago, a handful of musicians from the most impoverished and disadvantaged region in America created a sound that changed the course of popular music all over the world.  </p>
            <div className="modal-icon-block">
              <div className="modal-icon-block-icons">
              </div>
            </div>
          </AccordionContent> 

          <AccordionContent
                className='accordion__faqs'
                title='educate'
                text='Image-based storytelling of people and their achievements over five eras.'
                index={2}
                activeAccordionIndex={activeAccordionIndex}
                setActiveAccordionIndex={setActiveAccordionIndex}
                >
                <p className='accordion__text'>
                  Nobody knows for sure, but we agree with people who say the actual numbers are much higher than generally assumed. Some people say 1000 cases annually in the US, some say 5000. We think it&rsquo;s a lot more, because statistics indicate most people with LarPar dogs choose euthanasia over expensive tie-back surgery and that&rsquo;s the end of it. So there are untold thousands of cases in the &lsquo;dark zone&rsquo; &mdash; there&rsquo;s no way to get any data about why the dog was euthanized because there was no confirmed diagnosis. We&rsquo;ll have a blog post about this topic soon.
                  </p>
                  <noscript>
                  Nobody knows for sure, but we agree with people who say the actual numbers are much higher than generally assumed. Some people say 1000 cases annually in the US, some say 5000. We think it&rsquo;s a lot more, because statistics indicate most people with LarPar dogs choose euthanasia over expensive tie-back surgery and that&rsquo;s the end of it. So there are untold thousands of cases in the &lsquo;dark zone&rsquo; &mdash; there&rsquo;s no way to get any data about why the dog was euthanized because there was no confirmed diagnosis. We&rsquo;ll have a blog post about this topic soon.
                  </noscript>
          </AccordionContent> 

          <AccordionContent
            className='accordion__faqs'
            title='engage'
            text='Engaging audiences on multiple levels to help them stay focused.'
            index={3}
            activeAccordionIndex={activeAccordionIndex}
            setActiveAccordionIndex={setActiveAccordionIndex}
            >
            <p className='accordion__text'>If you don&rsquo;t do anything, your dog&rsquo;s condition will worsen and he or she will eventually not <be></be> able to get enough air to sustain life. There&rsquo;s no telling how long this could take. In our case, our dog was 11 before the first symptoms appeared, and it was 2&frac12; years before she reached end-stage. The first 18 months were manageable, and it wasn&rsquo;t until the last two months that we started asking ourselves whether it was time for us to let her go. But your case may be different so we can only say this: if your dog has early stage laryngeal paralysis, there&rsquo;s not much you can do except prepare yourself for what&rsquo;s to come. You must have a game plan for when it starts affecting your dog&rsquo;s quality of life. Because if your dog stays otherwise healthy, the laryngeal paralysis <span className='italic'>will</span> progress and you <span className='italic'>will</span> eventually have to take some action.</p>
          </AccordionContent> 























      </section>
      {/* <section className='landing'>
      <div className="header-spacer"></div>
        <div className='section_container'>
          <div className='section_heading'>
            <h2 className="section_heading--text">Gateway to Learning</h2>
            <hr className="section_heading--rule" />
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Home
