import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const ProgressBar = ({ percentage }) => {
    const progress = useMotionValue(0);
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        const animation = animate(progress, percentage, {
            duration: 1.5,
            ease: "easeInOut",
            onUpdate: (value) => setDisplayPercentage(Math.round(value)),
        });
        return animation.stop;
    }, [percentage, progress]);

    return (
        <div className="relative flex items-center justify-center w-32 h-32 rounded-full   bg-neutral-200">
            <div className="absolute inset-0 rounded-full border-8 border-neutral-200 "></div>

            <motion.div
                className="absolute inset-0 rounded-full border-8 border-yellow-400 dark:border-neutral-500 border-t-transparent"
                style={{ rotate: (displayPercentage / 100) * 360 }}
                initial={{ rotate: 0 }}
                whileInView={{ rotate: (percentage / 100) * 360 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex items-center justify-center w-24 h-24 bg-transparent  dark:bg-black rounded-full">
                <span className="text-xl font-semibold ">{displayPercentage}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;
