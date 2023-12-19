import React from 'react'

function App() {
  let data =[{
    title:"Project One",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  },
  {
    title:"Project Two",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  },
  {
    title:"Project Three",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  },
  {
    title:"Project Four",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  },
  {
    title:"Project Five",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  },
  {
    title:"Project Six",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus maiores officiis, iusto ipsum mollitia dolores sed a. Rerum nesciunt minus enim eum aliquam nobis quia voluptatibus porro molestiae labore?"
  }];
  return <div className="container">
    <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
    </h1>

    <div className="row">
        {
          data.map((e,i)=>
          {
            return <div className="col-lg-6 mb-4" key={i}>
                         <div className="card h-100">
                            <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""></img></a>
                        <div className="card-body">
                             <h4 className="card-title">
                            <a href="#">{e.title}</a>
                            </h4>
                            <p className="card-text">{e.description}</p>
                        </div>
                        </div> 
                    </div>
             })      
        }
       
    </div>

  </div>
}

export default App