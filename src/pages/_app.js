// Import the Google fonts using the Next font plugin. I'm not even sure this works...there's something in the comments about this not working with iOS, and all these other steps might just be the workaround for that. One of these days I'll have to test that. 2023.11.15 apparently it still doesn't work an you have to import them with the import statement in globals.css
import { Oswald, Inter, Open_Sans, Inconsolata } from 'next/font/google'
import Layout from '../components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Make sure you import globals.css, that's where the actual import declaration for the Google fonts is.
import '../styles/globals.css'
import '../styles/globals.scss'


// If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--oswald-font'
})
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--inter-font'
})
const opensans = Open_Sans(
  { subsets: ['latin'],
    variable: '--opensans-font'
})
const inconsolata = Inconsolata(
  { subsets: ['latin'],
    variable: '--inconsolata-font'
})


// Include the style jsx global tag with the Google fonts defined in the root element as follows:
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --oswald-font: ${oswald.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
          --opensans-font: ${opensans.style.fontFamily};
          --inconsolata-font: ${inconsolata.style.fontFamily};
        }'
      `}</style>

      <Head>
        <title>Crossroads Blues Experience</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://www.crossroadsbluesexperience.com" />
        <meta property="og:title" content="Crossroads Blues Experience" />
        <meta property="og:description" content="Performance &amp; visual storytelling with a live blues soundrack." />
        <meta property="og:image" content="https://staging.crossandhigh.com/images/CBE_OpenGraphImage_1200X630_2024.01.17A.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crossroads Blues Experience" />
        <meta name="twitter:description" content="Inspire&nbsp;&bull;&nbsp;Educate&nbsp;&bull;&nbsp;Engage" />
        <meta name="twitter:site" content="@crossroadsbluesexperience" />
        <meta name="twitter:image"
          content="https://staging.crossandhigh.com/images/TwitterCardImage_LarParLife_2022.12.12A.jpg" />
        <meta name="twitter:creator" content="@larparlife" /> */}

      </Head>


      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
