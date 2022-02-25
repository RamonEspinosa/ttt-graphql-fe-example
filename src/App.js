import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";
import PeopleList from "./components/PeopleList";
import CreatePerson from "./components/CreatePerson";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CreatePerson />
      <PeopleList/> 
    </ApolloProvider>
  );
}

export default App;
