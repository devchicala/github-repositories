import React from 'react'
import { AuthContext } from '../../context/auth';

const Profile = () => {
    const { returnProfile } =
    React.useContext(AuthContext);

    returnProfile();

  return (
    <div>Profile</div>
  )
}

export default Profile