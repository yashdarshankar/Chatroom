var name,message

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylRl1BIiv1sqSEI'}).base('appHbmOBegV2dFacI');
var box = document.getElementById("box");


document.getElementById('result').innerHTML = localStorage.getItem("textvalue");
base('Features').select({
    view: "All features"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('name'));
        //box.innerHTML += "<br>" + record.get('message');
        if(record.get('name') == name){
            box.innerHTML += "<br><div class='right'>"+"You : "+record.get('message') +"</div>"
            box.scrollTop = box.scrollHeight;
        }
        else{
            box.innerHTML += "<br><div class='left'>"+record.get('name')+" : "+record.get('message') +"</div>"
            box.scrollTop = box.scrollHeight;
        }
    });

     fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
var addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', ()=>{
    console.log("works");
    message = document.getElementById("message").value;
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
