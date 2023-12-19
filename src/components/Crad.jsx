import React from 'react'

function Crad(props) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
                         <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""></img></a>
                        <div className="card-body">
                             <h4 className="card-title">
                            <a href="#">{props.cardData.title}</a>
                            </h4>
                            <p className="card-text">{props.cardData.description}</p>
                        </div>
                        </div> 
                    </div>
  )
}

export default Crad