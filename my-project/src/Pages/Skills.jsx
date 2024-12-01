import React from 'react'
import SkillCard from '../components/SkillCard'
import { Card } from '@/components/ui/card'
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import jsLogo from '../images/js.png'
import reactLogo from '../images/react.png'
import reduxLogo from '../images/redux.png'
import expressLogo from '../images/express.png'
import nodejsLogo from '../images/nodejs.png'
import tailwindLogo from '../images/tailwind.png'
import chakraLogo from '../images/chakra.png'
import githubLogo from '../images/github.png'
import { AnimatePresence, motion } from 'framer-motion'
function Skills() {

    const mySkills = [
        {
            skillName: "HTML",
            myProgress: 85,
            skillImage: htmlLogo
        },
        {
            skillName: "CSS",
            myProgress: 80,
            skillImage: cssLogo
        },
        {
            skillName: "JavaScript",
            myProgress: 80,
            skillImage: jsLogo
        },
        {
            skillName: "React Js",
            myProgress: 85,
            skillImage: reactLogo
        },
        {
            skillName: "Redux Toolkit",
            myProgress: 75,
            skillImage: reduxLogo
        },
        {
            skillName: "Node Js",
            myProgress: 80,
            skillImage: nodejsLogo
        },
        {
            skillName: "Express Js",
            myProgress: 90,
            skillImage: expressLogo
        },
        {
            skillName: "Mongodb",
            myProgress: 90,
            skillImage: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
        },
        {
            skillName: "Tailwind Css",
            myProgress: 80,
            skillImage: tailwindLogo
        },
        {
            skillName: "Chakra UI",
            myProgress: 60,
            skillImage: chakraLogo
        },
        {
            skillName: "ShadCn",
            myProgress: 60,
            skillImage: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png?v=638421450720000000"
        },
        {
            skillName: "gitHub",
            myProgress: 80,
            skillImage: githubLogo
        }

    ]
    return (
        <div id='skill' className='w-full h-auto flex justify-center items-center  dark:bg-black dark:text-white'>

            <div className=' w-full p-16 text-white '>
                <h1 className='text-center text-4xl mb-6 font-semibold '>Skills</h1>

                <Card className='hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8 shadow-sm rounded-xl dark:bg-black  bg-white backdrop-blur-md bg-opacity-5'>
                {/* <AnimatePresence> */}
                    {
                        mySkills.map((item, index) => (
                            <motion.div key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                // exit={{ opacity: 0, y: -50 }}
                            >
                                <SkillCard skillName={item.skillName} myProgress={item.myProgress} />
                            </motion.div>
                        ))
                    }
                    {/* </AnimatePresence> */}
                </Card>


                <Card className=' md:hidden grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-8 shadow-sm rounded-xl dark:bg-black  bg-white backdrop-blur-md bg-opacity-5 '>
                {/* <AnimatePresence> */}
                    {  
                        mySkills.map((item, index) => (
                            <motion.div key={index} className='flex justify-center items-center flex-col p-4 bg-white bg-opacity-5 backdrop-blur-md rounded-lg'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                // exit={{ opacity: 0, y: -50 }}
                            // viewport={{ once: true, amount: 0.3 }}
                            >
                                <img className='w-16   object-cover rounded-lg ' src={item.skillImage} alt="skills" />
                                <h1 className='text-white text-sm'>{item.skillName}</h1>
                            </motion.div>
                        ))
                    }
                    {/* </AnimatePresence> */}

                </Card>

            </div>
        </div>
    )
}

export default Skills