import About from '@/containers/About/About'
import Footer from '@/containers/Footer/Footer'
import Header from '@/containers/Header/Header'
import Work from '@/containers/Work/Work'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='pt-16'>
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  )
}
