import img from "../../assets/rick-morty.jpg";
import { FaHeart, FaEye, FaInfo } from "react-icons/fa";

const Episodio = ({ item }: any) => {
  return (
    <div className="col-sm-3 mb-4">
      <div className="card p-1">
        <div className="col-12">
          <img src={img} alt="" className="w-100 img-fluid" />
        </div>
        <div className="mt-1 text-white back">
          <div className="card-body">
            <h5 className="card-title text-center">Leonel Francisco</h5>
            <span className="d-flex justify-content-between">
              <p className="card-text">Episódio #1</p>
              <p className="card-text">Nº do Elenco: 34</p>
            </span>
            <p className="card-text text-center">Estreia 10/03/2018</p>
            <span className="d-flex justify-content-between">
              <p className="card-text">Favorito <FaHeart/></p>
              <p className="card-text">Visto <FaEye/></p>
              <p className="card-text">Detalhes <FaInfo/></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodio;
