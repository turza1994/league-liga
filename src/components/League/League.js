import React from 'react';
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const Leagues = ({ teamData }) => {
    const { strLeague, strGender, strSport, strBadge, idLeague } = teamData
    const history = useHistory();
    const goLeagueDetails = (id)=>{
        history.push(`/leagueDetails/${id}`)
    }

    return (
        <div className='col-12 col-md-4 d-flex flex-column justify-content-center align-items-center'>
            <div className="bg-light d-flex flex-column justify-content-center align-items-center py-3 w-100 rounded lead">
                <img className="w-50" src={strBadge} alt=""/>
                <p className='fs-4 fw-bold'>{strLeague}</p>
                <p className='fs-5 lh-1'>Gender Type: {strGender}</p>
                <p className='fs-5 lh-1'>Gender Type: {strSport}</p>
                <button onClick={()=>{goLeagueDetails(idLeague)}} className="btn btn-primary fs-5">
                    <span className='me-3'>Explore</span> 
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Leagues;