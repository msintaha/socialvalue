 Meteor.subscribe("data");
Template.social.helpers({
	stuff:function(){
		return Engaged.find({});
	},
    isAdmin:function(){
    var user=Meteor.userId();
    author="zhNgBEvqjjoicN2eC";
    if(user===author){
      return true;
    }
    else{
      return false;
    }
  }
});
Template.social.helpers({
  user:function(){
    var name = Meteor.user().profile.name;
    return name;
  },
  fanvalue:function(){
   var c=Data.find({}).count();
   sum=0;
   for(var i=0;i<3;i++){
   sum+=Data.find().fetch()[c-1].data[0].values[i].value;
   }
   var avg=sum/3;//avg daily consumers
   var weight=0.05;
   var valueFan=(avg)*weight;
   Fanvalue.insert(valueFan);
   Session.set('valuefan',valueFan);
   return valueFan;
  },
  //Posts.find().fetch()[Posts.find().count()-1].data.length -----gives you the no. of posts in that year
  //Posts.find().fetch()[0].data[0].id
  postvalue:function(){
    var c=Posts.find().count();
    var count=Posts.find().fetch()[c-1].data.length;
    for(var i=0;i<count;i++){
      var postid=Posts.find().fetch()[c-1].data[i].id;
        FB.api(postid+'/insights/post_impressions/', 'get', function(respo){
       Postimp.insert(respo);
      });
      FB.api(postid+'/insights/post_engaged_users/', 'get', function(respo){
       Posteng.insert(respo);
      });  
    }
    var engsum=0;
    var impsum=0;
    for(var i=0;i<count;i++){
      engsum+=Posteng.find().fetch()[i].data[0].values[0].value;
      impsum+=Postimp.find().fetch()[i].data[0].values[0].value;
    }
    var engsumAvg=engsum/count;
    var impsumAvg=impsum/count;
    Session.set('impressions',impsumAvg);
    var weight=0.05;
    var valuePost=(engsumAvg*weight)+(impsumAvg*weight);
    Postvalue.insert(valuePost);
    Session.set('valuepost',valuePost);
     return valuePost;
  },
  pagevalue:function(){
    //Pagename.find().fetch()[Pagename.find().count()-1].category
      var c=Posts.find().count();
    var fv=Session.get('valuefan');
    var pv= Session.get('valuepost');
    var totalFans=Pagename.find().fetch()[Pagename.find().count()-1].likes;
    var postNos=Posts.find().fetch()[c-1].data.length;
    var impressionsPost=Session.get('impressions');
    var weight=0.05;
    var pageValue=(fv*totalFans)+(pv*postNos)+(impressionsPost*weight);
    Pagevalue.insert(pageValue);
    return pageValue;
  }

});

Template.social.rendered= function() {
	$('.ui.form')
  .form({
  
    pagename: {
      identifier : 'pagename',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your facebook page name'
        }
      ]
    }
 
  })
};
