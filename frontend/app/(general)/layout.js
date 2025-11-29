import './globals.css';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Piyush — Software Engineer Portfolio',
  description: 'Portfolio + dashboard hybrid with embedded LLM chat iframe'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container py-8">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
