import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isCenter, ...otherProps }) => (
    <div className={`custom-button-container ${isCenter ? 'center' : null}`}>
        <button className='custom-button' {...otherProps}>{children}</button>
    </div>
)

export default CustomButton;