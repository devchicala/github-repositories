import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import ErrorModal from '../ErrorModal'

export const Search = () => {
  let navigate = useNavigate()
  const { addProfile, error, setError, user, setUser } = useContext(AuthContext);

  function handlerGettingUser() {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        addProfile(response);
        setError(false);
        navigate('/profile');
      })
      .catch(() => setError(true))
  }

  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="text-white">GITHUB PROFILE</h1>
      </div>

      <div className="d-flex justify-content-center">
        <input
          type="text"
          style={{ width: '500px' }}
          placeholder="Search a username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          type="text"
          style={{ width: '100px' }}
          onClick={handlerGettingUser}
        >
          Buscar
        </button>
      </div>

      {error ? <ErrorModal /> : ''}
    </div>
  )
}
