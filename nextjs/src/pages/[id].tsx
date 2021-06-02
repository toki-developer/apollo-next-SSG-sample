import gql from "graphql-tag";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { VFC } from "react";
import { addApolloState, initializeApollo } from "src/apollo/apolloClient";
import type { SampleGetIdQuery, SampleQuery } from "src/apollo/graphql";
import { SampleDocument } from "src/apollo/graphql";
import { SampleGetIdDocument } from "src/apollo/graphql";

type Props = { sample: any };

export const getStaticPaths: GetStaticPaths<{
  id: string;
}> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<SampleGetIdQuery>({
    query: SampleGetIdDocument,
  });
  const paths = data.getDatas?.map((data) => {
    return { params: { id: data.id } };
  });
  return { paths: paths ?? [], fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<SampleQuery>({
    query: SampleDocument,
    variables: { id: params?.id ?? "" },
  });
  return addApolloState(apolloClient, {
    props: { sample: data.sample },
    // revalidate: 60 * 60,
  });
};
const SampleSSGPage: VFC<Props> = (props) => {
  return (
    <div>
      <p>{props.sample.id}</p>
      <p>{props.sample.name}</p>
      <p>{props.sample.freeInput}</p>
    </div>
  );
};

gql`
  query sampleGetId {
    getDatas {
      id
    }
  }
`;

gql`
  query sample($id: String!) {
    sample(id: $id) {
      id
      name
      freeInput
    }
  }
`;

export default SampleSSGPage;
