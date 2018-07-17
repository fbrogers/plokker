$(function(){
    var mainOptions = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100, "?", "fa-coffee"];
    var availableHtml = "";
    mainOptions.forEach(function(e){
        var element = e.toString();
        availableHtml += '<div class="col-sm-4 mb-3">'+
            '<div class="btn btn-block btn-sm btn-outline-secondary">';
        if(element.lastIndexOf("fa-", 0) === 0){
            availableHtml += '<i class="fas '+element+'"></i>';
        } else {
            availableHtml += element;
        }
        availableHtml += '</div></div>';
    });
    $("#available-div").html(availableHtml);

    $("#playing-card").flip({
        'trigger': 'manual'
    });
    $("#playing-card").flip(true);

    $("#playing-card").on("click", function(){
        if($("#svg-score").html() == ""){
            $("#numbersModal").modal('show');
            return;
        }
        $("#playing-card").flip('toggle');
    });

    $("#action-number").on("click", function(){
        $("#playing-card").flip(true);
    });

    $(".ruleset-buttons .btn").on("click", function(){
        var cardValue = $(this).html().trim();
        if(cardValue == '<i class="fas fa-coffee"></i>'){
            $("#playing-card text")
            .html('\uf0f4')
            .css("font-size", "3em")
            .addClass("fas fa-coffee");
        } else if(cardValue >= 100){
            $("#playing-card text")
            .html(cardValue)
            .css("font-size", "2.5em")
            .removeClass("fas fa-coffee");;
        } else if(cardValue >= 10){
            $("#playing-card text")
            .html(cardValue)
            .css("font-size", "4em")
            .removeClass("fas fa-coffee");;
        } else {
            $("#playing-card text")
            .html(cardValue)
            .css("font-size", "6em")
            .removeClass("fas fa-coffee");;
        }

        $("#numbersModal").modal('hide');
        $("#playing-card").flip(false);
    });
});
