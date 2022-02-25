import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation CreatePerson($payload: CreatePersonPayload!) {
    createPerson(payload: $payload) {
      id
      name
      age
      bio
    }
  }
`;
