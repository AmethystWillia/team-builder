// Imports
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './Fake Axios/index';

// Import components
import Team from './Components/Team';
import TeamForm from './Components/TeamForm';

// Set initial form values to blank
const initialFormValues = {
  name: '',
  favColor: '',
  bday: '',
  personality: '',
  role: '',
}

// Rendering function
function App() {
  // Set states
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  // Functions for form functionality
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    // Constant to hold newly submitted info
    const newMem = {
      name: formValues.name.trim(),
      favColor: formValues.favColor,
      bday: formValues.bday,
      personality: formValues.personality,
      role: formValues.role,
    };

    // "axios" post request
    axios.post('fakeapi.com', newMem)
      .then(res => {
        const submittedMem = res.data;
        setMembers([submittedMem, ...members]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.error(`Oops! ${err}`);
      })
  }

  // "axios" get request (runs upon first load)
  useEffect(() => {
    axios.get('fakeapi.com')
      .then(res => {
        setMembers(res.data);
      })
      .catch(err => {
        console.error(`Ruh roh! ${err}`);
      })
  }, []);

  // Return to render
  return (
    <div className="App">
      <h1>Form App</h1>
      <h3>Fill in the form to generate a Miitopia character!</h3>
      <TeamForm values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {
        members.map(mem => {
          return (
            <Team key={mem.id}
            details={mem}
            />
          )
        })
      }
    </div>
  );
}

export default App;
