import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './LeagueDetails.css'

const LeagueDetails = () => {
    const [leagueDetails, setLeagueDetails] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues[0]))
    },[id])
    const { strBanner, strBadge, strLeague, strGender, strSport, intFormedYear, strCountry, strFanart2,strFanart3, strDescriptionEN, strFacebook, strYoutube, strTwitter } = leagueDetails
    console.log(leagueDetails);
    return (
        <div className="">
            <Header 
            bannerImageForLeague={strBanner}
            badgeImage = {strBadge}
            >
            </Header>
            
            <div className="container px-5 lead">
                <div className="row intro rounded mt-5 p-4 align-items-center">
                    <div className="league-intro col-md-7 ">
                        <h3>{strLeague}</h3>
                        <p> <FontAwesomeIcon className="me-2" icon={faMapPin} /> Founded: {intFormedYear} </p>
                        <p> <FontAwesomeIcon className="me-2" icon={faFlag} /> Country: {strCountry} </p>
                        <p> <FontAwesomeIcon className="me-2" icon={faRunning} /> Sports Type: {strSport} </p>
                        <p> <FontAwesomeIcon className="me-2" icon={faMars} /> Gender: {strGender} </p>
                    </div>
                    <div className="league-image col-md-5">
                        <img className="w-100 rounded" src={strGender === "Female" ? strFanart3 : strFanart2} alt=""/>
                    </div>
                </div>

                <div className="description mt-5 mb-5">
                    <p className="text-white">{strDescriptionEN}</p>
                </div>

                <div className="social-media container mt-5 mb-5 d-flex justify-content-center align-items-center">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2 text-primary fs-1 mx-5" icon={faFacebook} /></a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2 text-danger fs-1 mx-5" icon={faYoutube} /></a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2 fs-1 mx-5" icon={faTwitter} style={{color: "#1DA1F2"}} /></a>
                </div>
            </div>

        </div>
    );
};

export default LeagueDetails;