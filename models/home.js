var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home', {
    autokey: { from: 'title', path: 'slug' },
});

Home.add({
    title: { type: String},
    name: {type: String},
    page_name:{type:String},
    image : {
        first:{type: String},
        second:{type: String},
        third:{type: String},
        fourth:{type: String},
        fifth:{type: String},
        six:{type: String},
        seven:{type: String},
        eight:{type: String},
        nine:{type: String},
        ten:{type: String},
        eleven:{type: String},
        twelve:{type: String},
        thirteen:{type: String},
        fourteen:{type: String},
        fifteen:{type: String},

        
        
       
    },        
 content: {
		first: { type: String, wysiwyg: true, height: 400 },
		second: { type: String, wysiwyg: true, height: 400 },
        third: { type: String, wysiwyg: true, height: 400 },
		fourth: { type: String, wysiwyg:true,height:400},
        fifth: { type: String, wysiwyg:true,height:400},
        sixth: { type: String, wysiwyg:true,height:400},
        seventh: { type: String, wysiwyg:true,height:400},
        eighth: { type: String, wysiwyg:true,height:400},
        nine: { type: String, wysiwyg:true,height:400},
        ten: { type: String, wysiwyg:true,height:400},
        eleven:{type:String, wysiwyg:true,height:400},
        twelve:{type:String, wysiwyg:true,height:400},
        thirteen:{type:String, wysiwyg:true,height:400},
        fourteen:{type:String, wysiwyg:true,height:400},
        

},
      
     

});

Home.defaultColumns = 'title';

Home.register();