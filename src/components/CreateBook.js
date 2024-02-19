import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import Spinner from './Spinner'

const CreateBook = () => {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [publishYear, setPublishYear]= useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const handleSaveBook = () =>{
    const data={
      title,
      author,
      publishYear,
    }

    axios.post("http://localhost:3000/books", data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  }
 
  return (
    <div className='p-4'>
      <h1 className='text-4xl'>Create Book</h1>
      {loading? <Spinner/>:''}
      <div className='flrx flex-col border-2 border-slate-500 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4'>Title</label>
          <input 
          type='text'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='border-2 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Author</label>
          <input 
          type='text'
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className='border-2 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Publish Year</label>
          <input 
          type='text'
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
          className='border-2 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-slate-500 rounded-lg w-full' onClick={handleSaveBook}>Save</button>
      </div>

    </div>
  )
}

export default CreateBook