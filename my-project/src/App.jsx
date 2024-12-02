
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import { Toaster } from 'sonner'
export const myContext = createContext()

function App() {
  const [dark, setDark] = useState(false)

  return (

    <myContext.Provider value={{dark,setDark}}>
      <Toaster/>
      <div className={`${dark && "dark "}`}>
        <div className='bg-[url("https://i.pinimg.com/736x/b2/fb/21/b2fb21f206c56acc2007ed7e587d9770.jpg")] bg-fixed bg-cover scroll-smooth'>
          <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </myContext.Provider>

  )
}

export default App
