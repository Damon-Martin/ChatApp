// Send the dimensions as a str as there are lots of ways to do size like 'px', '%' etc...
// color is a string
// Note: calling content children is important anything else will not work
import React, { useState, useEffect } from 'react';

function LoginCard({ width = '80%', height = '70%', color = 'grey' }) {
    const [cardWidth, setCardWidth] = useState(width);
    const [cardHeight, setCardHeight] = useState(height);

    // Function to handle window resize
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        setCardWidth(width);
        setCardHeight(height);
        if (windowWidth < 1100) {
            setCardWidth('85%');
            setCardHeight('80%');
        }
    };

    // useEffect to listen to window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        // Call handleResize immediately to set the initial size
        handleResize();
        
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [width, height]); // Dependencies to re-run when width/height props change

    const wrapper = {
        backgroundColor: color,     // Dynamic background color
        width: cardWidth,           // Dynamic width based on window size
        height: cardHeight,         // Dynamic height based on window size
        borderRadius: '15px',       // Rounded corners
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        display: 'flex',            // Flexbox to manage content layout
        flexDirection: 'column',    // Vertical content flow
        justifyContent: 'center',   // Vertically center the children
        alignItems: 'center',       // Horizontally center the children
        transition: 'width 0.3s ease, height 0.3s ease', // Smooth transition on resize
    };

    return (
        <div style={wrapper}>
        </div>
    );
}

export default LoginCard;


