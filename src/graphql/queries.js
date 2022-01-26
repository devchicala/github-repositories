import { gql } from "@apollo/client";

const SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`;

const FILTERED_SONGS = gql`
  query songs($filter: String) {
    songs(filter: $filter) {
      id
      title
    }
  }
`;

const FILTERED_EPISODES = gql`
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

const FILTERED_EPISODE = gql`
  query {
    episodes(id: $filter) {
        id
        name
        air_date
    }
  }
`;

export { FILTERED_SONGS, SONGS, FILTERED_EPISODES, FILTERED_EPISODE };
