import { useState, useEffect } from "react";

import api from "../../services/api";

import Episodio from "../Episodio";
import FilterBar from "../FilterBar";

const Principal = () => {
  const [allData, setData] = useState([]);

  useEffect(() => {
    api.get("codigopenal").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleFilterName = (nome: string) => {
    const filteredData = allData.filter((item: { nome: string }) => {
      const fullName = `${item.nome}`;
      console.log(item);
      if (fullName.toLowerCase().includes(nome.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFavoriteName = (email: string) => {
    const filteredData = allData.filter((item: { email: string }) => {
      if (item.email.toLowerCase().includes(email.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container-fluid principal">
      <div className="row">
        <div className="">
          <FilterBar
            onNameFilter={handleFilterName}
            onFavoriteFilter={handleFavoriteName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="row mt-4">
            {allData.map((item: { id: any }) => (
              <Episodio item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
