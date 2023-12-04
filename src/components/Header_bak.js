import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderBrandingMobile from '../../public/images/img-cbe-branding-mobile.png'
import CBEHeaderBrandingDesktop from '../../public/images/img-cbe-branding-desktop.png'

import headerimg from '../../public/images/img-header.png'
import HeaderBrick from '../components/HeaderBrick'


import RobertJohnson from '../../public/images/landing-img-robert-johnson.jpg'
import CharleyPatton from '../../public/images/landing-img-charley-patton.jpg'
import SonHouse from '../../public/images/landing-img-son-house.jpg'
import SkipJames from '../../public/images/landing-img-skip-james.jpg'
import MuddyWaters from '../../public/images/landing-img-muddy-waters.jpg'
import BukkaWhite from '../../public/images/landing-img-bukka-white.jpg'
import LeveeBreach from '../../public/images/bricks/img-brick-levee-breach.png'
import Bales from '../../public/images/bricks/img-brick-9226-bales.png'
import Calypso from '../../public/images/bricks/img-brick-calypso-wreck.png'
import JohnFitch from '../../public/images/bricks/img-brick-john-fitch.png'
import LoadingRiverboats from '../../public/images/bricks/img-brick-levee-breach.png'
import RiverboatDisaster from '../../public/images/bricks/img-brick-riverboat-disaster.png'
import GreenvilleTogether from '../../public/images/bricks/img-brick-greenville-together.png'
import HorseDrawnTrain from '../../public/images/bricks/img-brick-horse-drawn-train.png'
import BridgeTrainWreck from '../../public/images/bricks/img-brick-bridge-train-wreck.png'
import EarlyLocomotive1 from '../../public/images/bricks/img-brick-early-locomotive-1.png'
import EarlyLocomotive2 from '../../public/images/bricks/img-brick-early-locomotive-2.png'
import FastestSteamLoc from '../../public/images/bricks/img-brick-fastest-steam-loc.png'
import LayingRails from '../../public/images/bricks/img-brick-laying-rails.png'
import SouthMoorWreck from '../../public/images/bricks/img-brick-south-moor-wreck.png'
import CarBridgeWreck from '../../public/images/bricks/img-brick-car-bridge-wreck.png'
import EdisonElectricCar from '../../public/images/bricks/img-brick-edison-electric-car.png'
import FlattenedWheels from '../../public/images/bricks/img-brick-flattened-wheels.png'
import FordFirstCar from '../../public/images/bricks/img-brick-ford-first-car.png'
import TrouveTricycle from '../../public/images/bricks/img-brick-trouve-tricycle.png'
import WallaceElectricCar from '../../public/images/bricks/img-brick-wallace-electric-car.png'
import DrivingFashion from '../../public/images/bricks/img-brick-driving-fashion.png'
import BoeingFirst from '../../public/images/bricks/img-brick-boeing-first-flight.png'
import DorandTriplane from '../../public/images/bricks/img-brick-dorand-1908.png'
import Hindenberg from '../../public/images/bricks/img-brick-hindenberg.png'
import KatherineStinson from '../../public/images/bricks/img-brick-katherine-stinson-1913.png'
import PompeienPiraud from '../../public/images/bricks/img-brick-pompeien-piraud.png'
import ConvairFlyingCar from '../../public/images/bricks/img-brick-convair-118.png'
import Dequevillay from '../../public/images/bricks/img-brick-dequevillay-1908.png'
import WrightBros from '../../public/images/bricks/img-brick-wright-bros-1902.png'
// import Placeholder from '../../public/images/bricks/placeholder'
// import Placeholder from '../../public/images/bricks/placeholder'


// import Branding from '../components/Branding'
import Navbar from './Navbar'


