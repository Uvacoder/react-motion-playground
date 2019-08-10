import React from 'react';
import { motion } from 'framer-motion'

interface GestureProps {
    variants: any;
    color: string;
    children: string;
}

const Gestures: React.FC<GestureProps> = ({variants, color, children}) => {
    return (
        <motion.button 
         whileTap="tap"
         whileHover="hover"
         variants={variants} 
         style={{
             backgroundColor: color,
             borderRadius: 5,
             display: 'block',
             margin: '5vh auto 0',
             border: 'none',
             width: 100,
             height: 50,
             outline: 'none',
             color: '#fff'
         }}
        >
            {children}
        </motion.button>
    )
}

export default Gestures
