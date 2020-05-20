import Head from 'next/head'
import CFP from '../components/cfp'
import COC from '../components/coc'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Organisers from '../components/organisers'
import Platform from '../components/platform'
import Sponsors from '../components/sponsors'
import Tickets from '../components/tickets'

export default function Home() {
  return (
    <>
    <Header />
  <div className="p-4 shadow rounded bg-white">
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
    <CFP />
    <COC />
    <Contact />
    <Footer />
    <Organisers />
    <Platform />
    <Sponsors />
    <Tickets />
  </div>
  </>
  )
}