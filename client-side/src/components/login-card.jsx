import React, { useState, useEffect, useCallback } from 'react';
import TextInput from '../components-small/text-input/text-input';
import LoginBtn from '../components-small/login-btn/login-btn';

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

        // Cleanup event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Styles
    const wrapperStyle = {
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
        padding: '20px', // Optional padding for inner spacing
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Align buttons to the right
        width: '100%', // Ensure the button container takes full width
        height: '10%', // Ensure the button container takes full width
        marginTop: '20px',
    };

    return (
        <form style={wrapperStyle}>
            <h1>Login</h1>
            <TextInput placeholder="Username" required={true} />
            <TextInput placeholder="Password" type="password" required={true} />
            
            {/* Button container aligned to the right */}
            <div style={buttonContainerStyle}>
                <LoginBtn />
                <LoginBtn />
            </div>
        </form>
    );
}

export default LoginCard;
