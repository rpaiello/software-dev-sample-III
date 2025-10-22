import React, {useEffect, useState} from 'react';

const FetchData = () => {
    interface User {
        id: number,
        name: string,
        email: string,
        address : {
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
                {users.map(user =>
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <b>{user.address.geo.lat}, {user.address.geo.lng}</b>
                        <hr />
                    </ul>
                )}
            </div>
        </>
    )
}

export default FetchData;