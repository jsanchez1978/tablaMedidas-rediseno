 $(document).ready(function () {
            var control1 = $('#control1');
            var control2 = $('#control2');
            var control3 = $('#control3');
            var control4 = $('#control4');
            $('#SiRespuesta').hide();
            $('#NoRespuesta').hide();
            $('#SiRespuesta2').hide();
            $('#NoRespuesta2').hide();


     $(document).ready(function () {
         $('#SiRespuesta, #SiRespuesta2').hide();
         var swAbrirCerrarMedir = 0;
         $('.comomedir').click(function () {
             if (swAbrirCerrarMedir == 0) {
                 $('.comomedir').addClass("open");
                 swAbrirCerrarMedir = 1;
             } else {
                 $('.comomedir').removeClass("open");
                 swAbrirCerrarMedir = 0;
             }
             $(".contenedorPasos").slideToggle("slow");
         });
         var nSize = "NO RESULT FOR THIS COMBINATION"
         var talla = [
             ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["XS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["S", "S", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["M", "M", "M", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["L", "L", "L", "L", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["XL", "XL", "XL", "XL", "XL", "XL", "2XL", "3XL", "4XL", "5XL"],
             ["2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "2XL", "3XL", "4XL", "5XL"],
             ["3XL", "3XL", "3XL", "3XL", "3XL", "3XL", "3XL", "3XL", "4XL", "5XL"],
             ["4XL", "4XL", "4XL", "4XL", "4XL", "4XL", "4XL", "4XL", "4XL", "5XL"],
             ["5XL", "5XL", "5XL", "5XL", "5XL", "5XL", "5XL", "5XL", "5XL", "5XL"],
         ];
         $('#control1, #control3').on('change', function () {
             $('#control2, #control4').prop('disabled', this.value === '').find('option:first').prop('selected', true).val('').trigger('change');
             $('#SiRespuesta, #SiRespuesta2').fadeOut();
         });

         $('#control2, #control4').change(function () {
             var sel2 = this.value;
             var sel1 = $('select#control1, #control3')[0].value;
             if (sel2 === "") {
                 $('#SiRespuesta, #SiRespuesta2').fadeOut();
             }
             else {
                 if (sel1 != "" && sel2 != "") {
                     var valorBusto = talla[parseInt(sel1)][parseInt(sel2)];
                     if (valorBusto === nSize) {
                         $('div.tituloRespuesta').css("display", "none");
                         $('#SiRespuesta, #SiRespuesta2').removeClass("respuestaAfirmativa").addClass("respuestaNegada");
                     }
                     else {
                         $('div.tituloRespuesta').css("display", "block");
                         $('#SiRespuesta, #SiRespuesta2').removeClass("respuestaNegada").addClass("respuestaAfirmativa");
                     }
                     $('#detalleRespuesta, #detalleRespuesta2').html(valorBusto);
                     $('#SiRespuesta, #SiRespuesta2').fadeIn();
                     document.getElementById("info-text").style.display = "block";
                 }
                 else {
                     $('#detalleRespuesta, #detalleRespuesta2').html(nSize);

                 }
             }
         });
         $('#control1, #control3').change(function () {
             $('#control2, #control4')[0].value = "";
             $('#SiRespuesta, #SiRespuesta2').fadeOut();
         });
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

        

        $('#control2, #control4')[0].value = "";
        $('#SiRespuesta, #SiRespuesta2').fadeOut();
    } else {
        navTabla2.classList.remove('tableActive');
        navTabla2.classList.add("tableOff");
        activo = 'off';
        navTabla1.classList.add("tableActive");
        navTabla1.classList.remove("tableOff");

        $('#control2, #control4')[0].value = "";
        $('#SiRespuesta, #SiRespuesta2').fadeOut(); 

    }
}

