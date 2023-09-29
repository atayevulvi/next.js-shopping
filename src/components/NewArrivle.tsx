"use client"
import React, { useEffect, useState } from 'react'
import Data from "@/utils/productData"
import ProductCard, { IProduct } from './ProductCard'
const tabsData=["All","Skin Care","Lipsticks","Makeup","Nail & Wax"]
const NewArrivle=()=> {

const [selectedTab,setSelectedTab]=useState(0)
const handleTab=(index:number)=>{
  const category=tabsData[index].toLocaleLowerCase()
  setSelectedTab(index)
    setSelectedTab(index)

    if(category==="all"){
      setData(shuffleArray(Data).slice(0,16))
      return
    }
    const filterData=Data.filter((item)=>item.category.includes(category))
    setData(shuffleArray(filterData))
}
const [data,setData]=useState([])

const shuffleArray=(array:any)=>{
  return array
  .map((value:any)=>({value,sort:Math.random()}))
  .sort((a:any,b:any)=>a.sort-b.sort)
  .map(({value}:any)=>value)
}

useEffect(()=>{
  setData(shuffleArray(Data).slice(0,16))
},[])

  return (
    <div className='container pt-32'>
        <div className="text-center">
            <h3 className=' font-inherit text-blue-950'>For your beauty</h3>
            <h1 className='font-semibold text-3xl'>New Arrival</h1>
            <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl'>
{tabsData.map((text,index)=>(
    <li key={text} className={`${selectedTab===index && "text-red-500"} cursor-pointer hover:text-red-500`}
    onClick={()=>handleTab(index)}
    >
         {text}
    </li>
   
))}
            </ul>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
              {data.map((item:IProduct)=>(
               <ProductCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  sale={item.sale} category={[]}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default NewArrivle