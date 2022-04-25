import React from 'react'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img from '../../assets/close.png'

import { Container, Overlay, RenderColumn, Picture } from './styles'

const Profile = () => {
  const { returnProfile, profile, addRepos, user} = React.useContext(AuthContext)

  function handlerGettingUserRepos() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        addRepos(response);
      })
      .catch(() => {})
  }

  return (
    <Overlay>
      <Container>
        <Picture src={profile.data?.avatar_url} width={120} />
        <h3 className="py-3 text-white">{profile.data?.name}</h3>
        <span className="py-3 text-white">{profile.data?.blog}</span>
        <h4 className="py-3 text-white">{profile.data?.bio}</h4>
        <RenderColumn className="d-flex justify-content-between">
          <div>
            <Link to={'/userResult'} onClick={ handlerGettingUserRepos } style={{ textDecoration: 'none' }}>
              <span className="text-white font-weight-bold">{profile.data?.public_repos}</span>
              <br />
              <strong>Repositórios</strong>
            </Link>
          </div>
          <div>
            <span className="text-white font-weight-bold">{profile.data?.followers}</span>
            <br />
            <strong>Seguidores</strong>
          </div>
          <div>
            <span className="text-white font-weight-bold">{profile.data?.following}</span>
            <br />
            <strong>Seguindo</strong>
          </div>
        </RenderColumn>
      </Container>
    </Overlay>
  )
}

export default Profile
