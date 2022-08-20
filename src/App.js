import Hero from './components/Hero'
import GridProjectLayout from './components/GridProjectLayout'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  console.log(this,'44')
  return (
    <>
      <Hero />
      <About />
      <GridProjectLayout />
      <Footer />
    </>
  )
}

export default App
