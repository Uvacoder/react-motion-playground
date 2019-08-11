import React, { useRef, Fragment } from 'react';
import { motion } from 'framer-motion';

interface DragProps {
    color: string;
}

const Drag: React.FC<DragProps> = ({color}) => {
    const constraintRef = useRef(null)
    return (
        <Fragment>
            <motion.div 
             ref={constraintRef}
             style={{
                width: 200,
                height: 200,
                backgroundColor: color,
                borderRadius: 20,
                margin: '5vh auto 0'
             }}
            />
            <motion.div 
             style={{
                backgroundColor: '#fff',
                width: 100,
                height: 100,
                borderRadius: 20
             }}
             drag
             dragConstraints={constraintRef}
            />
        </Fragment>
    );
}

export default Drag;

