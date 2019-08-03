import React from "react";
import {motion} from "framer-motion";

interface SpinnerProp {
    color: string;
    width: number;
    height: number
}

const Spinner: React.FC<SpinnerProp> = ({color, width, height}) => {
    return (
        <motion.div
            initial={{}}
            animate={{
                rotate: [0, 0, 180, 0, 0],
                scale: [0.5, 1, 0.5, 1, 0.5],
                borderRadius: ["10%", "20%", "10%", "20%", "10%"]
            }}
            transition={{duration: 2}}
            style={{
                backgroundColor: color,
                width,
                height,
                borderRadius: 30,
                margin: '40vh auto'
            }}
        />
    )
};

export default Spinner
