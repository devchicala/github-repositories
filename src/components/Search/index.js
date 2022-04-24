
export const Search = () => {
  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="text-white">GITHUB PROFILE</h1>
      </div>

      <div className="d-flex justify-content-center">
        <input type="text" style={{ width: '500px' }} placeholder="Search a username" />
        <button type="text" style={{ width: '100px' }}>
          Buscar
        </button>
      </div>
    </div>
  )
}
