 $(document).ready(function () {
            var control1 = $('#control1');
            var control2 = $('#control2');
            $('#SiRespuesta').hide();
            $('#NoRespuesta').hide();


            control1.change(function () {
                var inicioBusto = 0;
                var finBusto = 0;
                var valores = "";
                var control1Sel = control1.val();
                switch (control1Sel) {
                    case "27":
                        inicioBusto = 27;
                        valores = ["28AA", "28A", "28B", "28C", "28D", "28E", "28F", "28G",];
                        break;
                    case "28":
                        inicioBusto = 28;
                        valores = ["28AA", "28A", "28B", "28C", "28D", "28E", "28F", "28G",];
                        break;
                    case "29":
                        inicioBusto = 29;
                        valores = ["30AA", "30A", "30B", "30C", "30D", "30E", "30F", "30G",];
                        break;
                    case "30":
                        inicioBusto = 30;
                        valores = ["30AA", "30A", "30B", "30C", "30D", "30E", "30F", "30G",];
                        break;
                    case "31":
                        inicioBusto = 31;
                        valores = ["32AA", "32A", "32B", "32C", "32D", "32E", "32F", "32G",];
                        break;
                    case "32":
                        inicioBusto = 32;
                        valores = ["32AA", "32A", "32B", "32C", "32D", "32E", "32F", "32G",];
                        break;
                    case "33":
                        inicioBusto = 33;
                        valores = ["34AA", "34A", "34B", "34C", "34D", "34E", "34F", "34G",];
                        break;
                    case "34":
                        inicioBusto = 34;
                        valores = ["34AA", "34A", "34B", "34C", "34D", "34E", "34F", "34G",];
                        break;
                    case "35":
                        inicioBusto = 35;
                        valores = ["36AA", "36A", "36B", "36C", "36D", "36E", "36F", "36G",];
                        break;
                    case "36":
                        inicioBusto = 36;
                        valores = ["36AA", "36A", "36B", "36C", "36D", "36E", "36F", "36G",];
                        break;
                    case "37":
                        inicioBusto = 37;
                        valores = ["38AA", "38A", "38B", "38C", "38D", "38E", "38F", "38G",];
                        break;
                    case "38":
                        inicioBusto = 38;
                        valores = ["38AA", "38A", "38B", "38C", "38D", "38E", "38F", "38G",];
                        break;
                    case "39":
                        inicioBusto = 39;
                        valores = ["40AA", "40A", "40B", "40C", "40D", "40E", "40F", "40G",];
                        break;
                    case "40":
                        inicioBusto = 40;
                        valores = ["40AA", "40A", "40B", "40C", "40D", "40E", "40F", "40G",];
                        break;
                    case "41":
                        inicioBusto = 41;
                        valores = ["42AA", "42A", "42B", "42C", "42D", "42E", "42F", "42G",];
                        break;
                    case "42":
                        inicioBusto = 42;
                        valores = ["42AA", "42A", "42B", "42C", "42D", "42E", "42F", "42G",];
                        break;
                    case "43":
                        inicioBusto = 43;
                        valores = ["44AA", "44A", "44B", "44C", "44D", "44E", "44F", "44G",];
                        break;
                    case "44":
                        inicioBusto = 44;
                        valores = ["44AA", "44A", "44B", "44C", "44D", "44E", "44F", "44G",];
                        break;
                    case "45":
                        inicioBusto = 45;
                        valores = ["46AA", "46A", "46B", "46C", "46D", "46E", "46F", "46G",];
                        break;
                    case "46":
                        inicioBusto = 46;
                        valores = ["46AA", "46A", "46B", "46C", "46D", "46E", "46F", "46G",];
                        break;
                    default:
                        inicioBusto = 0;
                        valores = "";
                }
                control2.html('');
                control2.append('<option value="0">BUST (in.)</option>');
                control2.prop("disabled", false);
                if (valores.length > 1) {
                    //Crear opciones de segundo control
                    var contadorArray = 0;
                    for (var i = 27; i <= 53; i++) {
                        if (inicioBusto == i) {
                            if (valores[contadorArray] != null) {
                                control2.append('<option value="' + valores[contadorArray] + '">' + i + '</option>');
                                inicioBusto++;
                                contadorArray++;
                            } else {
                                control2.append('<option value="0">' + i + '</option>');
                            }
                        } else {
                            control2.append('<option value="0">' + i + '</option>');
                        }
                    }
                    /*for(var i in valores){
                      control2.append('<option value="'+valores[i]+'">'+inicioBusto+'</option>');
                      inicioBusto++;
                    }       */
                } else {
                    $('#NoRespuesta').fadeOut();
                    $('#SiRespuesta').fadeOut();
                    $('.detalleRespuesta').html("");
                    $('#detalleRespuesta-complex').html("");
                    for (var i = 27; i <= 53; i++) {
                        control2.append('<option value="0">' + i + '</option>');
                    }
                }
            });

            control2.change(function () {
                var valorBusto = control2.val();
                if (valorBusto != "0") {
                    $('#detalleRespuesta').html(valorBusto);
                    $('#detalleRespuesta-complex').html("");

                    $('#SiRespuesta').fadeIn();
                    $('#NoRespuesta').fadeOut();
                    if (valorBusto === "28AA" || valorBusto === "28A" || valorBusto === "28B" || valorBusto === "28C" || valorBusto === "28D" || valorBusto === "28E" || valorBusto === "28F" || valorBusto === "28G" || valorBusto === "30AA" || valorBusto === "30F" || valorBusto === "30G" || valorBusto === "32AA" || valorBusto === "32G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, we recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "30A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>30B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "30B" || valorBusto === "30C" || valorBusto === "34AA" || valorBusto === "34A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>32B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "30D" || valorBusto === "30E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>32C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "32A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>30B OR 32B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "32B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>30C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "32C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "32D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "32E" || valorBusto === "32F") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "34B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>32C OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "34C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>32D OR 36B</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "34D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36C OR 38B</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "34E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36D OR 38C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "34F" || valorBusto === "34G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36E OR 38D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "36AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34B OR 32C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "36A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34B OR 36B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "36B" || valorBusto === "36C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34C OR 32D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "36D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>34E OR 38C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "36E" || valorBusto === "36F") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38C OR 38D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "36G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38E OR 40C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "38AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36B OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "38A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36B OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "38B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36C OR 34D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "38C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36D OR 40B</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "38D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36E OR 40C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "38E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40C OR 40D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "38F" || valorBusto === "38G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40D OR 40E</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "40AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36B OR 38B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "40A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38B OR 36C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "40B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>36D OR 38C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "40C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "40D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38E OR 42C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "40E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42C OR 42D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "40F" || valorBusto === "40G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40E OR 42E</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "42AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38B, 38C OR 40B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "42A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38B OR 40B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "42B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38D OR 40C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "42C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>38E OR 40D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "42D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40D OR 40E</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "42E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40E OR 44C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "42F" || valorBusto === "42G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40E OR 42E ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "44AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40B OR 42B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "44A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42B OR 40C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "44B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42C</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "44C") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>40E OR 42D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "44D" || valorBusto === "44E") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42E</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "44F" || valorBusto === "44G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42E + Extender </b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "46AA") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42B + double Extender</b> ' + "these have the same volume and may also fit!" + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "46A") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42B OR 40C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
                    }
                    if (valorBusto === "46B") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>44C OR 42D</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "46C" || valorBusto === "46D") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>44D OR 42E</b> ' + "these have the same volume and may also fit!");
                    }
                    if (valorBusto === "46E" || valorBusto === "46F" || valorBusto === "46G") {
                        $('#detalleRespuesta-complex').html("If your size is unavailable, you can try size " + '<b>42DD + double Extender </b> ' + "these have the same volume and may also fit!");
                    }
                }
                else {
                    $('#SiRespuesta').fadeOut();
                    $('#NoRespuesta').fadeIn();
                    $('.detalleRespuesta').html("");
                }
            });
});


const navSwhiche = document.querySelector('.toggle-state');
const navTabla1 = document.querySelector('.tableActive');
const navTabla2 = document.querySelector('.tableOff');
var activo = 'off';

navSwhiche.addEventListener('click', toggleTablaM);

function toggleTablaM() {
    if (activo == 'off') {
        navTabla1.classList.remove('tableActive');
        navTabla1.classList.add("tableOff");
        activo = 'on';
        navTabla2.classList.add("tableActive");
        navTabla2.classList.remove("tableOff");
    } else {
        navTabla2.classList.remove('tableActive');
        navTabla2.classList.add("tableOff");
        activo = 'off';
        navTabla1.classList.add("tableActive");
        navTabla1.classList.remove("tableOff");
    }
}

