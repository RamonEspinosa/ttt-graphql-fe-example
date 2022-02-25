import { useQuery } from "@apollo/client";
import { ALL_PEOPLE } from "../queries";
import Error from "./Error";
import Loading from "./Loading";

const PeopleList = () => {
  const { loading, error, data, refetch } = useQuery(ALL_PEOPLE);
  if (loading) return <Loading text="people" />;
  if (error) return <Error />;
  return (
    <div style={{width: 300, margin: 10}}>
      <button style={{width: "100%"}} onClick={() => refetch()}>Refetch</button>
      <div>
        {data.allPeople.map((person) => (
          <div key={person.id} style={{ margin: 10, padding: 5 }}>
            <div>ID: {person.id}</div>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Bio: {person.bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
