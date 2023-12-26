import React from 'react'

const url = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: string;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch(url, {cache: "no-store"});
  const users: User[] = await res.json();

  return (
  
    <section>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <br />

     {/* 
     To see the time change in real time, you need to
     - set the cache-control header to "no-store" in the fetch request.    
     - build the app with "npm run build"
     - start the app with "npm start" 
     */} 
      <p>{new Date().toLocaleTimeString()}</p>
      
    
    </section>
  )
}

export default UsersPage