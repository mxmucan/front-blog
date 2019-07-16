import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';
import Footer from '../components/Footer';

const ALL_POST = gql`
    query ALL_POST {
        listPosts {
            _id,
            title
        }
    }
`;

function Home() {

    const { data, loading, error } = useQuery(ALL_POST);

    if (error) {
        return <h4>Error interno</h4>
        
    } else {
        return(
        <>
            <Header/>
            <Navbar/>
            <main className='container'>
                <section className='row'>
                    <div className='col-lg-8 col-md-10 mx-auto'>
                        {
                            loading ? <h4>Loading ...</h4>
                                : data.listPosts.map( post => (
                                <PostPreview _id={post._id} title={post.title} key={post._id} />
                            ))
                        }
                    </div>
                </section>
            </main>
            <Footer/>
            {/*Fragment*/} 
        </> 
        )
    }
}

export default Home;