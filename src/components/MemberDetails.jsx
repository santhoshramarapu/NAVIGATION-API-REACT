import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error('Error fetching member details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Member Details</h2>
      {member && (
        <div>
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>City:</strong> {member.address.city}</p>
          <p><strong>Email:</strong> {member.email}</p>
        </div>
      )}
    </div>
  );
};

export default MemberDetails;
