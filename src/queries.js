import { gql } from "@apollo/client";

export const ALL_PEOPLE = gql`
  query AllPeople {
    allPeople {
      id
      name
      age
      bio
    }
  }
`;
