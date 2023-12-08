import React, { Component } from 'react'

export default class ClassCompo extends Component {
   render() {
      return (
         <div className='box box2'>
            <h1>This is created using class component</h1>
            <p>This is done using external CSS</p>
            <p style={{color: 'blue'}}>This is done using inline CSS</p>
         </div>
      )
   }
}
