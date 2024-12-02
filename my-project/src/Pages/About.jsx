import { Card } from '@/components/ui/card'
import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
// import ProgressBar from '../components/ProgressBar'
import svgabout from '../svg/svgabout.json'

function About() {
  return (
    <>
      <div id='about' className='overflow-hidden w-full h-full py-9 flex justify-center items-center  dark:bg-black  '>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="w-[350px] md:w-[700px] space-y-7 p-10 dark:bg-neutral-950 bg-white backdrop-blur-md bg-opacity-5 text-white">
            <h1 className='text-4xl text-center font-semibold'>About Me</h1>
            <div className='space-y-3 dark:text-white'>
              <p>I'm a passionate React Developer with a strong foundation in building responsive, user-friendly applications. With expertise in frontend frameworks like React and UI libraries such as Chakra UI and Tailwind CSS, I create seamless, intuitive user experiences. I have hands-on experience in managing application state with Context API and implementing essential e-commerce features like search, sorting, and cart functionality.</p>
              <p>On the backend, I’m skilled in Node.js and Express.js, where I focus on building scalable, secure APIs and handling complex data interactions. Using MongoDB Atlas as my preferred database, I ensure data reliability and consistency. My projects emphasize secure, JWT-based authentication and authorization to enhance data security and user privacy.</p>
              <p>I’m always keen to learn new tools and technologies to enhance my skills and am dedicated to delivering efficient, high-quality code in every project. If you’re looking for a developer who values performance and user experience, let's connect!</p>
            </div>
          </Card>

          {/* <div className=' w-52  block'>
            <Lottie animationData={svgabout}></Lottie>
          </div> */}

        </motion.div>
      </div>
    </>
  )
}

export default About