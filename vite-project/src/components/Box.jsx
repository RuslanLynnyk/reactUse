import { useEffect, useState } from 'react';
import './Box.css'

const Box = (props) => {

    const [user, setUser] = useState ({}) 
    const [index, setIndex] = useState(1)


    //useEffect(calback, dep )

    useEffect(() => {

        const getUser = async() => {
        try{ 
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${index}`)

            const data = await response.json();
            setUser(data);
        }catch(e){
          console.log(e)
        }

        }

        getUser();
    
    },[index])


  return (
    <div className='box'>
      <button onClick={()=> setIndex(index + 1) }>Increment</button>
        {user &&  <p key = {user.id}>{user.name}</p>}

    </div>
  )
}

export default Box