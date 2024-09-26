// Send the dimensions as a str as there are lots of ways to do size like 'px', '%' etc...
// color is a string
// Note: calling content children is important anything else will not work

function RoundagleCard({ children, width = '60%', height = '70%', color = 'grey' }) {
    const wrapper = {
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',            // Flexbox to manage content layout
        flexDirection: 'column',    // Vertical content flow
        justifyContent: 'center',   // Vertically center the children
        alignItems: 'center',       // Horizontally center the children
    };

    return (
        <div style={wrapper}>
            {children}
        </div>
    );
}

export default RoundagleCard;

