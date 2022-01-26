import { useState } from "react";

const FilterBar = ({ onNameFilter, onFavoriteFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    favourite: "",
  });

  const handleInput =
    (field) => (event) => {
      const { value } = event.target;

      setFilters({
        ...filters,
        [field]: value,
      });

      switch (field) {
        case "name":
          onNameFilter(value);
          break;
        case "email":
          onFavoriteFilter(value);
          break;
        default:
          break;
      }
    };

  return (
    <div className="my-4 d-flex justify-content-between">
      <div className="col-md-10 my-2">
        <input
          type="text"
          className="input"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
          placeholder={"Nome do Episódio"}
        />
      </div>

      <div className="col-md-2 my-2 d-flex align-items-center">
        <label className="mx-5 text-white">Favoritos</label>
        <input
          type="checkbox"
          className="check"
          id="email"
          onChange={handleInput("email")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
