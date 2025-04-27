import React, { useEffect, useState } from 'react';
import { getApplications, addApplication, updateApplication, deleteApplication } from '../services/api';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationList from '../components/ApplicationList';

const Home = ({ token }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, [token]);

  const fetchApplications = async () => {
    try {
      const response = await getApplications(token);
      setApplications(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async (application) => {
    try {
      await addApplication(application, token);
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id, token);
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateApplication(id, updatedData, token);
      fetchApplications();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationForm onSubmit={handleAdd} />
      <ApplicationList applications={applications} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default Home;