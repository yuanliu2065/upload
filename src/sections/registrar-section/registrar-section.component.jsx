import React from 'react';

import './registrar-section.styles.scss';
import InputForm from '../../components/input-form/input-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';


class RegistrarSection extends React.Component {
    state = {
        name: '',
        email: '',
        birtdate: '',
        datas: []
    }

    handleChange = event => {
        const { name, value} = event.target;
        // const name = event.target.name
        // const value = event.target.value
        this.setState({ [name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ birthdate: '' })
    }

    getData = async () => {
        const { name, email, birthdate } = this.state;

        let dataObj = {
            name, 
            email,
            birthdate
        }

        this.props.passData(dataObj)
    }

    render() {
        const { name, email, birthdate, datas} = this.state;
        // console.log('email', email)
    
        return (
          <div className='registrar-section'>
                <form 
                   className='form-container'
                   onSubmit={this.handleSubmit}
                >
                    <div className='input-container'>
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
                    <CustomButton type='submit' onClick={() => this.getData()} isCenter>sign up</CustomButton>
                </form>
                {/* <div>{this.renderData()}</div> */}
          </div>
        )
    }
}

export default RegistrarSection;


let view;
const initailize = () => {
    view = '111';
    return () => {
        console.log('It has been initialized')
    }
    
}
initailize()
console.log(view)
