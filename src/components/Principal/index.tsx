import { useState, useEffect } from "react";

import Episodio from "../Episodio";
import FilterBar from "../FilterBar";
import api from "../../services/api";

import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
      }
    }
  }
`;

const Principal = () => {
  const [allData, setData] = useState([]);

  useEffect(() => {
    api.get("codigopenal").then((response) => {
      setData(response.data);
    });
  }, []);

  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }


  console.log("Dados");
  console.log(data.episodes.results);

  const handleFilterName = (nome: string) => {
    const filteredData = data.episodes.results.filter((item: { nome: string }) => {
      const fullName = `${item.nome}`;
      console.log(item);
      if (fullName.toLowerCase().includes(nome.toLowerCase())) {
        return item;
      }
    });

    //setData(filteredData);
  };

  const handleFavoriteName = (email: string) => {
    const filteredData = data.episodes.results.filter((item: { email: string }) => {
      if (item.email.toLowerCase().includes(email.toLowerCase())) {
        return item;
      }
    });

    //setData(filteredData);
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
            {data.episodes.results.map((item: any) => (
              <Episodio item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
