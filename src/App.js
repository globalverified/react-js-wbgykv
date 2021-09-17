import React from 'react';
import './style.css';
import ProjectComponent from './TammComp';
import Hoc from './HOC';

export default function App() {
  const ProjectName = [
    {
      id: 1,
      name: 'TAMM'
    },
    {
      id: 2,
      name: 'Merck'
    },
    {
      id: 3,
      name: 'Mercedes'
    },
  ];
  const Users = Hoc(ProjectComponent, ProjectName);
  return (
    <div>
      <Users></Users>
    </div>
  );
}
