
$(document).ready(function () {
    var items = 18;
    for(var i = 0; i < items; i++){
        if(!(i%3)){
            $("#gallery").append("<div class=\"tripletta no-gutters row text-center\"></div>")
        }
        var img = $("<img>").attr({
            "src":"img/GALLERY THC WEBSITE/"+(i+1)+".jpg",
            "class": "item"
        });
        var col = $("<div />", { class : "col" }).append(img);
        $(".tripletta").last().append(col);
    }
});

/*

<div class="row text-center">
                <div class="col">
                    <img class="item sinistra" src="img/GALLERY THC WEBSITE/1.jpg">
                </div>
                <div class="col">
                    <img class="item" src="img/GALLERY THC WEBSITE/2.jpg">
                </div>
                <div class="col">
                    <img class="item" src="img/GALLERY THC WEBSITE/3.jpg">
                </div>
            </div>

            */