var test = "it works";



$(document).ready(function () {
    console.log('doc ready');
    $('#claim-form').submit(function (event) {
        event.preventDefault();
        var Job = {};
        var newData = $('#claim-form').serializeArray();
        console.log(newData);
        Job.JobId = newData[0].value;
        Job.Title = newData[1].value;
        Job.Description = newData[2].value;
        $.ajax({
            type: 'POST',
            url: $(this).data('url-action'),
            datatype: 'json',
            data: Job,
            success: function (success) {
                console.log("success");
            },
            error: function (result) {
                console.log("Fake news!");
            }
        })
    })
})