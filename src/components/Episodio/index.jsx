import React from "react";
import { AuthContext } from "../../context/auth";
import img from "../../assets/rick-morty.jpg";
import { FaHeart, FaEye, FaInfo } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Episodio = ({ item }) => {
  const { user, favorite, addFavorite, printFavorites, isFavorite, addView, isView } =
    React.useContext(AuthContext);

    console.log(favorite);
  return (
    <div className="col-sm-4 col-md-3 mb-4">
      <div className="card p-1">
        <div className="col-12">
          <img src={img} alt="" className="w-100 img-fluid" />
        </div>
        <div className="mt-1 text-white back">
          <div className="card-body">
            <h5 className="card-title text-center">{item.name}</h5>
            <span className="d-flex justify-content-between">
              <p className="card-text">Episódio #{item.id}</p>
              <p className="card-text">
                Nº do Elenco: {item.characters.length ?? "-"}
              </p>
            </span>
            <p className="card-text text-center">{item.air_date}</p>
            <div className="d-flex justify-content-between">
              <span className="card-text">
                <button
                  tyspane="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    addFavorite(item);
                  }}
                >
                  Favorito {" "} {isFavorite(item) < 0 ?  <FaHeart /> : <FaHeart color="red" />}
                </button>
              </span>
              <span className="card-text">
                <Link
                  to={"/details/" + item.id}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    addView(item);
                  }}
                >
                  <button type="button" class="btn btn-outline-dark">
                    Ver detalhes <FaInfo size={20} />
                  </button>
                </Link>
              </span>
            </div>
            <span className="text-center">
              <p className="card-text">
                Visto {" "} {isView(item) < 0 ?  <BsFillEyeSlashFill size={25} /> : <BsFillEyeFill size={25}  color="red"/> } 
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodio;
