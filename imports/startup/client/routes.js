import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '../../ui/layouts/body.js';
import '../../ui/layouts/nav.js';
import '../../ui/layouts/footer.html';
import '../../ui/pages/tasks/tasks.js';


FlowRouter.route('/', {
    name: "home",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
      BlazeLayout.render('App_body', {
        footer: "App_footer",
        main: "Tasks_list",
        nav: "App_navbar",
      });
    }
  });

  FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render('App_body', {
        footer: "footer",
        main: "pageNotFound",
        nav: "nav",
      });
    }
  };

AccountsTemplates.configure({
  //defaultTemplate: 'Auth_page',
  defaultLayout: 'App_body',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {
    nav: 'App_navbar'
  }
});

AccountsTemplates.configureRoute('signIn');

const myLogoutFunc = function() {
  console.log("logout");
  FlowRouter.redirect('/sign-in');
}

AccountsTemplates.configure({
  // Hooks
  onLogoutHook: myLogoutFunc,
});