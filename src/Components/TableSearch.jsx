import React, { useState } from 'react';

const TableSearch = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = data.filter(person =>
    person.age.toString().includes(searchTerm)
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSearch;
