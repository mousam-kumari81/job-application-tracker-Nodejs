import React from 'react';

const ApplicationList = ({ applications, onDelete, onUpdate }) => {
  return (
    <ul>
      {applications.map((app) => (
        <li key={app._id}>
          <h3>{app.company}</h3>
          <p>{app.position}</p>
          <p>{app.status}</p>
          <p>{app.notes}</p>
          <button onClick={() => onDelete(app._id)}>Delete</button>
          <button onClick={() => onUpdate(app._id)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationList;