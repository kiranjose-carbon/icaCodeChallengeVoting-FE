import React, { useState } from 'react';

function VotingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleVote = () => {
    console.log(name, email, selectedMovie);
  };

  return (
    <div>
      <h1>Voting Form</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
          <option value="Movie 1">Movie 1</option>
          <option value="Movie 2">Movie 2</option>
          <option value="Movie 3">Movie 3</option>
        </select>
        <br />
        <button onClick={handleVote}>Vote</button>
      </form>
    </div>
  );
}

export default VotingForm;
