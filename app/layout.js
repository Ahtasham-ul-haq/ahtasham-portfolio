import './globals.css'
import Navbar from '@/containers/Navbar/Navbar'

export const metadata = {
  title: 'Portfolio | Ahtasham',
  description: 'My Portfolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='app'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
