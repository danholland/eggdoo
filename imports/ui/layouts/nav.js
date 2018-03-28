import './nav.html';

Template.atNavButtonCustom.replaces("atNavButton");

Template.App_navbar.onRendered(function() {
    $('.button-collapse').sideNav({ closeOnClick: true });
});

Template.App_navbar.helpers({
    user() {
        return Meteor.user();
    },
    picture() {
        if(Meteor.user()){
            return Meteor.user().services.google.picture;
        }
        return "data:image/jpeg;base64,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";
    }
});

Template.App_navbar.events({ 
    'click #at-nav-button': function(event, template) { 
         if (!Meteor.user()){
            Meteor.loginWithGoogle({
            }, (err) => {
                if (err) {
                // handle error
                } else {
                // successful login!
                    FlowRouter.redirect('/');
                }
            });
        } else {
            FlowRouter.redirect('/');
        }
    } 
});