import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td><Link to={`/member/${member.id}`}>{member.name}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
