import { UserResult } from '../UserResult'

export const Search = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>GITHUB PROFILE</h1>
      </div>

      <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search a username" />
        <button type="text" style={{ width: '100px' }}>
          Buscar
        </button>
      </div>
      <br />
      <UserResult />
    </div>
  )
}
