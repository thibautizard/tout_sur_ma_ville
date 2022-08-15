import Head from 'next/head';
import Layout from '../components/layout';
import Searchbar from '../components/searchbar';

export default function Home() {
    return(<Layout>
                <Head>
                    <title> Tout sur ma ville</title>
                </Head>
                <section id="home">
                    <h1 className="titre_principal"> Tout sur ma ville</h1>
                    <Searchbar/>

                </section>

            </Layout>
            )
}