import React from 'react'
import Image from 'next/image'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineStar,AiFillStar} from 'react-icons/ai'
export interface IProduct{
    id:number;
    img:string;
    name:string;
    price:number;
    category:string[];
    sale:boolean | undefined
}


const ProductCard=({id,img,name,price,sale}:IProduct) =>{


    const getRating=()=>{
        const randomNumber=(min:number,max:number)=>{
          return Math.ceil(Math.random()*(max-min)+min)
        }
      
      
      switch (randomNumber(0,5)) {
        case 0:
          return(
            <div className='flex justify-center text-red-500 pt-4 pb-2 '>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>
          )
          case 1:
          return(
            <div className='flex justify-center text-red-500 pt-4 pb-2'>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>
          )
          case 2:
            return(
              <div className='flex justify-center text-red-500 pt-4 pb-2'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                  <AiOutlineStar/>
                  <AiOutlineStar/>
              </div>
            )
            case 3:
                return(
                  <div className='flex justify-center text-red-500 pt-4 pb-2'>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiOutlineStar/>
                      <AiOutlineStar/>
                  </div>
                )
                case 4:
                    return(
                      <div className='flex justify-center text-red-500 pt-4 pb-2'>
                          <AiFillStar/>
                          <AiFillStar/>
                          <AiOutlineStar/>
                          <AiOutlineStar/>
                          <AiOutlineStar/>
                      </div>
                    )
                    case 5:
                        return(
                          <div className='flex justify-center text-red-500 pt-4 pb-2'>
                              <AiFillStar/>
                              <AiFillStar/>
                              <AiFillStar/>
                              <AiOutlineStar/>
                              <AiOutlineStar/>
                          </div>
                        )
      
        default:
          return <div></div>;
      }
      }
  
  return (
    <div className='group cursor-pointer hover:scale-[1.1] border-2 items-center p-2 flex flex-col'>
<div className="relative">
    <Image
    className='w-full max-w-[300px] max-h-[250px] sm:text-center'
    width={1000}
    height={1000}
    src={img}
    alt={name}
    />
    {sale && (
    <div className='bg-red-500 inline-block text-white absolute top-0 left-0 text-[14px] rounded-md px-2 py-[2px] m-4'>
    SALE
    </div>
    )}

    <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500  group-hover:opacity-100 cursor-pointer">
        <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                <AiOutlineHeart/>
            </div>
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
            >
                <AiOutlineShoppingCart/>
            </div>
        </div>
    </div>
</div>
{getRating()}
<h2 className='font-medium pb-3 hover:text-red-500'>{name}</h2>
<p className='text-gray-600 font-light'>${price}.00</p>
    </div>
  )
}

export default ProductCard