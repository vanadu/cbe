import Link from 'next/link'
import Image from 'next/image'
import KentCulturalAlliance from '/public/images/img-kent-cultural-alliance.jpg'
import { FaFacebookSquare } from 'react-icons/fa'
// import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
// import { MdMail } from 'react-icons/md'
// import { FaExclamationCircle } from 'react-icons/fa'
// import { IoPawSharp } from 'react-icons/io5'
// import { FaHome } from 'react-icons/fa'
import * as styles from '../styles/Header.module.scss'


const IconBar = () => {

  // !VA Commented out the Home, Stories, For Patients and For DVMs Links below 2023.09.24. 
  return (
    <>
      <div className={styles.icons}>

        {/* <Link
          href='/'
          className={styles.icon}>
          <FaHome />
        </Link> */}
        <Link 
          href='/blog'
          className={styles.icon} 
          >
          <Image src={KentCulturalAlliance} alt="LarParLife.com" />
        </Link>
        {/* <Link 
          href='https://www.youtube.com/channel/UCwHwkfSqDlO6MJejPrxzW0A'
          className={styles.icon} 
          target="_blank"
          rel="noopener noreferrer">
          <TfiYoutube />
        </Link> */}
        <Link 
          href='https://www.facebook.com/crossroadsbluesexperience' 
          className={styles.icon} 
          target="_blank" 
          rel="noopener noreferrer">
          <FaFacebookSquare />
        </Link>
        {/* <Link
          href='/contact'
          className={styles.icon} 
          >
          <MdMail />
        </Link> */}


      </div>
    </>
  )
}

export default IconBar