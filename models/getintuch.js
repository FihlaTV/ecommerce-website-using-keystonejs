var keystone = require('keystone');
var Types = keystone.Field.Types;

var Getin  = new keystone.List('Getin', {
    autokey: { from: 'title', path: 'slug' },
});

Getin.add({
    title: { type: String},
    name: {type: String},
    page_name:{type:String},
    image : {
        first:{type: String},
        second:{type: String},
        
    },
    content: {
		
        first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
		fourth: { type: String, wysiwyg:true,height:400},
        
        fifth: { type: String, wysiwyg: true, height: 400 },
		six: { type: String, wysiwyg: true, height: 400 },
        seven: { type: String, wysiwyg: true, height: 400 },
		eight: { type: String, wysiwyg:true,height:400},
        nine: { type: String, wysiwyg:true,height:400},
    },
        

});

Getin.defaultColumns = 'title';

Getin.register();