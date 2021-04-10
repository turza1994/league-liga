import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(()=>{
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England"
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.countrys))
    },[]);

    return (
        <div className="">
            <Header>
                <h2 className="text-light display-4 text-center fw-bold pt-5">League Liga</h2>
            </Header>

            <div className="team-container container mt-5">
                <div className="row justify-content-center align-items-center g-1">
                    {
                        leagues.map(teamData => <League key={teamData.idLeague} teamData = {teamData} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;