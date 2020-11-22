import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import EduHomework from '../pages/EduHomework/EduHomework';
import Front from '../pages/Front/Front';
import Login from '../pages/Login/Login';
import StudentTracker from '../pages/StudentTracker/StudentTracker';
import ChooseClass from '../pages/ChooseClass/ChooseClass';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/front" component={Front} />
        <Route path="/choose-class" component={ChooseClass} />
        <Route exact path="/student-tracker" component={StudentTracker} />
        <Route path="/student-tracker/Edu-Homework" component={EduHomework} />
      </BrowserRouter>
    </div>
  );
};
