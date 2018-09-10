$(document).ready(function () {
    var intervallo = 1,
        gradiperint = 0.5,
        elementi = [adesivo_sx, adesivo_dx],
        gradi = [],
        staRoutando = [],
        primavolta = [],
        primoritorno = [],
        codiceint = [];

    elementi.forEach(function(element) {
        gradi.push(0);
        staRoutando.push(false);
        primavolta.push(false);
        primoritorno.push(false);
        codiceint.push(0);
    });

    function rotatenow(val, i) {
        if (staRoutando[i] === true) {
            if (gradi[i] > 359) {
                gradi[i] = 0;
            } else {
                gradi[i] += 0.5;
            }
            
            ruota(val, gradi[i]);
        }
    }
    
    function ruota(val, deg) {
            $(val).css({
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                    '-moz-transform': 'rotate(' + deg + 'deg)',
                    '-ms-transform': 'rotate(' + deg + 'deg)',
                    'transform': 'rotate(' + deg + 'deg)'
            });       
    }
    
    function ritorna(val, i) {
        if (staRoutando[i] == false) {
            gradi[i] = (8.9 * gradi[i]) / 9;   
            ruota(val, gradi[i]);
        }
    }

    jQuery.each(elementi, function(i,val) {
        $(val).hover(function () {
            staRoutando[i] = true;
            if (primavolta[i]===false) { 
                codiceint[i] = setInterval(function() {rotatenow(val,i);}, 1); 
            }
            primavolta[i] = true;
        }, function () {
            staRoutando[i] = false;
            if (primoritorno[i] == false)
                setInterval(function() {ritorna(val, i); }, 1);
            primoritorno[i] = true;
            if (gradi[i] < 1) {
                gradi[i]=0;
            }
        });
    });
});