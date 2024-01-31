//prettier-ignore
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
// import { FaRegWindowClose } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

import * as styles from '../styles/Pages.module.scss'

//prettier-ignore
export const Contact = () => {
  const form = useRef()
  const [resText, setResText] = useState('')
  const [resError, setResError] = useState('')
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  // const [ wasSent, setWasSent ] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tnulx5l',
        'template_giqqwz7',
        form.current,
        'CR6MBiPu1IJ5ObH5I'
      )
      .then(
        (result) => {
          setResText(result.text)
          // setWasSent(true)
          console.log(result.text)
        },
        (error) => {
          setResError(error.text)
          // setWasSent(true)
          console.log(error.text)
        }
      )

  }



  return (
    <>
      <section className={`${styles.home_bg} ${styles.section}` }>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: .5, delay: .25 }}
        ></motion.div>

        <div className={styles.page_head}>
          <h1 className={styles.page_head_branding}><span className={styles.secondary_color}>crossroads</span> blues <span className={styles.secondary_color}>experience</span></h1>
          <h2 className={styles.page_head_slug}>inspire&nbsp;&bull;&nbsp;educate&nbsp;&bull;&nbsp;engage</h2>
          <hr className={styles.page_head_rule}/>
        </div>
      

          <div className={styles.contact_feedback}>
            {!resText && 
                <>

                <form 
                  className={styles.contact}
                  ref={form} 
                  onSubmit={sendEmail}
                  >
                  {/* <div className="close-box"><Link to="/"><FaRegWindowClose /></Link></div> */}
                  <div className={styles.contact_head}>
                    <h2 className={styles.contact_head_heading}>Contact Us</h2>
                    <p className={styles.contact_head_text}>
                      Our program is the perfect complement for your school, church or any other venue that brings adults and kids together. To find out more about <span className={styles.semibold}>Crossroads Blues Experience</span>, please feel free to send us a message. 
                    </p>
                  </div>


                  <div className={styles.contact_body}>
              
              <div className={styles.contact_info}>
                <div className={styles.contact_input}>
                  {/* <label className='block text-gray-700 text-sm font-bold mb-2'>Your name:</label> */}
                  <label className={styles.contact_input_label}>Your name:</label>
                  <input 
                    className={styles.contact_input_text}
                    type='text' 
                    name='user_name'
                    onChange={ (e) => setName(e.target.value)}
                    value={ name }
                    />
                </div>
                <div className={styles.contact_input}>
                  <label className={styles.contact_input_label}>Your email:</label>
                  <input 
                    className={styles.contact_input_text}
                    type='email' 
                    name='user_email'
                    onChange={ (e) => setEmail(e.target.value)}
                    value={ email }
                  />
                </div>
              </div>
              <div className={styles.contact_message}>
                <label className={styles.contact_input_label}>Message:</label>
                <textarea 
                className={styles.contact_message_text}
                onChange={ (e) => setMessage(e.target.value)}
                value={ message }
                />
              </div>
              {/* <button className='contact_button bg-blue-900 block mx-auto px-12 py-4 w-[140px] text-white mt-12' type='submit'>SEND</button> */}
              <button className={styles.contact_button} type='submit'>SEND</button>
            </div>
          </form>




                </>
            }
            {resText && 
            <>
                {resText && 
                  <div className={styles.feedback_success}>
                    <h3 className={styles.feedback_success_heading}>Your message was sent successfully.</h3>
                    <p className={styles.contact_feedback_text}>Thanks for contacting us at <span className={styles.semibold}>Crossroads Blues Experience</span>. We&rsquo;ll respond as soon as we can. You might get a faster response by sending us a PM on <Link href="https://www.facebook.com/crossroadsbluesexperience" className={styles.link_secondary}>our Facebook page</Link>.</p>
                  </div>
                }
            
            
            
            
            
            </>
            }
            {resError && <p className={styles.contact_form_feedback_text}>Your message wasn&rsquo;t sent. Maybe try again later?</p>}


          </div>


      </section>
    </>
  )
}
export default Contact
