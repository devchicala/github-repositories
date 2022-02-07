import { gql } from "@apollo/client";

const FILTERED_EPISODES = gql`
  query ($filter: String) {
    episodes(filter: { name: $filter }) {
      results {
        id
        name
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`;

const FILTERED_EPISODE = gql`
  query ($filter: ID!) {
    episode(id: $filter) {
      id
      name
      air_date
      characters {
        id
        image
        name
        species
        status
      }
    }
  }
`;

export { FILTERED_EPISODES, FILTERED_EPISODE };
