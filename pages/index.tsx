import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { Workouts } from "../components/Workouts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CG Mars Workout</title>
        <meta
          name="description"
          content="Camp Gladiator is going to Mars! The year is 2065 and CG is about to start virtual workouts from Mars."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        <Workouts />
      </Layout>
    </div>
  );
};

export default Home;
