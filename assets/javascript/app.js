$(document).ready(function(){
    $("button").on("click", function(){
        var animal = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=uHQ0MDTV5gdweuT6GPgovMrrM0k7CXpo&limit=10";
        
        $.ajax ({
            url: queryURL,
            method: 'GET'
            
        })
}

}