import React from 'react'
import Image from 'next/image'

import Branding from '../components/Branding'
import Navbar from '../components/Navbar'


import * as styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Branding />
      <Navbar />
    </div>
  )
}

export default Header