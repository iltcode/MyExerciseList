import { useState } from "react"
import  useWorkoutsContext  from "../hooks/useWorkoutsContext"
import  useAuthContext  from '../hooks/useAuthContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
  
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      if (!user) {
        setError('You must be logged in')
        return
      }
  
      const workout = {title, load, reps}
  
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }
      if (response.ok) {
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        setEmptyFields([])
        dispatch({type: 'CREATE_WORKOUT', payload: json})
      }
    }
  
    return (
      // <form className="create" onSubmit={handleSubmit}>
      //   <h3>Add a New Workout</h3>
  
      //   <label>Excersize Title:</label>
      //   <input 
      //     type="text"
      //     onChange={(e) => setTitle(e.target.value)}
      //     value={title}
      //     className={emptyFields.includes('title') ? 'error' : ''}
      //   />
  
      //   <label>Load (in kg):</label>
      //   <input 
      //     type="number"
      //     onChange={(e) => setLoad(e.target.value)}
      //     value={load}
      //     className={emptyFields.includes('load') ? 'error' : ''}
      //   />
  
      //   <label>Reps:</label>
      //   <input 
      //     type="number"
      //     onChange={(e) => setReps(e.target.value)}
      //     value={reps}
      //     className={emptyFields.includes('reps') ? 'error' : ''}
      //   />
  
      //   <button>Add Workout</button>
      //   {error && <div className="error">{error}</div>}
      // </form>


      <div className="border-2 border-blue-600 max-lg:max-w-xl max-w-lg bg-gray-200 shadow-2xl rounded-lg mx-auto text-center py-2 mt-12 max-lg:rounded-xl">
      {/* <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Tailbox</h1> */}
      <div className="container py-0 max-w-lg mx-auto">
                <h3 className="mt-1 mb-4 text-blue-600">Add a New Workout</h3>
          <form method="" action="" onSubmit={handleSubmit} className="flex flex-col">
              <div className="m-1 mb-2 flex justify-start items-center gap-4">
              <label className="text-blue-600">Excersize Title:</label>
                  <input 
                  type="txt"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="shadow appearance-none  rounded  py-1 px-8 text-gray-700 leading-tight border border-blue-600 focus:outline-none focus:border-2 focus:border-blue-600 focus:shadow-outline"
                  id="title"
                  // className={emptyFields.includes('title') ? 'error' : ''}
                  />
              </div>
              <div className="m-1 mb-2 flex justify-start items-center gap-9">
              <label className="text-blue-600">Load (in kg):</label>
                  <input 
                  type="number"
                  onChange={(e) => setLoad(e.target.value)} 
                  value={load}
                  className="shadow appearance-none  rounded  py-1 px-8 text-gray-700 mb-3 leading-tight border border-blue-600 focus:outline-none focus:border-2 focus:border-blue-600 focus:shadow-outline"
                  id="load"
                  // className={emptyFields.includes('load') ? 'error' : ''}
                  />

              </div>
              <div className="m-1 mb-2 flex justify-start items-center gap-20">
              <label className="text-blue-600">Reps:</label>
                  <input 
                  type="number"
                  onChange={(e) => setReps(e.target.value)} 
                  value={reps}
                  className="shadow appearance-none  rounded  py-1 px-8 text-gray-700 mb-3 leading-tight border border-blue-600 focus:outline-none focus:border-2 focus:border-blue-600 focus:shadow-outline"
                  id="reps"
                  // className={emptyFields.includes('reps') ? 'error' : ''}
                  />

              </div>
              <div className="flex items-center justify-end m-1 mb-2">
                  <button
                      //  disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                      Add Workout
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
  
  export default WorkoutForm