import React, { useEffect, useState } from 'react';
function Header() {

  const [data, setData] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => {
        console.log("Bir hata oluştu : ", error);
        setData([]); 
    });
  }
    useEffect(() => {
    fetchData();
  }, []);
  
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default Header;
