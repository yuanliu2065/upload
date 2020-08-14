import React from 'react';

import './table-section.styles.scss';

class TableSection extends React.Component {

    cancelUser = index => {
        const { data } = this.props;

        const auxData = [...data]
        const newUsers = auxData.filter((d, ind) => ind !== index)
        console.log('auxData', newUsers)

        this.props.getUsersAfterCancel(newUsers)
    }

    render() {
        const { data } = this.props;
        console.log('data', data)
        return (
            <div className='table-section'>
                {
                    data.length 
                    ?
                    data.map((d, index) => {
                        const { name, email, birthdate } = d
                        return (
                            <div className='info-container' key={email}>
                                <div className='user-container'>
                                    <span className='user'>{name}</span>
                                    <span className='user'>{email}</span>
                                    <span className='user'>{birthdate}</span>
                                </div>
                                <div className='motificar'>
                                    <button className='editar' onClick={() => this.props.editarUser(index)}>editar</button>
                                    <button onClick={() => this.cancelUser(index)} className='cancel'>cancel</button>
                                </div>
                                
                            </div>
                        )
                    })
                    : <div>Loading ...</div>
                }
            </div>
        )
    }
}

export default TableSection;