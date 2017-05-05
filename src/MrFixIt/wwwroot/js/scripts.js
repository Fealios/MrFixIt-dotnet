var test = "it works";



$(document).ready(function () {
    console.log('doc ready');
    $('#claim-form').submit(function (event) {
        //event.preventDefault();
        var Job = {};
        var newData = $('#claim-form').serializeArray();
        console.log(newData);
        Job.JobId = newData[0].value;
        Job.Title = newData[1].value;
        Job.Description = newData[2].value;
        //NAME PROPERTIES EXACTLY SAME AS C# CLASS!!
        $.ajax({
            type: 'POST',
            url: $(this).data('url-action'),
            datatype: 'json',
            data: Job,
            success: function (success) {
                console.log("success");
                window.location.href = "/Jobs";
            },
            error: function (result) {
                console.log("Fake news!");
            }
        })
    })

    $('#set-progress').change(function () {
        console.log('changed');
        var thisJob = {}
        thisJob.JobId = $('#detail-jobId').val();
        thisJob.Title = $('#detail-title').val();
        thisJob.Description = $('#detail-description').val();
        $.ajax({
            type: 'post',
            url: "/Jobs/Progress",
            datatype: 'json',
            data: thisJob,
            success: function (result) {
                console.log('success');
                window.location.href = "/Jobs";
            },
            error: function (result) {
                console.log('no go');
            }
        })
    })
    $('#set-complete').change(function () {
        console.log('changed completeness');
        var finishedJob = {}
        finishedJob.JobId = $('#completed-jobId').val();
        finishedJob.Title = $('#completed-title').val();
        finishedJob.Description = $('#completed-description').val();
        console.log(finishedJob);
        $.ajax({
            type: 'POST',
            url: "/Jobs/Complete",
            datatype: 'json',
            data: finishedJob,
            success: function (result) {
                console.log('success');
                window.location.href = "/Jobs";
            },
            error: function (result) {
                console.log('no go');
            }
        })
    })
})