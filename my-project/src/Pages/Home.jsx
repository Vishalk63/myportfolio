import React from 'react'
import logo from '../images/profile2.jpeg';
import { motion } from 'framer-motion'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Home() {

  function handleResume (){
    toast.info("We will update soon")

    const fileUrl = "/resume.pdf"; // Resume file location
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Vishal_Shivaji_Kachare_Resume.pdf";
    link.click();
  }
  return (
    
    
    <div id='home' className='w-full min-h-screen h-full pt-20 py-10 flex justify-center items-center dark:bg-black overflow-hidden '>
      
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      
      >
        <Card id="#home" className="overflow-hidden w-auto h-full backdrop-blur-md bg-white bg-opacity-5 shadow-lg dark:bg-neutral-950 flex flex-col justify-between p-3 gap-2 ">        {/* -------- */}

          <div className='flex flex-col-reverse md:flex-row gap-5 bg-transparent justify-center items-center'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Card className="w-[350px] backdrop-blur-md bg-transparent md:w-[500px] border-none dark:bg-neutral-950">
                <CardHeader>
                  <CardTitle>
                    <h1 className='text-5xl text-white'>HI!</h1>
                  </CardTitle>
                  <div>
                    <h1 className='text-4xl text-white'>I'm Vishal Kachare</h1>
                    <p className='text-4xl mb-6 text-white'>Am Developer</p>
                    {/* <p className='text-gray-600 dark:text-white '>I'm creative developer and I'm very passionate and dedicated to my work </p> */}
                    <p className=' text-white dark:text-white '>I'm a passionate and dedicated developer with a flair for crafting unique, engaging digital experiences. With a strong focus on blending creativity and technical skill, I build responsive, intuitive applications that connect with users. I take pride in every project, putting my heart into the code and design to bring ideas to life in a seamless, high-quality way.</p>
                  </div>
                </CardHeader>

                <CardFooter className="space-x-2">
                  <Button variant="outline"><a target='blank' href="https://github.com/Vishalk63"><Github /></a></Button>
                  <Button variant="outline"><a target='blank' href="/"><Linkedin /></a></Button>
                  <Button variant="outline"><a target='blank' href="/"><Instagram /></a></Button>
                  {/* <Button variant="outline"><a target='blank' href="/"><Facebook /></a></Button> */}
                </CardFooter>
              </Card>
            </motion.div>

            {/* ---------- */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Card className="w-[350px] bg-transparent flex justify-center items-center border-none dark:bg-neutral-950">
                {/* <CardContent> */}
                  <div>
                    <img className='w-full h-full object-cover rounded-lg' src={logo} alt="logo" />
                  </div>
                {/* </CardContent> */}
              </Card>
            </motion.div>
            {/* -------- */}

          </div>

          <CardFooter className="flex justify-between">
            <motion.div
              initial={{ x: 400 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Button variant="outline" onClick={handleResume}>Resume</Button>
            </motion.div>
          </CardFooter>

        </Card>
      </motion.div>
    </div>
  )
}

export default Home
