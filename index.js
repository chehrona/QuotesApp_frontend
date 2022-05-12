$( document ).ready(function() {

    // Input: list of dictionary
    // Output: void
    let update = function(data) {
        if (data.length == 1) {
            $(".main").html(data[0].entry);
        }
        if (data.length == 2) {
            $(".main").html(data[data.length - 1].entry)
            $(".quote3").html(data[data.length - 2].entry);
        }
        if (data.length == 3) {
            $(".main").html(data[data.length - 1].entry)
            $(".quote3").html(data[data.length - 2].entry);
            $(".quote2").html(data[data.length - 3].entry);
        }
        if (data.length >= 4) {
            $(".main").html(data[data.length - 1].entry)
            $(".quote3").html(data[data.length - 2].entry);
            $(".quote2").html(data[data.length - 3].entry);
            $(".quote1").html(data[data.length - 4].entry);

        }
    }
    $.get("https://quotesapp-back.herokuapp.com/retrieve/", function (data) {
        console.log(data);
        update(data);
    });

    let adding = function(data) {
        let submission = $(".entryForm").val();
         $.post("https://quotesapp-back.herokuapp.com/send/", {
             'entry': submission
         }, function (data) {
             console.log(data);
             update(data);
            $(".entryForm").val('')
         });
        // alert(submission);
    }
    $(".button").click(function() {
        adding()
    })

    $(".entryForm").on("keydown", function (e) {
        if(e.key === 'Enter') {
            adding();
        }
    });

});