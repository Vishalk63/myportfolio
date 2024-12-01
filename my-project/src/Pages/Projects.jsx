import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import projectImage1 from '../images/project1.png'
import { motion } from 'framer-motion'

function Projects() {
    return (
        <div id='projects' className='overflow-hidden h-full py-8  w-full flex justify-center items-center text-white dark:bg-black'>
            <div>
                <h1 className='text-4xl font-semibold my-9 text-center dark:text-white'>Projects</h1>

                <div className='flex flex-col md:flex-row gap-10 '>

                    <motion.div
                    initial={{x:-100}}
                    whileInView={{x:0}}
                    transition={{duration:1}}
                    >
                        <Card className="w-[350px] xl:w-[500px] dark:bg-neutral-950 dark:text-white bg-white backdrop-blur-md bg-opacity-5 text-white">
                            <CardHeader>
                                <CardTitle>TATA 1MG Website Clone</CardTitle>
                                <CardDescription className="text-white">A healthcare platform that provides a variety of services</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-3 ">
                                <div className='overflow-hidden rounded-lg'>
                                <img className='w-auto h-60 object-cover rounded-lg hover:scale-110 transition-all ' src='https://media.istockphoto.com/id/1458941060/vector/summer-sale-vector-design-summer-special-offer-text-in-podium-stage-product-presentation.jpg?s=612x612&w=0&k=20&c=xaIWNWIL2gh1rcGIJ_Om75w5qrhCzC85_-_-KiC0tHQ=' alt="projectLogo" />

                                </div>
                                <p className='text-sm text-white dark:text-white'>Frontend: React with Context API, Chakra UI, and Tailwind CSS; features search, and JWT authentication.</p>
                                <hr />
                                <p className='text-sm text-white dark:text-white'>Backend: Node.js, Express.js, MongoDB Atlas; includes CRUD APIs and secure JWT-based authentication/authorization.</p>
                            </CardContent>

                            <CardFooter className="space-x-4">
                                <Button className='bg-white text-black'><a target='blank' href="https://funny-sprite-a4c334.netlify.app/">Live</a></Button>
                                <Button className='bg-white text-black'><a target='blank' href="https://github.com/Vishalk63/1mgProject">GitHub</a></Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                    <motion.div
                    initial={{x:100}}
                    whileInView={{x:0}}
                    transition={{duration:1}}
                    >
                        <Card className="w-[350px] xl:w-[500px] dark:bg-neutral-950 bg-white backdrop-blur-md bg-opacity-5 text-white">
                            <CardHeader>
                                <CardTitle>Food Website</CardTitle>
                                <CardDescription className="text-white">Using Redux-Toolkit with Dynamic Data from backend (all functionalites)</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-3 ">
                                <div className='overflow-hidden rounded-lg'>
                                <img className='w-auto h-60 object-cover rounded-lg hover:scale-110 transition-all ' src='https://img.freepik.com/free-photo/3d-beauty-product-studio_23-2151401472.jpg' alt="" />

                                </div>
                                <p className='text-sm text-white dark:text-white'>Frontend: React with Context API and Redux-Toolkit, Chakra UI, Shadcn, and Tailwind CSS; features search, sort, cart, and JWT authentication.</p>
                                <hr />
                                <p className='text-sm text-white dark:text-white'>Backend: Node.js, Express.js, MongoDB Atlas; includes CRUD APIs and secure JWT-based authentication/authorization.</p>
                            </CardContent>

                            <CardFooter className="space-x-4">
                                <Button className='bg-white text-black'><a target='blank' href="https://food-app-silk-zeta.vercel.app/">Live</a></Button>
                                <Button className='bg-white text-black'><a target='blank' href="https://github.com/Vishalk63/ecom">GitHub</a></Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default Projects