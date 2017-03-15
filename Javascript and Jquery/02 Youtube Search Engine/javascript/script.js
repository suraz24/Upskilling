//SearcBar Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#searchBtn');

    //Focus Handler
    $(searchField).on('focus',function(){
        $(this).animate({
            width: '100%'
        }, 400);
        $(icon).animate({
            right:'10px'
        },400);
    });


    //Blur Event Handler
    $(searchField).on('blur',function(){
        if(searchField.val() == ''){
            $(searchField).animate({
                width:'45%'
            },400, function(){});

        }
        $(icon).animate({
            right:'360px'
        },400, function(){});
    });

    $('#searchForm').submit(function(e){
        e.preventDefault();
    })
})


//next page function
function nextPage(){
    var APIkey = 'AIzaSyAJw06jk5ZiNIFJba3FQhbTy4sbz3MBCZc';
    var token = $('#next-button').data('token');
    var q = $('#next-button').data('query');

    //clear results
    $('#results').html('');
    $('#buttons').html('');


    //Get Form Input
    q=$('#query').val();

    //Run Get request to API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part:'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: APIkey},
             function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;

                console.log(data);

                 $.each(data.items, function(i, item){
                    //get output
                    var output = getOutput(item);

                    //display results
                    $('#results').append(output);
                 });

                 var buttons = getButtons(prevPageToken, nextPageToken);

                 //Display Buttons
                 $('#buttons').append(buttons);
             }
        );

}

//previous page function
function prevPage(){
    var APIkey = 'AIzaSyAJw06jk5ZiNIFJba3FQhbTy4sbz3MBCZc';
    var token = $('#prev-button').data('token');
    var q = $('#prev-button').data('query');

    //clear results
    $('#results').html('');
    $('#buttons').html('');


    //Get Form Input
    q=$('#query').val();

    //Run Get request to API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part:'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: APIkey},
             function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;

                console.log(data);

                 $.each(data.items, function(i, item){
                    //get output
                    var output = getOutput(item);

                    //display results
                    $('#results').append(output);
                 });

                 var buttons = getButtons(prevPageToken, nextPageToken);

                 //Display Buttons
                 $('#buttons').append(buttons);
             }
        );

}



//Build the buttons
function getButtons(prevPageToken, nextPageToken){
    if (!prevPageToken){
        var btnOutput = '<div class="button-container">'+
                        '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
                        'onclick="nextPage()"> Next Page</button></div>'
    } else{
        var btnOutput = '<div class="button-container">'+
                        '<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"'+
                        'onclick="prevPage()"> Previous Page </button></div>'+
                        '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
                        'onclick="nextPage()"> Next Page </button></div>'
    }
    return btnOutput;

}

//Build Output
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    //Build Output String

    var output = '<li>' +
    '<div class = "list-left">'+
    '<img src = "' + thumb+ '">'+
    '</div>'+
    '<div class = "list-right">'+
    '<h3><a  class = "fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+ title +'</a></h3>'+
    '<small>By <span class = "cTitle">'+ channelTitle + '</span> on ' + videoDate +'</small>'+
    '<p>'+ description + '</p>'+
    '</div>'+
    '</li>'+
    '<div class="clearfix"></div>'+
    '';
    return output;
}


function search(){
    var APIkey = 'AIzaSyAJw06jk5ZiNIFJba3FQhbTy4sbz3MBCZc';

    //clear results
    $('#results').html('');
    $('#buttons').html('');


    //Get Form Input
    q=$('#query').val();

    //Run Get request to API
    $.get(
        "https://www.googleapis.com/youtube/v3/search",{
            part:'snippet, id',
            q: q,
            type: 'video',
            key: APIkey},
             function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;

                console.log(data);

                 $.each(data.items, function(i, item){
                    //get output
                    var output = getOutput(item);

                    //display results
                    $('#results').append(output);
                 });

                 var buttons = getButtons(prevPageToken, nextPageToken);

                 //Display Buttons
                 $('#buttons').append(buttons);
             }
        );
}