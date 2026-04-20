import React from 'react';
import Banner from '../../components/shared/Banner';
import Friends from '../../components/shared/Friends';




const res=fetch('/friends.json').then(res=>res.json());
const Home = () => {

    return (
    <div>
        <Banner />
        <Friends friendsResponse={res} /> 
    </div>
);
};

export default Home;