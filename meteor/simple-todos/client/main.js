// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';
import './main.html';
import '../imports/startup/accounts-config.js';
 //console.log(document.getElementById('renderTarget'))
Meteor.startup(() => {
  render(<App />, document.getElementById('renderTarget'));
});

