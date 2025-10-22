import { useState } from 'react';
import '../App.css'
import UserProfile from './UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardProfiler()
{
  const profileData =[
    {
      id: 1,
      name: 'Masood',
      email: 'masood@gmail.com',
      title: 'Software Developer',
      status: 'active'   
    },
    {
      id: 2,
      name: 'Jake',
      email: 'Jake@gmail.com',
      title: 'Software Developer',
      status: 'inactive'   
    },
    {
      id: 3,
      name: 'Jesse',
      email: 'Jesse@gmail.com',
      title: 'Software Developer',
      status: 'inactive'   
    },
    {
      id: 4,
      name: 'Luis',
      email: 'Luis@gmail.com',
      title: 'Software Developer',
      status: 'active'   
    },
    {
      id: 5,
      name: 'Robert',
      email: 'Robert@gmail.com',
      title: 'Software Developer',
      status: 'active'   
    },

  ];

  const [users , setUsers] = useState(profileData);

  const handleStatusChange = (id : number) => {
     setUsers(previousUsers => 
      previousUsers.map(user => {
        if(user.id === id)
        {
           const newStatus = user.status === 'active' ? 'inactive' : 'active';
           return { ...user, status:newStatus };
        }
        return user;
      })
     );
  }

  return (
    <>
      <div className='container'>
       
       { <div className='row g-4 my-4 justify-content-center'>
        <h1 className='text-center mb-4'>User Profiles</h1>
         {
            users.map(user => (
               <div className='col-12 col-md-6'>
                  <UserProfile 
                    id = {user.id}
                    name= {user.name}
                    email= {user.email}
                    title= {user.title}
                    status= {user.status}
                    onToggle={handleStatusChange}
                  />
               </div>
            ))
         }
        
       </div> }
        
      </div>
     
     
    </>
  )
}

export default CardProfiler;