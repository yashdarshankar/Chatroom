var name,message

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylRl1BIiv1sqSEI'}).base('appHbmOBegV2dFacI');
var box = document.getElementById("box")
document.getElementById('result').innerHTML = localStorage.getItem("textvalue");
//box.scrollTop = box.scrollHeight;
base('Features').select({
    // Selecting the first 3 records in All features:
    view: "All features"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('name'));
        //box.innerHTML += "<br>" + record.get('message');
        if(record.get('name') == name){
            box.innerHTML += "<br><div class='right'>"+"You : "+record.get('message') +"</div>"
        }
        else{
            box.innerHTML += "<br><div class='left'>"+record.get('name')+" : "+record.get('message') +"</div>"
        }
        
        
        
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
     fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
var addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', ()=>{
    console.log("works");
    message = document.getElementById("message").value;
    //name = document.getElementById("f_name").value;
    name = localStorage.getItem("textvalue");
    
    
    base('Features').create([
    {
        "fields": {
            "name": name,
            "message": message
        }
    }
    ], function(err, records) {
    if (err) {
        console.error(err);
        return;
    }
    records.forEach(function (record) {
        console.log(record.getId());
    });
    });
    

})

/*
function AddMsg(){
    console.log("works");
    message = document.getElementById("message").value;
    
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keylRl1BIiv1sqSEI'}).base('appHbmOBegV2dFacI');

    base('Features').create([
    {
        "fields": {
            "name": name,
            "message": message
        }
    }
    ], function(err, records) {
    if (err) {
        console.error(err);
        return;
    }
    records.forEach(function (record) {
        console.log(record.getId());
    });
    });

 
}*/