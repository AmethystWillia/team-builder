// Imports
import React from 'react';

// Import CSS
import './TeamForm.css'

// Exporting default function
export default function TeamForm(props) {
    // Declare usable variables
    const { values, update, submit } = props;

    // Functions for form functionality
    const onChange = evt => {
        // Declare consts to be used in update
        const name = evt.target.name;
        const { value } = evt.target;

        update(name, value);
    }

    const onSubmit = evt => {
        // Prevent default
        evt.preventDefault();

        submit();
    }

    // Render form
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='inputs'>
                <label>Name
                    <input
                        type ='text'
                        name = 'name'
                        value = {values.name}
                        onChange = {onChange}
                        placeholder = 'Your name here!'
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select Your Role!--</option>
                        <option value='Warrior'>Warrior</option>
                        <option value='Mage'>Mage</option>
                        <option value='Cleric'>Cleric</option>
                        <option value='Thief'>Thief</option>
                        <option value='Pop Star'>Pop Star</option>
                        <option value='Chef'>Chef</option>
                        <option value='Cat'>Cat</option>
                        <option value='Imp'>Imp</option>
                        <option value='Scientist'>Scientist</option>
                        <option value='Tank'>Tank</option>
                        <option value='Princess'>Princess</option>
                        <option value='Flower'>Flower</option>
                        <option value='Vampire'>Vampire</option>
                        <option value='Elf'>Elf</option>
                    </select>
                </label>

                <label>Personality
                    <select value={values.personality} name='personality' onChange={onChange}>
                         <option value=''>-- Select Your Personality!--</option>
                        <option value='Kind'>Kind</option>
                        <option value='Energetic'>Energetic</option>
                        <option value='Laid Back'>Laid Back</option>
                        <option value='Cool'>Cool</option>
                        <option value='Airheaded'>Airheaded</option>
                        <option value='Stubborn'>Stubborn</option>
                        <option value='Cautious'>Cautious</option>
                    </select>
                </label>

                <label>Birthday
                    <input
                        type = 'date'
                        name = 'bday'
                        value = {values.bday}
                        onChange = {onChange}
                    />
                </label>

                <label>Favorite Color
                    <select value={values.favColor} name='favColor' onChange={onChange}>
                        <option value=''>-- Select Your Favorite Color!--</option>
                        <option value='Red'>Red</option>
                        <option value='Orange'>Orange</option>
                        <option value='Yellow'>Yellow</option>
                        <option value='Light Green'>Light Green</option>
                        <option value='Dark Green'>Dark Green</option>
                        <option value='Light Blue'>Light Blue</option>
                        <option value='Dark Blue'>Dark Blue</option>
                        <option value='Pink'>Pink</option>
                        <option value='Purple'>Purple</option>
                        <option value='Brown'>Brown</option>
                        <option value='Black'>Black</option>
                        <option value='White'>White</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={
                        !values.name 
                        || !values.role 
                        || !values.personality
                        || !values.bday
                        || !values.favColor}>
                        Generate Character
                    </button>
                </div>
            </div>
        </form>
    )
}