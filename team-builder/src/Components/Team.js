// Imports
import React from 'react';

// Import CSS
import './Team.css'

// Exporting default function
export default function Team(props) {
    // Declare usable variables
    const { details } = props;

    // Render something while details are being loaded
    if (!details) {
        return <h3>Currently loading team members...</h3>
    }

    // Render team member data
    return (
    <div className='member-container'>
        <h2>Name: {details.name}</h2>
        <h3>Role: {details.role}</h3>
        <p>Personality: {details.personality}</p>
        <p>Birthday: {details.bday}</p>
        <p>Favorite Color: {details.favColor}</p>
    </div>
    )
}