//prettier-ignore
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { FaRegWindowClose } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

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

  // const handleClose = (e) => {
  //   console.log('handleClose');
  // }
  

  return (
    <div className='contact bg-cover bg-no-repeat bg-center h-screen'>

      
      <form 
        className='contact_form'
        ref={form} 
        onSubmit={sendEmail}
        >
        {/* <div className="close-box"><Link to="/"><FaRegWindowClose /></Link></div> */}
        <div className="contact_form--title">
          <h2 className='contact_form--title-text'>CONTACT CBE</h2>
        </div>
        <div className="contact-form--feedback">
          {resText && <p className='contact-form--feedback-text'>Thanks for your message. You&rsquo;ll hear from us soon.</p>}
          {resError && <p className='contact-form--feedback-text'>Your message wasn&rsquo;t sent. Maybe try again later?</p>}
        </div>
        <div className="contact_form-body">
          <div className='contact-form--input'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Your name:</label>
            <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text' 
              name='user_name'
              onChange={ (e) => setName(e.target.value)}
              value={ name }
              />
          </div>
          <div className="contact-form--input">
            <label className='contact-form--input-label'>Your email:</label>
              <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email' 
                name='user_email'
                onChange={ (e) => setEmail(e.target.value)}
                value={ email }
                />
          </div>
          <div className="contact-form--input  h-[120px]">
            <label className='contact-form--input-label'>Message:</label>
            <textarea 
            name="message"
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={ (e) => setMessage(e.target.value)}
            value={ message }
            />
          </div>
          <button className='contact_form--button bg-blue-900 block mx-auto px-12 py-4 w-[140px] text-white mt-12' type='submit'>SEND</button>
        </div>
      </form>


    </div>
  )
}
export default Contact
