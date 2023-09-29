import React from 'react'
import FeatureCard from './FeatureCard'

const data=[
    {
        img:'/icon1.png',
        title:'Naturally derived',
        desc:'Natural and organic beauty product'
    },
    {
        img:'/icon2.png',
        title:'Free Shipping',
        desc:'Free Shipping on all order over $99'
    },
    {
        img:'/icon3.png',
        title:'Secure Payment',
        desc:'Fully protecetd when paying online'
    },
]

function Feature() {
  return (
    <div className='container pt-16'>
   <div className="grid md:grid-cols-2 gap-y-8 lg:grid-cols-3 gap-4">
    {data.map(item=>( 
        <FeatureCard
             key={item.title}
              img={item.img}
               title={item.title} 
               desc={item.desc}/>))}
   </div>
    </div>
  )
}

export default Feature