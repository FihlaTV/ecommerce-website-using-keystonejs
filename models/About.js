var keystone = require('keystone');
var Types = keystone.Field.Types;

var About = new keystone.List('About', {
    autokey: { from: 'title', path: 'slug' },
});

About.add({
    title: { type: String},
    name: {type: String},
    page_name:{type:String},
    image : {
        first:{type: String},
        second:{type: String},
        third:{type: String},
    },
    content: {
		first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
		fourth: { type: String, wysiwyg:true,height:400},
    },
        

});

About.defaultColumns = 'title';

About.register();