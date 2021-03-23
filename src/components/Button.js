import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const STYLE = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn-large'];

const Button = ({
    children,
    onClick,
    type,
    setStyle,
    setSize
}) => {
    const checkSetStyle = STYLE.includes(setStyle) ? setStyle : STYLE[0];
    const checkSetSize = SIZE.includes(setSize) ? setSize : SIZE[0];

    return (
      <Link to="/sign-up" className="btn-mobile">
        <button
          className={`btn ${checkSetStyle} ${checkSetSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
}

export default Button;
