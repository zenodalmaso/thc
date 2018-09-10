$(document).ready(function () {
    var items = 6;
    links = ["https://www.facebook.com/events/338029743064875/",
    "https://www.facebook.com/events/411338099027559/",
    "https://www.facebook.com/events/1574764006112537/",
    "https://www.facebook.com/events/712945052223127/",
    "https://www.facebook.com/events/172560280003735/",
    "#"];
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
            $("#imageholder").parent().attr("onclick","window.open('"+links[number-1]+"','mywindow');");
        });
        $("#numeri").last().append(col);
    }
});
