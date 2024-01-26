import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CBEHeaderBrandingMobile from '../../public/images/img-cbe-branding-mobile.png'
import CBEHeaderBrandingDesktop from '../../public/images/img-cbe-branding-desktop.png'
import { motion } from 'framer-motion'
import IconBar from '../components/IconBar'
import headerimg from '../../public/images/img-header.png'
import HeaderBrick from '../components/HeaderBrick'


import RobertJohnson from '../../public/images/bricks/img-brick-robert-johnson.png'
import CharleyPatton from '../../public/images/bricks/img-brick-charley-patton.png'
import SonHouse from '../../public/images/bricks/img-brick-son-house.png'
import SkipJames from '../../public/images/bricks/img-brick-skip-james.png'
import MuddyWaters from '../../public/images/bricks/img-brick-muddy-waters.png'
import BukkaWhite from '../../public/images/bricks/img-brick-bukka-white.png'
import LeveeBreach from '../../public/images/bricks/img-brick-levee-breach.png'
import Bales from '../../public/images/bricks/img-brick-9226-bales.png'
import Calypso from '../../public/images/bricks/img-brick-calypso-wreck.png'
import JohnFitch from '../../public/images/bricks/img-brick-john-fitch.png'
import LoadingRiverboats from '../../public/images/bricks/img-brick-loading-riverboats.png'
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

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: .5, delay: .25 }}
    >
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
            <IconBar />
            <Navbar />
          </div>


        <div className={styles.bricks_container}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1, delay: 1 }}
          >

            <div className={styles.bricks_slider}>
              <div className={styles.bricks}>
                    
                <HeaderBrick src={RobertJohnson} className={styles.brick_img} alt="Robert Johnson" />
                <HeaderBrick src={Calypso} className={styles.brick_img} alt="Wreck of the Calypso" />
                <HeaderBrick src={JohnFitch} className={styles.brick_img} alt="First Steamboat 1789" />
                <HeaderBrick src={CharleyPatton} className={styles.brick_img} alt="Charley Patton" />
                <HeaderBrick src={Bales} className={styles.brick_img} alt="9226 Bales of Cotton" />
                <HeaderBrick src={LeveeBreach} className={styles.brick_img} alt="Mississippi Levee Breach 1927" />
                <HeaderBrick src={RiverboatDisaster} className={styles.brick_img} alt="Mississippi Riverboat Disaster" />
                <HeaderBrick src={LoadingRiverboats} className={styles.brick_img} alt="Loading Riverboats on the Mississippi" />
                {/* Unique bricks */}
                <HeaderBrick src={GreenvilleTogether} className={styles.brick_img} alt="Greenville Mississippi Flood" />
                <HeaderBrick src={SonHouse} className={styles.brick_img} alt="Son House" />
                <HeaderBrick src={HorseDrawnTrain} className={styles.brick_img} alt="Horse-Drawn Train" />
                <HeaderBrick src={BridgeTrainWreck} className={styles.brick_img} alt="Bridge Train Wreck" />
                <HeaderBrick src={EarlyLocomotive1} className={styles.brick_img} alt="Steam Locomotive around 1900" />
                <HeaderBrick src={EarlyLocomotive2} className={styles.brick_img} alt="Steam Locomotive around 1905" />
                <HeaderBrick src={LayingRails} className={styles.brick_img} alt="Laying Rails" />
                <HeaderBrick src={SouthMoorWreck} className={styles.brick_img} alt="South Moor Wreck" />
                <HeaderBrick src={FastestSteamLoc} className={styles.brick_img} alt="Fastest Steam Locomotive" />
                <HeaderBrick src={SkipJames} className={styles.brick_img} alt="Skip James" />
                <HeaderBrick src={CarBridgeWreck} className={styles.brick_img} alt="Early Car Wreck on Bridge" />
                <HeaderBrick src={EdisonElectricCar} className={styles.brick_img} alt="Edison Electric Car" />
                <HeaderBrick src={FlattenedWheels} className={styles.brick_img} alt="Car Wreck With Flattened Wheels" />
                <HeaderBrick src={TrouveTricycle} className={styles.brick_img} alt="Trouve Electric Tricycle" />
                <HeaderBrick src={FordFirstCar} className={styles.brick_img} alt="Henry Ford's First Car" />
                <HeaderBrick src={WallaceElectricCar} className={styles.brick_img} alt="Wallace Electric Car" />
                <HeaderBrick src={DrivingFashion} className={styles.brick_img} alt="Early Driving Fashion" />
                <HeaderBrick src={BukkaWhite} className={styles.brick_img} alt="Bukka White" />
                <HeaderBrick src={BoeingFirst} className={styles.brick_img} alt="Boeing First Commercial Flight" />
                <HeaderBrick src={DorandTriplane} className={styles.brick_img} alt="Dorand Triplane 1908" />
                <HeaderBrick src={Hindenberg} className={styles.brick_img} alt="Hindenberg Disaster 1937" />
                <HeaderBrick src={KatherineStinson} className={styles.brick_img} alt="Katherine Stinson 1913" />
                <HeaderBrick src={PompeienPiraud} className={styles.brick_img} alt="Pompeien-Piraud Airship" />
                <HeaderBrick src={MuddyWaters} className={styles.brick_img} alt="Muddy Waters" />
                <HeaderBrick src={ConvairFlyingCar} className={styles.brick_img} alt="Convair Flying Car" />
                <HeaderBrick src={Dequevillay} className={styles.brick_img} alt="D'Equevillay Flying Machine 1908" />
                <HeaderBrick src={WrightBros} className={styles.brick_img} alt="Wright Brothers 1902" />
                {/* REPEATS for animation */}
                <HeaderBrick src={RobertJohnson} className={styles.brick_img} alt="Robert Johnson" />
                <HeaderBrick src={Calypso} className={styles.brick_img} alt="Wreck of the Calypso" />
                <HeaderBrick src={JohnFitch} className={styles.brick_img} alt="First Steamboat 1789" />
                <HeaderBrick src={CharleyPatton} className={styles.brick_img} alt="Charley Patton" />
                <HeaderBrick src={Bales} className={styles.brick_img} alt="9226 Bales of Cotton" />
                <HeaderBrick src={LeveeBreach} className={styles.brick_img} alt="Mississippi Levee Breach 1927" />
                <HeaderBrick src={RiverboatDisaster} className={styles.brick_img} alt="Mississippi Riverboat Disaster" />
                <HeaderBrick src={LoadingRiverboats} className={styles.brick_img} alt="Loading Riverboats on the Mississippi" />
                {/* Desktop */}
                <HeaderBrick src={GreenvilleTogether} className={styles.ldesktop_brick_img} alt="Greenville Mississippi Flood" />
                <HeaderBrick src={SonHouse} className={styles.ldesktop_brick_img} alt="Son House" />
                <HeaderBrick src={HorseDrawnTrain} className={styles.ldesktop_brick_img} alt="Horse-Drawn Train" />
                <HeaderBrick src={BridgeTrainWreck} className={styles.ldesktop_brick_img} alt="Bridge Train Wreck" />
                <HeaderBrick src={EarlyLocomotive1} className={styles.ldesktop_brick_img} alt="Steam Locomotive around 1900" />
                <HeaderBrick src={EarlyLocomotive2} className={styles.ldesktop_brick_img} alt="Steam Locomotive around 1905" />

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}


export default Header