import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import Spinner from './Spinner'

const ShowBook = () => {

  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState([])
  const params = useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${params.id}`)
    .then((response)=>{
      setBook(response.data.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-4xl text-center text-slate-700'>Book Detail</h1>
      {loading ? 
      (<Spinner/>):
      (
      <div className='flex flex-row justify-between border border-gray-500 p-4 m-4 rounded-lg'>
        <div className='lex flex-col justify-center'> 
      <h1 className='m-4 text-blue-500'>Id: {book._id}</h1>
      <h1 className='m-4 text-blue-500'>Title: {book.title}</h1>
      <h1 className='m-4 text-blue-500'>Author: {book.author}</h1>
      <h1 className='m-4 text-blue-500'>Publish Year: {book.publishYear}</h1>
      <h1 className='m-4 text-blue-500'>Create Time: {new Date(book.createdAt).toString()}</h1>
      <h1 className='m-4 text-blue-500'>Last Updated At: {new Date(book.updatedAt).toString()}</h1>
      </div>
      <div>
        <img className='h-40 w-30' src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNjAzLWVsZW1lbnQtMTg2LnBuZw.png'/>
      </div>
      </div>
      )}
    </div>
  )
}

export default ShowBook