Meteor.publish("data", function() {
    return Wish.find({},{sort:{theDate:-1}});
});
