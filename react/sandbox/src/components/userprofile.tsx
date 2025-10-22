import { useState } from "react";

type userProps = {
    name: string,
    email: string,
}

function Profile(props: userProps) {

    const [status, setStatus] = useState(true);
    const handleStatusChange = (e: any) => {
        const target = e.target;
        setStatus(target.checked ? true : false);
    }
    
    return (
        <div className="usercard">
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
        <hr />
        <p><input type="checkbox" checked={status} onChange={handleStatusChange}/> {status ? "ready" : "busy"}</p>
    </div>
    )
}

export default Profile;