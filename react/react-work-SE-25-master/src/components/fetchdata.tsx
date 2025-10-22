import React, {useEffect, useState} from 'react';
import './fetchdata.css'

const FetchData = () => {
    interface User {
        id: number,
        name: string,
        email: string,
        address : {
            street : string,
            suite: string,
            city: string,
            zipcode: string,
            geo : {
                lat: string,
                lng: string,
            }
        }
    }
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data : User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error getting data', error)
            }
            setLoading(false); 
        }
        fetchData();
    }, [])


    return (
        <>
            <div>
                <h4>returned users:</h4>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Street Address</th>
                        <th>Geo</th>
                    </tr>
                    {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</td>
                        <td><code>{user.address.geo.lat}, {user.address.geo.lng}</code></td>
                    </tr>
                    )}
                </table> 
            </div>
        </>
    )
}

export default FetchData;