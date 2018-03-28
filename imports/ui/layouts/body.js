import { Template } from 'meteor/templating';
import { Tasks } from '../../api/schemas/tasks.js';

import './body.html';


Template.App_body.helpers({
    tasks() {
      return Tasks.find({});
    },
  });