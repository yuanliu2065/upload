import React from 'react';

import './input-form.styles.scss';

const InputForm = ({ label, onChange, ...otherProps }) => (
    <div className='input-form-container'>
        <label className='input-label'>{label}</label>
        <input className='input-form' onChange={onChange} {...otherProps}/>
    </div>
)

export default InputForm;