var test = "it works";



$(document).ready(function () {
    console.log('doc ready');
    $('#claim-form').submit(function (event) {
        event.preventDefault();
        var Job = {};
        var newData = $('#claim-form').serializeArray();
        console.log(newData);
        console.log("hey");
    })
})