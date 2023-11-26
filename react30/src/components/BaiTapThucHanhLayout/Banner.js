import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <session className="banner">
            <div className="container mx-auto px-lg-5">
                <div className="text-start px-3 py-4 my-5 bg-light">
                    <h1 className='mt-5'>A Warm Welcome !</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit officia cumque asperiores, corrupti quisquam ad earum doloremque fugiat veniam repudiandae ipsum quas dolores, eius dolor dolorem repellat quod perferendis?</p>
                    <button className="btn bg-primary text-white px-3 mb-5">Call to action!</button>
                </div>
                
            </div>
        </session>
      </div>
    )
  }
}
