import Navbar from './Navbar'
import Footer from './Footer'
import Topbar from './Topbar'

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <>
        {children}
      </>
       <Footer />
    </>
  )
}

export default MasterLayout
