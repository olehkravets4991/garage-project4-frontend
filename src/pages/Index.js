import React from 'react';
import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';
import './Index.css';

const Index = (props) => {
  // Fetch the loader data using the useLoaderData hook
  const garages = useLoaderData();

  return (
    <div className="container">
      <h2 className="heading">My Garage</h2>
      <Form className="form" method="post" action="/create">
        <input type="text" name="make" placeholder="Make" className="input" />
        <input type="text" name="model" placeholder="Model" className="input" />
        <input type="text" name="year" placeholder="Year" className="input" />
        <input type="text" name="grade" placeholder="Grade" className="input" />
        <button className="btn">Create a new Car</button>
      </Form>
      <div className="post-container">
        {garages.map((garage) => (
          <Post key={garage.id} post={garage} />
        ))}
      </div>
    </div>
  );
};

export default Index;
