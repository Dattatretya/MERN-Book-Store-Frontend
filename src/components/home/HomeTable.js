
import { Link } from 'react-router-dom'
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const HomeTable = ({books}) => {
  return (
    <table className='w-full border border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-500 rounded-md'>No.</th>
              <th className='border border-slate-500 rounded-md'>Title</th>
              <th className='border border-slate-500 rounded-md'>Author</th>
              <th className='border border-slate-500 rounded-md '>Publish Year</th>
              <th className='border border-slate-500 rounded-md'>Operations</th>

            </tr>
          </thead>
          <tbody>
            {books.map((book, index)=>(
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{index+1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>{book.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>{book.author}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>{book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default HomeTable



