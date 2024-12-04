import React from 'react';
import ReactDOM from 'react-dom';
import Success from './components/Success';
import QuestionList from './components/questionList';
import UserSignIn from './components/UserSignIn';
import LifecycleDemo from './components/LifecycleDemo';
import './styles.css';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

const App = () => {
    return (
      <div>
        <QuestionList />
        <Success />
        <UserSignIn />
        <LifecycleDemo/>
    </div>
    );
  };
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

