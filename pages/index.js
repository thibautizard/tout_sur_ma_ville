import Head from 'next/head';
import Layout from '../components/layout';
import Searchbar from "./accueil/components/Searchbar";
import styled from "styled-components";
import Accueil from "./accueil/Accueil";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Tout sur ma ville</title>
      </Head>
      <Accueil />
    </Layout>
  );
}
