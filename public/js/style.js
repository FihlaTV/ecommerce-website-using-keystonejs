var baseUrl = 'http://localhost:3000/collections/ashford';

$(document).ready(function () {
  
    
    $('input:checkbox').on('change', function() {
    $('input:checkbox').not(this).prop('checked', false); 
    localStorage.x = $(this).attr('id');
    console.log(localStorage.x);
 
   // var test = localStorage.x=== 'true'? true: false;
   // $(this).prop('checked', test || false);
 })
 
    

    // listen to change event (customize selector to your needs)
    // $('input[type=checkbox]').change(function (e) {
        $('#button').click(function (e) {        
        e.preventDefault();
        url = window.location.href.split('/filter');
        // window.location = url[0]; 
        // var filtername = $('input[type=checkbox]').attr('name'); 

        // if ($('input[type=checkbox]').is(':checked')) {

        //     // read in value
        //     var queryString = $('input[type=checkbox]').val();

        //     // loop through siblings (customize selector to your needs)
        //     var s = $('input[type=checkbox]').siblings();
        //     $.each(s, function () {

        //         // see if checked
        //         if ($('input[type=checkbox]').is(':checked')) {

        //             // append value
        //             queryString += ' OR ' + $('input[type=checkbox]').val();
        //         }
        //     });

        //     // jump to url
        //     window.location = baseUrl + '/filter/?'+ filtername + "=" +queryString;
        // }
   
        var selectedFilter = $('input[type=checkbox]').filter(':checked');
        if (selectedFilter.length){
            selectedFilterValues = [];
            selectedFilter.each(function(){
                var currentFilter = $(this);
                selectedFilterValues.push(currentFilter.attr('name'),currentFilter.val())
            })
             
        }
        Obj = ArrToObj(selectedFilterValues);
        window.location = url[0] + "/filter?" + $.param(Obj);
    $("[id="+localStorage.x+"]").prop('checked',true)
        });

        $(".cb1,.cb2,.cb3").css("display", "none");
        
        $("#button-filter1").click(function(){
            var button_html = document.getElementById('button-filter1');
            if (button_html.innerHTML == 'Show More'){
                $(".cb1").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb1").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter2").click(function(){
            var button_html = document.getElementById('button-filter2');
            if (button_html.innerHTML == 'Show More'){
                $(".cb2").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb2").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter3").click(function(){
            var button_html = document.getElementById('button-filter3');
            if (button_html.innerHTML == 'Show More'){
                $(".cb3").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb3").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
});


//function applySetting() {

//     var checkboxValues = {};
// $(":checkbox").each(function(){
//   checkboxValues[this.id] = this.checked;
// });
// $.cookie('checkboxValues', checkboxValues, { expires: 7, path: '/' })

// function repopulateCheckboxes(){
//   var checkboxValues = $.cookie('checkboxValues');
//   if(checkboxValues){
//     Object.keys(checkboxValues).forEach(function(element) {
//       var checked = checkboxValues[element];
//       $("#" + element).prop('checked', checked);
//     });
//   }
// }





/*var checkboxValues;
checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
  var  $checkboxes = $('input[type=checkbox]').filter(':checked');

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
console.log("inside setSettings");


$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});

console.log("inside applySettings");
}*/

// $(function(){
//     var test = localStorage.input === 'true'? true: false;
//     $('checkbox').prop('checked', test || false);
// });

// $('input').on('change', function() {
//     localStorage.checkbox = $(this).is(':checked');
//     console.log($(this).is(':checked'));
// });



function ArrToObj(array){
  var Obj = {};
  var len = array.length;
  for (var i = 0; i < len; i+=2){
    Obj[array[i]] = array[i+1]
  }
  return Obj;
         if(localStorage.x){
    $("[id="+localStorage.x+"]").prop('checked',true)}
}


