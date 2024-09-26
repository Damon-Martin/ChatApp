// Send the dimensions as a str as there are lots of ways to do size like 'px', '%' etc...
// color is a string
// Note: calling content children is important anything else will not work
import React, { useState, useEffect, useCallback } from 'react';
import TextInput from '../components-small/text-input';

function LoginCard({ width = '80%', height = '70%', color = 'grey' }) {
    const [cardWidth, setCardWidth] = useState(width);
    const [cardHeight, setCardHeight] = useState(height);

    // Memoize handleResize using useCallback
    const handleResize = useCallback(() => {
        const windowWidth = window.innerWidth;
        setCardWidth(width);
        setCardHeight(height);
        if (windowWidth < 1100) {
            setCardWidth('85%');
            setCardHeight('80%');
        }
    }, [width, height]);

    // useEffect to listen to window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        // Call handleResize immediately to set the initial size
        handleResize();
        
        // Cleanup event listener when component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]); // Use handleResize in the dependency array

    const wrapper = {
        backgroundColor: color,
        width: cardWidth,
        height: cardHeight,
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'width 0.3s ease, height 0.3s ease',
    };

    return (
        <form style={wrapper}>
            <h1>Login</h1>
            <TextInput placeholder={'Username'} required={true} />
            <TextInput placeholder={'Password'} type='password' required={true} />
        </form>
    );
}

export default LoginCard;
