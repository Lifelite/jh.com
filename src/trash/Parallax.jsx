import PropTypes from 'prop-types';
import {useLayoutEffect, useRef, useState} from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

const Parallax = ( props ) => {
    const {
        children,
        offset
    } = props;

    const prefersReducedMotion = useReducedMotion();

    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef()

    const { scrollY } = useScroll();

    const initial = elementTop - clientHeight;

    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
    const y = useSpring(yRange, { stiffness: 400, damping: 90 })

    useLayoutEffect(() => {
        const element = ref.current
        const onResize = () => {
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
            setClientHeight(window.innerHeight)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [ref]);

    if (prefersReducedMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    )
};

Parallax.propTypes = {
    children: PropTypes.node,
    offset: PropTypes.number
};

Parallax.defaultProps = {
    offset: 50
}

export default Parallax;