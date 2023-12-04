// From https://www.codementor.io/@giorgiasambrotta/hamburger-menu-with-react-and-tailwind-css-1qx6sruvua
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CBELogo from '../../public/images/img-cbe-logo-400.png'
import MobileMenuArrow from '../../public/images/img-mobile-menu-arrow.svg'
import * as styles from '../styles/Header.module.scss'


//prettier-ignore
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <section className={styles.mobile_menu}>
          <div
            className={styles.mobile_menu_icon}
            onClick={() => setIsNavOpen((prev) => !prev)}>
            <Image 
              src={CBELogo} 
              width="0"
              height="0"
              sizes="100vw"
              // style={{ width: '100%', height: '100%' }}
              className={styles.mobile_menu_logo} alt="Crossroads Blues Experience" 
            />
            <div className={styles.mobile_menu_arrow}>
              <Image 
                src={MobileMenuArrow}
                width="0"
                height="0"
                sizes="100vw"
                className={styles.mobile_menu_arrow_svg}
                alt=""/>
            </div>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className={styles.mobile_menu_close}
              onClick={() => setIsNavOpen(false)}>
              <svg
                className=''
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='' x2='18' y2='18' />
              </svg>
            </div>
            <ul className={styles.mobile_menu_list }>
              <li className={styles.mobile_menu_list_item}>
                <Link href='/' className='link-dark'
                onClick={() => setIsNavOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li className={styles.mobile_menu_list_item}>
                <Link 
                href='/program'
                onClick={() => setIsNavOpen(false)}
                >PROGRAM</Link>
              </li>
              <li className={styles.mobile_menu_list_item}>
                <Link 
                href='/about'
                onClick={() => setIsNavOpen(false)}
                >ABOUT</Link>
              </li>
              <li className={styles.mobile_menu_list_item}>
                <Link 
                href='/contact'
                onClick={() => setIsNavOpen(false)}
                >CONTACT</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.desktop_menu}>

          <ul className={styles.desktop_menu_list}>
            <li className={styles.desktop_menu_list_item}>
              <Link
                href='/'
                className={styles.nav_link}>
                home
              </Link>
            </li>
            <li className={styles.desktop_menu_list_item}>
              <Link
                href='/program'
                className={styles.nav_link}>
                program
              </Link>
            </li>
            <li className={styles.desktop_menu_list_item}>
              <Link
                href='/about'
                className={styles.nav_link}>
                
                about
              </Link>
            </li>
            <li className={styles.desktop_menu_list_item}>
              <Link
                href='/contact'
                className={styles.nav_link}>
                contact
              </Link>
            </li>
          </ul>

        </section>


      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #dceaec;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  )
}
