import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTech } from '../../store/modules/techs/actions';

// import { Container } from './styles';

function TechList() {
  const [newTech, setNewTech] = useState('');

  const dispatch = useDispatch();
  const techs = useSelector((state) => state.techs);

  function handleAddTech() {
    dispatch(addTech(newTech));

    setNewTech('');
  }

  return (
    <form data-testid='tech-form' onSubmit={handleAddTech}>
      <ul data-testid='tech-list'>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor='tech'>Tech</label>
      <input
        type='text'
        id='tech'
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}

export default TechList;
