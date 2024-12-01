import React from 'react'
import ProgressBar from './ProgressBar'
import { Card } from './ui/card'

function SkillCard({ skillName, myProgress }) {
    return (
        <div>

            <div className='overflow-hidden'>
                <Card className='rounded-lg bg-white backdrop-blur-md bg-opacity-5'>
                    <div className=' dark:bg-neutral-950 dark:text-white flex flex-col justify-center items-center p-5 rounded-lg shadow-md space-y-2'>
                        <ProgressBar percentage={myProgress} />
                        <p className='text-xl font-semibold text-white'>{skillName}</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SkillCard