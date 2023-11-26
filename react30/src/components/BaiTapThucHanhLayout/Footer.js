import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='bg-dark'>
            <div className="container mx-auto px-lg-5">
                <p className="text-center p-5 text-white">
                    Copyright &copy; Your Website 2019
                </p>
            </div>
        </footer>
      </div>
    )
  }
}
