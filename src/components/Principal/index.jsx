import { useState, useEffect } from "react";

import { useDeleteSongItem } from "../../hooks";
import { FILTERED_EPISODES } from "../../graphql/queries";

import { useQuery } from "@apollo/client";
import Episodio from "../Episodio";

const Principal = () => {
  const [filter, setFilter] = useState("");

  const { data, loading, error } = useQuery(FILTERED_EPISODES, {
    variables: { filter: filter },
  });
  const { deleteSong } = useDeleteSongItem(filter);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log(data);

  return (
    <div className="container-fluid principal p-5">
      <div className="row">
        <div className="col-sm-12">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="row mt-4">
            {!data || loading ? (
              <div>loading...</div>
            ) : (
              data.episodes.results.map((item) => <Episodio item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
