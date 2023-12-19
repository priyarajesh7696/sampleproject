import React from 'react'
import Crad from './components/Card';

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
            return < Card cardData={e} key={i}> </Card>
             })      
        }
       
    </div>

  </div>
}

export default App