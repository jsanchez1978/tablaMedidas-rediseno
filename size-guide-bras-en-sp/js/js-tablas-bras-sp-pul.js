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
                    case "29":
                        inicioBusto = 30;
                        valores = ["30A", "30B",];
                        break;
                    case "30":
                        inicioBusto = 31;
                        valores = ["30A", "30B",];
                        break;
                    case "31":
                        inicioBusto = 32;
                        valores = ["32A", "32B", "32C", "32D",];
                        break;
                    case "32":
                        inicioBusto = 33;
                        valores = ["32A", "32B", "32C", "32D",];
                        break;
                    case "33":
                        inicioBusto = 34;
                        valores = ["34A", "34B", "34C", "34D", "34DD(E)",];
                        break;
                    case "34":
                        inicioBusto = 35;
                        valores = ["34A", "34B", "34C", "34D", "34DD(E)",];
                        break;
                    case "35":
                        inicioBusto = 36;
                        valores = ["36A", "36B", "36C", "36D", "36DD(E)",];
                        break;
                    case "36":
                        inicioBusto = 37;
                        valores = ["36A", "36B", "36C", "36D", "36DD(E)",];
                        break;
                    case "37":
                        inicioBusto = 38;
                        valores = ["38A", "38B", "38C", "38D", "38DD(E)",];
                        break;
                    case "38":
                        inicioBusto = 39;
                        valores = ["38A", "38B", "38C", "38D", "38DD(E)",];
                        break;
                    case "39":
                        inicioBusto = 40;
                        valores = ["40A", "40B", "40C", "40D", "40DD(E)",];
                        break;
                    case "40":
                        inicioBusto = 41;
                        valores = ["40A", "40B", "40C", "40D", "40DD(E)",];
                        break;
                    case "41":
                        inicioBusto = 42;
                        valores = ["42A", "42B", "42C", "42D", "42DD(E)",];
                        break;
                    case "42":
                        inicioBusto = 43;
                        valores = ["42A", "42B", "42C", "42D", "42DD(E)",];
                        break;

                    default:
                        inicioBusto = 0;
                        valores = "";
                }
                control2.html('');
                control2.append('<option value="0">BUSTO (pul.)</option>');
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
             if (valorBusto === "32B") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla S." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "34B") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla M." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "32C") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla M." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "34C") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla M." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "34D") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla L." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "36D") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla L." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "36B") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla M." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "36C") {
                 $('#detalleRespuesta-complex').html("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla L." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "38D") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "38B") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla L." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "38C") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "38DD") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 2XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "40B") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "40C") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 2XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "40D") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 2XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "40DD") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 3XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "42B") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 2XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "42C") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 3XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "42D") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 3XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
             }
             if (valorBusto === "42DD") {
                 $('#detalleRespuesta-complex').hhtml("Si su talla no está disponible, puede probar nuestros bralettes y/o sujetadores deportivos en talla 3XL." + '<a href="/collections/bralette"> <u>¡Conócelos!</u></a>');
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

