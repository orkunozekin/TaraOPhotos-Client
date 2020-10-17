import React, { useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';

const H2 = () => {
    const [items, set] = useState(['T', 'A', 'R', 'A', ' ', 'O', ' ', 'P', 'H', 'O', 'T', 'O', 'S'])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        })
        return transitions.map(({ item, props, key }) =>
        <animated.div key={key} style={props}>{item.text}</animated.div>
        )

}

export default H2;