$(document).ready(function () {
    var control1cm = $('#control1cm');
    var control2cm = $('#control2cm');
    $('#SiRespuestacm').hide();
    $('#NoRespuestacm').hide();


    $(document).ready(function () {
        $('#SiRespuestacm').hide();
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
        $('#control1cm').on('change', function () {
            $('#control2cm').prop('disabled', this.value === '').find('option:first').prop('selected', true).val('').trigger('change');
            $('#SiRespuestacm').fadeOut();
        });

        $('#control2cm').change(function () {
            var sel2 = this.value;
            var sel1 = $('select#control1cm')[0].value;
            if (sel2 === "") {
                $('#SiRespuestacm').fadeOut();
            }
            else {
                if (sel1 != "" && sel2 != "") {
                    var valorBusto = talla[parseInt(sel1)][parseInt(sel2)];
                    if (valorBusto === nSize) {
                        $('div.tituloRespuesta').css("display", "none");
                        $('#SiRespuestacm').removeClass("respuestaAfirmativa").addClass("respuestaNegada");
                    }
                    else {
                        $('div.tituloRespuesta').css("display", "block");
                        $('#SiRespuestacm').removeClass("respuestaNegada").addClass("respuestaAfirmativa");
                    }
                    $('#detalleRespuesta').html(valorBusto);
                    $('#SiRespuestacm').fadeIn();
                    document.getElementById("info-text").style.display = "block";
                }
                else {
                    $('#detalleRespuesta').html(nSize);

                }
            }
        });
        $('#control1cm').change(function () {
            $('#control2cm')[0].value = "";
            $('#SiRespuestacm').fadeOut();
        });
    });
});

