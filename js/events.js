$(document).ready(function () {
    var items = 6;
    for(var i = 0; i < items; i++){
        var a = $("<a />", {text: i+1});
        if(i == 0){
            a.attr("class","active");
            active = a;
        }
        var col = $("<div />", { class : "col" }).append(a);
        $(col).click(function() {
            
            $(active).removeClass("active");
            active = $(this).children().first();

            $(this).children().first().addClass("active");

            var number = $(this).children().first().text();
            $("#imageholder").attr("src","img/events/"+number+".png")
          });
        $("#numeri").last().append(col);
    }
});
