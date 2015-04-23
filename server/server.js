Meteor.methods({
		'removePosts':function(){
			Posts.remove({});
		},
         'removeEngaged': function(){
            Engaged.remove({});
        },
    
	 'removeData':function(){
	Data.remove({});
	},
	 'removeImp':function(){
	Impressions.remove({});
	},
	 'removePage':function(){
	Pagename.remove({});
	},
            'removeAllpostImp':function(){
			Postimp.remove({});
		},
            'removeAllpostEng':function(){
			Posteng.remove({});
		},
		         'removeAllpostVal':function(){
			Postvalue.remove({});
		},
		         'removeAllpageVal':function(){
			Pagevalue.remove({});
		},
		         'removeAllfanVal':function(){
			Fanvalue.remove({});
		}
		

	});
