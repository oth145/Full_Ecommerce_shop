"use client"
import { useEffect,useState } from 'react'
import ComponentCategory from '@/components/ComponentCategory'
import axios from 'axios'
import Navbar from '../../components/Navbar'

function Page() {
  const [products,setproducts] = useState([])
 useEffect(() => {
  const getapi = async () => {
    try {
      const res = await axios.get('http://localhost:8800/products');
      setproducts(res.data)
          return console.log(res.data);
      } catch (error) {
          console.log('fetching  failed:', error)
      }
  }
  getapi()
 },[]) 
  return ( <>
  
  <ComponentCategory products={products}/>
  </>
  )
}

export default Page