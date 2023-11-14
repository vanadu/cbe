// Import the Google fonts using the Next font plugin. I'm not even sure this works...there's something in the comments about this not working with iOS, and all these other steps might just be the workaround for that. One of these days I'll have to test that.
import { Oswald, Inter, Open_Sans, Inconsolata } from 'next/font/google'
import Layout from '../components/Layout'
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
