import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between font-content antialiased">
      <Header />
      <main className="isolate mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
