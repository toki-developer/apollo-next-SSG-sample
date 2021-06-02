import gql from "graphql-tag";
import { useSampleQuery } from "src/apollo/graphql";

const Home = () => {
  const { data, loading } = useSampleQuery({ variables: { id: "45268" } });
  return (
    <>
      {!loading && (
        <>
          <p>{data?.sample?.id}</p>
          <p>{data?.sample?.name}</p>
          <p>{data?.sample?.freeInput}</p>
        </>
      )}
      <h1>Hello World</h1>
    </>
  );
};

export default Home;

gql`
  query sample($id: String!) {
    sample(id: $id) {
      id
      name
      freeInput
    }
  }
`;