import * as styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top_bar}>
        <div className={styles.branding}>
          <Link 
            href='/'
            className={styles.branding_mobile_link}
          >
            <Image 
              src={CBEHeaderBrandingMobile} 
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className={styles.branding_mobile_img} alt="XXX"
              />
          </Link>
          <Link href='/'>
            <Image 
              src={CBEHeaderBrandingDesktop} 
              width="0"
              height="0"
              sizes="100vw"
              // style={{ width: '100%', height: 'auto' }}
              className={styles.branding_desktop} alt="XXX"
              />
          </Link>
        </div>
        <Navbar />
      </div>
      <div className={styles.header_img_box}>
        <div className={styles.header_anim}>


            <div className={styles.grid_test_grid}>
              
              <HeaderBrick src={RobertJohnson} alt="Robert Johnson" />
              <HeaderBrick src={LeveeBreach} alt="Mississippi Levee Breach 1927" />
              <HeaderBrick src={Bales} alt="9226 Bales of Cotton" />
              <HeaderBrick src={Calypso} alt="Wreck of the Calypso" />
              <HeaderBrick src={JohnFitch} alt="First Steamboat 1789" />
              <HeaderBrick src={CharleyPatton} alt="Charley Patton" />
              <HeaderBrick src={LoadingRiverboats} alt="Loading Riverboats on the Mississippi" />
              <HeaderBrick src={RiverboatDisaster} alt="Mississippi Riverboat Disaster" />
              <HeaderBrick src={GreenvilleTogether} alt="Greenville Mississippi Flood" />
              <HeaderBrick src={SonHouse} alt="Son House" />
              <HeaderBrick src={HorseDrawnTrain} alt="Horse-Drawn Train" />
              <HeaderBrick src={BridgeTrainWreck} alt="Bridge Train Wreck" />
              <HeaderBrick src={EarlyLocomotive1} alt="Steam Locomotive around 1900" />
              <HeaderBrick src={EarlyLocomotive2} alt="Steam Locomotive around 1905" />
              <HeaderBrick src={LayingRails} alt="Laying Rails" />
              <HeaderBrick src={SouthMoorWreck} alt="South Moor Wreck" />
              <HeaderBrick src={FastestSteamLoc} alt="Fastest Steam Locomotive" />
              <HeaderBrick src={SkipJames} alt="Skip James" />
              <HeaderBrick src={CarBridgeWreck} alt="Early Car Wreck on Bridge" />
              <HeaderBrick src={EdisonElectricCar} alt="Edison Electric Car" />
              <HeaderBrick src={FlattenedWheels} alt="Car Wreck With Flattened Wheels" />
              <HeaderBrick src={TrouveTricycle} alt="Trouve Electric Tricycle" />
              <HeaderBrick src={FordFirstCar} alt="Henry Ford's First Car" />
              <HeaderBrick src={WallaceElectricCar} alt="Wallace Electric Car" />
              <HeaderBrick src={DrivingFashion} alt="Early Driving Fashion" />
              <HeaderBrick src={BukkaWhite} alt="Bukka White" />
              <HeaderBrick src={BoeingFirst} alt="Boeing First Commercial Flight" />
              <HeaderBrick src={DorandTriplane} alt="Dorand Triplane 1908" />
              <HeaderBrick src={Hindenberg} alt="Hindenberg Disaster 1937" />
              <HeaderBrick src={KatherineStinson} alt="Katherine Stinson 1913" />
              <HeaderBrick src={PompeienPiraud} alt="Pompeien-Piraud Airship" />
              <HeaderBrick src={MuddyWaters} alt="Muddy Waters" />
              <HeaderBrick src={ConvairFlyingCar} alt="Convair Flying Car" />
              <HeaderBrick src={Dequevillay} alt="D'Equevillay Flying Machine 1908" />
              <HeaderBrick src={WrightBros} alt="Wright Brothers 1902" />






            </div>

        </div>
      </div>
      <div className={styles.bottom_bar}>
        {/* <div className={styles.bottom_bar_content}>
          <h2>inspire</h2>
          <h2>&bull;</h2>
          <h2>educate</h2>
          <h2>&bull;</h2>
          <h2>engage</h2>
        </div> */}
      </div>
    </div>
  )
}

export default Header