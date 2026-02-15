// Main.js

const { useState } = React;

function App(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '4px 2px',
        cursor: 'pointer',
        borderRadius: '8px',
    };

    return (
        <div>
            <h1>React 19 App</h1>
            <button style={buttonStyle} onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);