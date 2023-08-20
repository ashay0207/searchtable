import React from 'react';
import TableSearch from './Components/TableSearch';
import peopleData from './data/peopleData';

const App = () => {
  return (
    <div>
      <h1>Table with Search</h1>
      <TableSearch data={peopleData} />
    </div>
  );
};

export default App;
