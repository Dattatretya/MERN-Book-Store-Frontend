
import { Link } from 'react-router-dom'
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const HomeCard = ({books}) => {
  return (
    <div className='flex flex-row'>
        {books.map((book, index)=>(
            <div className='border border-slate-600 bg-orange-100 p-4 mx-5 rounded-md w-60'>
            <h1 className='mb-2 font-bold'>{index+1}</h1>
            <h1 className='my-2'>Title: {book.title}</h1>
            <h1 className='my-2'>Author: {book.author}</h1>
            <h1 className='my-2'>Publish Year: {book.publishYear}</h1>
            <div className='flex gap-x-4 mt-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle/>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit/>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete/>
                    </Link>
                  </div>
            </div>
        ))}
    </div>
  )
}

export default HomeCard