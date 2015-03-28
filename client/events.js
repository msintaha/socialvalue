
Template.home.events({

    'click #login': function(event) {
        Meteor.loginWithFacebook({requestPermissions: ['email','read_insights','manage_pages']}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
Template.social.events({

       'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    },
    'click #del':function(e){
        Meteor.call("removeAllpostImp",function(err){
      console.log('removed post impressions');
    });
     Meteor.call("removeAllpostEng",function(err){
      console.log('removed post engagements');
    });
       Meteor.call("removeEngaged",function(err){
      console.log('removed engagements');
    });
      Meteor.call("removeData",function(err){
      console.log('removed consumers');
    });
        Meteor.call("removePosts",function(err){
      console.log('removed posts');
    });
       Meteor.call("removeImp",function(err){
      console.log('removed impressions');
    });
      Meteor.call("removePage",function(err){
      console.log('removed page');
    });
       Meteor.call("removeAllpostVal",function(err){
      console.log('removed post value');
    });
       Meteor.call("removeAllpageVal",function(err){
      console.log('removed page value');
    });
      Meteor.call("removeAllfanVal",function(err){
      console.log('removed fan value');
    });
    },
       'click #btn-user-data': function(e,tmpl) {
      var page = tmpl.find('.pagename').value;
  Session.set('pg',page);
  var thePage=Session.get('pg');
    //   FB.login(function(response) {
     
    //   Session.set('isLoggedIn',"Hell Yeah!");
    //   Session.set('fbAT', response.authResponse.accessToken);
    //   var x=Session.get('fbAT');
    //    console.log(x);
    // }, {scope: 'email,user_likes,manage_pages,read_insights'}       
    // );
    FB.api(thePage+'/', 'get', function(res){
      Pagename.insert(res);
      console.log(res);
     });
     FB.api(thePage+'/insights/page_engaged_users/', 'get', function(res){
      Engaged.insert(res);
      console.log(res);
     });
  FB.api(thePage+'/insights/page_consumptions_unique/', 'get', function(resp){
       Data.insert(resp);
       console.log(resp);
      });
   FB.api(thePage+'/insights/page_impressions_unique/', 'get', function(respo){
       Impressions.insert(respo);
      });
   FB.api(thePage+'/posts/', 'get', function(respo){
       Posts.insert(respo);
      });   

}});
