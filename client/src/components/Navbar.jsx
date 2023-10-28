import { Link } from 'react-router-dom'
import  useLogout  from '../hooks/useLogout'
import  useAuthContext  from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }
  
    return (
      <header className='bg-gray-200 padding-x py-8 z-20 w-full'>
          <nav className='flex justify-between items-center text-lg max-container'>
          <Link to="/">
            <h1 className='text-blue-800 font-medium text-xl sm:text-3xl'>My Exercise List</h1>
          </Link>
            {user && (
              <div className='flex justify-center items-center gap-2 text-blue-800'>
                <span>{user.email}</span>
                <button onClick={handleClick} className='border-2 border-blue-600 rounded-md p-1'>Log out</button>
              </div>
            )}
            {!user && (
              <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 text-blue-800'>
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </nav>
        
      </header>
    )
  }
  
  export default Navbar