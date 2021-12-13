import React from "react";

function NavButton(props) {
    return (
        <a>
            <img src={props.src} alt={props.alt}></img>
            <span>{props.text}</span>
        </a>
    );
}

export default NavButton;
