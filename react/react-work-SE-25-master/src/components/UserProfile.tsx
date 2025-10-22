import 'bootstrap/dist/css/bootstrap.min.css';
import { Mail, User } from 'lucide-react';

const UserProfile = ({id, name , title, email, status, onToggle}) => {

    const isActive = status === 'active';
    const statusClass = isActive ? 'text-success' : 'text-danger';
    return(
        <>
            <div className='card shadow-sm border-1 h-100' >
                <div className='card-body'>
                    <div className='d-flex flex-column align-items-center justify-content-center mb-3'>
                        <h2 className='card-title '>
                            <User className='me-2 text-primary' size={24} />
                            {name}
                        </h2>
                        <span className={`badge rounded-pill ${statusClass}`}>
                            {status}
                        </span>
                    </div>
                    <p className='card-subtitle text-primary mb-3'>{title}</p>
                   
                </div>
                 <div className='text-muted mb-3'>
                    <Mail className='me-2' size={20} />
                    <p className='align-items-center'>{email}</p>
                </div>

                <div className='card-footer pt-0 pb-3'>
                    <div className='form-check form-switch justify-content-center align-items-center'>
                        <label className='form-check-label' htmlFor={`toggle-switch-${id}`}>
                            {isActive ? 'Activate User' : 'Deactivated User'} 
                        </label>
                        <input 
                            className='form-check-input'
                           type='checkbox'
                           role='switch'
                           id={`toggle-switch-${id}`}
                           checked = {isActive}
                           onChange={() => onToggle(id)}
                           />
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserProfile;