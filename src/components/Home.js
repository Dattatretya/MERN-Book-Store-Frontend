import {useState, useEffect} from 'react'
import Spinner from './Spinner'
import axios from "axios"
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md";
import HomeTable from './home/HomeTable';
import HomeCard from './home/HomeCard';


const Home = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState("table")

  useEffect(()=>{
    setLoading(true);
    axios.get("http://localhost:3000/books")
    .then((response)=>{
      setBooks(response.data.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false)
    })
  },[])

  return (
    <div className='p-4'>
      <div className='flex justify-center'>
      <button className='bg-slate-400 p-2 m-2 rounded-md'
      onClick={()=>setView("table")}
      >Table</button>
      <button className='bg-slate-400 p-2 m-2 rounded-md' 
      onClick={()=>setView("card")}
      >Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-neutral-600'/>
        </Link>
      </div>
      {loading ? 
      (
        <Spinner/>
      ):(
       view==="table" ? (<HomeTable books={books}/>) : <HomeCard books={books}/>
      )}
    </div>
  )
}

export default Home