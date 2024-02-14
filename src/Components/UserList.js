import React, {useState,useEffect} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setListOfUsers(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>List of Users</h1>
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>
              <Card border="primary" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
    </Card.Text>
  </Card.Body>
</Card>
          </li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default UserList;

  
