import React from 'react';

const HeaderComponent = () => {
    const myNickname = "zz";
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="http://localhost:3000" className="navbar-brand">Jsp & ReactBoard </a></div>
                <div>{myNickname}</div>
            </nav> 
        </div>
    );
};

export default HeaderComponent;