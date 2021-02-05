import './App.css';
import React from 'react'
import Person from './Components/Person'
class App extends React.Component{
  state={
    person:[{nam:'dinesh',place:'sathy'},
    {nam:'ganesh',place:'chennai'},
    {nam:'kalai',place:'erode'}]
  }
  switchHandler=()=>{
    alert(JSON.stringify(this.state))
    this.setState({
      person:[
        {nam:'dheena',place:'sathy'},
        {nam:'dilip',place:'chennai'},
        {nam:'kuna',place:'erode'}
      ]
      
    })
  }
  render(){
  return (
    <div className="App">
     <h1>hi welcome ,this is my first app going to develop</h1>
     <button onClick={this.switchHandler}>Change or visit state</button>
     <Person names={this.state.person[0].nam} place={this.state.person[0].place}/>
     <Person names={this.state.person[1].nam} place={this.state.person[1].place}>my hobby:creating websites</Person>
     <Person names={this.state.person[2].nam} place={this.state.person[2].place}/>
    </div>
    //React.createElement('div',{className:App},React.createElement('h1',null,'this is how our normal html gets compiled'));
);
  }
}

export default App;
