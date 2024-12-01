import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import React from 'react'
import svganimation from '../svg/svganimation.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { User } from 'lucide-react'
import Lottie from 'lottie-react'

function Contact() {
  return (
    <div id='contact' className='overflow-hidden w-full h-full flex justify-center items-center text-white py-16 dark:bg-black'>
      <div>
        <h1 className='text-4xl font-semibold text-center dark:text-white py-6'>Contact Us</h1>
        <div>
          <motion.div
            className='flex flex-col md:flex-row space-x-4 justify-center items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}

          >
            {/* <div className='hidden lg:block'>
              <img className='rounded-md' src="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_52683-59856.jpg?semt=ais_hybrid" alt="" />
            </div> */}

            <div>
              <Lottie className='' animationData={svganimation}></Lottie>
            </div>
            <motion.div
            initial={{x:50}}
            whileInView={{x:0}}
            transition={{duration:1}}
            >
              <Card className="w-[350px] dark:bg-black bg-white backdrop-blur-md bg-opacity-5 text-white" >
                <CardHeader >
                  <CardTitle className="flex space-x-2 items-center">Contact Me <span className='ml-4'><User /></span></CardTitle>
                  <CardDescription className='text-white'>Lets start project together</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input className='dark:bg-neutral-800 placeholder:text-white bg-white backdrop-blur-md bg-opacity-5' id="firstName" placeholder="Enter Your Name" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input className='dark:bg-neutral-800 placeholder:text-white bg-white backdrop-blur-md bg-opacity-5' id="lastName" placeholder="Enter Last Name" />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input className='dark:bg-neutral-800 placeholder:text-white bg-white backdrop-blur-md bg-opacity-5' type="email" id="email" placeholder="Enter Email" />
                      </div>

                      <Textarea className='dark:bg-neutral-800 placeholder:text-white bg-white backdrop-blur-md bg-opacity-5' placeholder="Type your message here." />

                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <motion.div 
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1.5}}
                  >
                  <Button>Send</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>



        </div>

      </div>
    </div>
  )
}

export default Contact