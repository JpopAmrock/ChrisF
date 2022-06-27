import React from 'react'
//import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/PolarisLogo2.png'
//import github from '../../assets/github.svg'
import bground from '../../assets/gradient.png'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header' style={{backgroundImage: 'url(' + bground + ')'}}>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Polaris Todo List </h1>
              <p className='app-intro'>
                The Super Duper Polaris todolist, these are definetly getting done...
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default AppHeader
