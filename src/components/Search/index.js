import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import ErrorModal from '../ErrorModal'
import { RiSearchEyeLine, RiGithubFill } from 'react-icons/ri'

import { InputGithub, SearchButton } from './styles'

export const Search = () => {
  const [loading, setLoading] = useState(null)
  let navigate = useNavigate()
  const { addProfile, error, setError, user, setUser } = useContext(AuthContext)

  function handlerGettingUser() {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        addProfile(response)
        setError(false)
        navigate('/profile')
      })
      .catch(() => setError(true))
  }

  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="text-white">
          GITHUB PROFILE <RiGithubFill size={50} />
        </h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <InputGithub
          type="text"
          style={{ width: '500px' }}
          placeholder="Search a username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <SearchButton onClick={handlerGettingUser}>
          <RiSearchEyeLine size={40} />
        </SearchButton>
      </div>

      {error ? (
        <ErrorModal />
      ) : ''}
      <div>
      </div>
    </div>
  )
}
