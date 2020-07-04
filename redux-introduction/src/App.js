import React from 'react';
import './App.css';
import {Component} from 'react'

import {createStore} from 'redux';


class App extends Component {
  render () {
    //two parameter
    const reducer = (state={},action)=>{
      if(action.type ==='A'){
        return{
          A:'I am tajal'
        }
      }
      if(action.type ==='B'){
        
        return{
          ...state,
          B:'I am sopnil'
        }
      }
      return state
    }

    const store = createStore(reducer)//step-1

    store.subscribe(() =>{
      console.log(store.getState())
    })
    store.dispatch({type:"A"})
    store.dispatch({type:"B"})

      return (
        <div className="App">
          <h1>React Introduction
            
          </h1>

        </div>
          
      )
  }
}

export default App;


