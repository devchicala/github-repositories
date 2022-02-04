
import { Link } from "react-router-dom";

const Character = ({ item }) => {
  return (
    <div className="col-sm-3 mb-4">
      <Link to={"/details/" + item.id} style={{ textDecoration: "none" }}>
        <div className="card p-1">
          <div className="col-12">
            <img src={item.image} alt="" className="w-100 img-fluid" />
          </div>
          <div className="mt-1 text-white back">
            <div className="card-body">
              <h5 className="card-title text-center">Nome: {item.name}</h5>
              <h5 className="card-title text-center">Espécie: {item.species}</h5>
              <p className="card-text text-center">Estado: {item.status}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Character;
