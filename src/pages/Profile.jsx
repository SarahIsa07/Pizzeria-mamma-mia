import React, { useContext, useEffect, useState } from 'react'
import '../components/Profile.css'
import { UserContext } from '../components/context/UserContext';

const profile = () => {

  const { user, loading, getProfile} = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className='container-profile-bar'>
      {user ? (
      <p>👤Usuario: {user.email}</p>
      ) : (
        <p>Please login to view your profile</p>
      )}
      <button>Cerrar sesión</button>
    </div>
  )
}

export default profile