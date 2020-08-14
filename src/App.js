import React from 'react';

import './App.css';
import './sass/main.scss';
import { fetchDB, addUser, updateUser } from './fakeApi'
import RegistrarSection from './sections/registrar-section/registrar-section.component';
import TableSection from './sections/table-section/table-section.component';
import Popup from './components/popup/popup.component';
// import { render } from 'node-sass';

class App extends React.Component {
  
  state = {
    dataApp: [],
    hasPopuped: false
  }
  componentDidMount() {
    this.component()
  }
  async component() {
    // this.setState({ dataApp: 'Loading...'})
    // Manera 1
    const response = await fetchDB()
    this.setState({ dataApp: response })
    // Manera 2
    // fetchDB()
    //   .then(response => console.log(response))
  }

  getInputValue = async value => {
   
    console.log('value', value)
    await addUser(value)
    const response = await fetchDB()
    this.setState({ dataApp: response})
    // return this.state.dataApp
  }

  getUsersAfterCancel = users => {
    this.setState({ dataApp: users})
  }

  editarUser =  (index) => {
    this.setState(state => ({ hasPopuped: !state.hasPopuped}))
    // await updateUser(index)
    // const response = await fetchDB()
    // this.setState({ dataApp: response})
    
    console.log('index', index)
  }

  closePopup = () => {
    this.setState(state => ({ hasPopuped: !state.hasPopuped}))
  }

  getNewEditedUser = editedUser => {
     console.log('newwwwwww',editedUser)
  }

  render() {
    const { dataApp, hasPopuped } = this.state
    console.log('hasPopuped', hasPopuped)
    return (
      <div>
        <RegistrarSection dataApp={ dataApp } passData={ this.getInputValue} />
        <TableSection data={dataApp} getUsersAfterCancel={this.getUsersAfterCancel} editarUser={this.editarUser}/>
        <Popup hasPopuped={hasPopuped} closePopup={this.closePopup} getNewEditedUser={this.getNewEditedUser} />
      </div>
    );
  }
  
}

export default App;
