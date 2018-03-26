import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import '../../ui/layouts/body.js';

var unauthenticatedRoutes = FlowRouter.group({
    name: "Unauthenticated"
});

var authenticatedRoutes = FlowRouter.group({
    name: "Authenticated",
    triggersEnter: [AccountsTemplates.ensureSignedIn]
});

unauthenticatedRoutes.route('/', {
    name: "App.home",
    action() {
        BlazeLayout.render('App_body');
    }
});