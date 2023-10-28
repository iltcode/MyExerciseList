import  useWorkoutsContext  from '../hooks/useWorkoutsContext'
import  useAuthContext  from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
  
    const handleClick = async () => {
      if (!user) {
        return
      }
  
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
  
      if (response.ok) {
        dispatch({type: 'DELETE_WORKOUT', payload: json})
      }
    }
  
    return (
      <div className="border-2 rounded-lg border-blue-600 max-w-2xl m-8 mx-auto py-1 px-2">
        <div className='flex justify-between'>
          <div>
            <h4 className='mt-1 mb-3 text-blue-600 capitalize'><strong>{workout.title}</strong></h4>
            <p className='flex gap-4 mb-1 text-blue-600'>Load (kg):<span className='text-gray-600'>{workout.load}</span></p>
            <p className='flex gap-12 mb-1 text-blue-600'>Reps:<span className='text-gray-600'>{workout.reps}</span></p>
            <p className='text-blue-600'>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          </div>
          <div className='mt-20'>
              <span className="material-symbols-outlined bg-blue-600 text-white px-1 py-1 rounded-sm font-bold" onClick={handleClick}>delete</span>
          </div>

        </div>
      </div>
    )
  }
  
  export default WorkoutDetails