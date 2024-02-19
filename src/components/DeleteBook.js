import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"
import Spinner from './Spinner'

const DeleteBook = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const param = useParams()

  const handleDeleteBook = ()=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/books/${param.id}`)
    .then(()=>{
      setLoading(false)
      navigate("/")
    })
    .catch((error)=>{
      setLoading(false)
      alert("Delete Unsuccessful")
      console.log(error)
    })
  }

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading?<Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-slate-500 rounded-xl m-auto p-8'>
      <h1 className='text-xl m-4 p-4'>Are you sure you want to delete the book?</h1>
      <button 
      className='bg-red-600 text-xl w-full rounded-lg'
      onClick={handleDeleteBook}
      >Delete Book</button>
      </div>
    </div>
  )
}

export default DeleteBook