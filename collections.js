Data = new Meteor.Collection('data');//page_consumptions_unique
Engaged=new Meteor.Collection('engaged');//engaged_users
Pagename=new Meteor.Collection('pagename');//just page general data
Impressions=new Meteor.Collection('impressions');//page_impressions
Posts=new Meteor.Collection('posts');//page/posts
Postimp=new Meteor.Collection('postimp');//post_impressions
Posteng=new Meteor.Collection('posteng');//post_engagement
Fanvalue=new Meteor.Collection('fanvalue');
Postvalue=new Meteor.Collection('postvalue');
Pagevalue=new Meteor.Collection('pagevalue');

Meteor.startup(function() {
    Data.allow({
        insert: function() {
            return true;
        },
        update: function() {
            return true;
        },
        remove: function() {
            return true;
        },
    });
});
