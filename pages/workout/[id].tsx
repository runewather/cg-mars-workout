import type { GetStaticPaths, NextPage } from "next";
import Head from "next/head";

import { Layout } from "../../components/Layout";

import data from "../../data/workouts.json";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: any) {
  const workout = data.find((w) => w.id === params.id);

  return {
    props: {
      workout,
    },
  };
}

const Workout: NextPage = ({ workout }: any) => {
  return (
    <>
      <Head>
        <title>CG Mars Workout - {workout.title}</title>
        <meta name="description" content={workout.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Workout;
