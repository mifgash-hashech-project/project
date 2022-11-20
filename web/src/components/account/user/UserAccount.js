import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext';

export default function UserAccount() {
    const { userData } = useContext(UserContext);
    return (
        <div>
            <h1>{userData.activeUser}, Welcome Back!</h1>



        </div>
    )
}
