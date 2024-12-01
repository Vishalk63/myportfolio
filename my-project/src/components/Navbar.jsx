import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion"
import { myContext } from '../App';
// import { myContext } from '../App'; // अ‍ॅनिमेशनसाठी Framer Motion

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {dark,setDark} = useContext(myContext) 

    const menuVariants = {
        open: {
            opacity: 1, // मेनू पूर्णपणे दिसेल
            x: 0,       // सुरुवातीला हलणार नाही
            transition: { type: "tween", ease: "easeIn", duration: 0.3 } // हळूहळू हलणार
        },
        closed: {
            opacity: 0, // मेनू दिसणार नाही
            x: "100%", // डावीकडे सरकणार
            transition: { type: "tween", ease: "easeInOut", duration: 0.3 } // smooth अ‍ॅनिमेशन
        },
    };

    return (
        <nav className="bg-gray-800 text-white ">
            {/* Navbar Header */}
            <motion.div className='w-full flex justify-between items-center py-2 px-9 fixed top-0 left-0 bg-white bg-opacity-5 backdrop-blur-md  text-white dark:bg-neutral-950 dark:text-white z-10 drop-shadow-lg '

            >
                <motion.div className='text-3xl text-white dark:text-white cursor-pointer font-semibold '
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 1.8 }}
                >
                    Portfolio
                </motion.div>
                <div className='md:flex justify-center items-center space-x-16 hidden sm:hidden '>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 2 }}

                    >
                        <Link smooth={true} to='#home'>Home</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 2 }}
                    >
                        <Link smooth={true} to='#about'>About</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 2 }}
                    >
                        <Link smooth={true} to='#skill'>Skills</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 2 }}
                    >
                        <Link smooth={true} to='#projects'>Projects</Link>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 2 }}
                    >
                        <Link smooth={true} to='#contact'>Contact</Link>
                    </motion.div>
                </div>


                <motion.div className='hidden md:block cursor-pointer'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={()=>setDark(!dark)}
                >
                    {dark?<Sun />:<Moon/>}
                </motion.div>

                <div className='md:hidden cursor-pointer ' onClick={() => setIsOpen(true)}>
                    <Menu />
                </div>
            </motion.div>

            {/* डेस्कटॉपसाठी Navbar */}


            {/* मोबाईल मेनू */}

            <motion.div className='  md:hidden rounded-l-lg w-2/5  bg-white backdrop-blur-md bg-opacity-5 text-white dark:bg-neutral-900 dark:text-white drop-shadow-md h-full fixed right-0 top-0 z-20'
                initial="closed" // सुरुवातीला लपवलेले
                animate={isOpen ? "open" : "closed"} // उघडणे/बंद करणे
                variants={menuVariants} // अ‍ॅनिमेशनसाठी variants वापरतो
            >
                <motion.div>
                    <div >
                        <div className='fixed top-4 right-5 cursor-pointer ' onClick={() => setIsOpen(false)}>
                            <X />
                        </div>

                        <div className='fixed top-4 left-5 cursor-pointer' onClick={() => setDark(!dark)}>
                            {dark ? <Sun /> : <Moon />}
                        </div>



                        <div className=' space-y-7 flex flex-col items-center mt-16'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 2 }}
                            >
                                <Link smooth={true} to='#home'>Home</Link>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 2 }}
                            >
                                <Link smooth={true} to='#about'>About</Link>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 2 }}
                            >
                                <Link smooth={true} to='#skill'>Skills</Link>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 2 }}
                            >
                                <Link smooth={true} to='#projects'>Projects</Link>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 2 }}
                            >
                                <Link smooth={true} to='#contact'>Contact</Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </nav>
    );
}
