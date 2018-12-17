import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'

const App = () => {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              Gerenciador de Produtos
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/'>
                    Home <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/produtos'>
                    Produtos
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/sobre'>
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/produtos' component={Produtos} />
          <Route exact path='/sobre' component={Sobre} />
        </div>
      </div>
    </Router>
  )
}

export default App
