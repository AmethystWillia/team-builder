// Imports
import React from 'react';

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
        <h2>Name:</h2>
        <p>Email:</p>
        <p>Role:</p>
    </div>
    )
}