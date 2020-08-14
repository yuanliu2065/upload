import React from 'react';

import './popup.styles.scss';
import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

class Popup extends React.Component {
    state = {
        name: '',
        email: '',
        birthdate: ''
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    saveNewEditedUser = () => {
        const { name, email, birthdate } = this.state;

        const newObj = {
            name,
            email,
            birthdate
        }

        this.props.getNewEditedUser(newObj)

    }


    render() {
        const { name, email, birthdate } = this.state;
        const { hasPopuped } = this.props;
        return (
            <div className={`popup-container ${ hasPopuped === true ? 'has-popuped' : null }`}>
                <div className='popup-title '>Are you going to edit the following info?</div>
                <form className='popup-form' onSubmit={this.handleSubmit}>
                    <div className='popup-inputs'>
                        <InputForm 
                        name='name'
                        type='text'
                        label='Name'
                        value={name}
                        onChange={this.handleChange}
                        required
                        />
                        <InputForm 
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                        />
                        <InputForm 
                        name='birthdate'
                        type='date'
                        label='BirthDate'
                        value={birthdate}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <CustomButton isCenter onClick={() => this.saveNewEditedUser()}>Save</CustomButton>
                </form>
                <div className='popup-colse-container' onClick={() => this.props.closePopup()}>X</div>
            </div>
        )
        
    }
} 
export default Popup;