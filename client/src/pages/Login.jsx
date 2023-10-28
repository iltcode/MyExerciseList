import { useState } from "react"
import useLogin  from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await login(email, password)
    }
  
    return (
      // <div></div>
      // <form className="bg-red w-full flex xl:flex-row flex-col justify-center min-h-screen gap-1 max-container" onSubmit={handleSubmit}>
      //   <h3>Log In</h3>
        
      //   <label>Email address:</label>
      //   <input 
      //     type="email" 
      //     onChange={(e) => setEmail(e.target.value)} 
      //     value={email} 
      //     className='input'
      //   />
      //   <label>Password:</label>
      //   <input 
      //     type="password" 
      //     onChange={(e) => setPassword(e.target.value)} 
      //     value={password} 
      //     className='input'
      //   />
  
      //   <button disabled={isLoading}>Log in</button>
      //   {error && <div className="error">{error}</div>}
      // </form>


      <div className="border-2 border-blue-600 max-lg:max-w-xs max-w-lg bg-gray-200 shadow-2xl rounded-lg mx-auto text-center py-12 mt-36 max-lg:rounded-xl">
        {/* <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Tailbox</h1> */}
        <div className="container py-5 max-w-md mx-auto">
            <form method="" action="" className="" onSubmit={handleSubmit}>
                <div className="m-4 mb-8">
                    <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"
                    value={email}
                    className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight border border-blue-600 focus:outline-none focus:border-2 focus:border-blue-600 focus:shadow-outline"
                    id="username"/>
                </div>
                <div className="m-4 mb-8">

                    <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    placeholder="Password"
                    className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight border border-blue-600 focus:outline-none focus:border-2 focus:border-blue-600 focus:shadow-outline"
                    id="password"/>

                </div>
                <div className="flex items-center justify-start m-4">
                    <button
                         disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                        Login
                    </button>
                    {/* <a className="inline-block align-baseline font-bold text-sm text-gray-400 " href="#">
                        Forgot Password?
                    </a> */}
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    </div>
    )
  }
  
  export default Login