// <![CDATA[
    $(document).ready(function () {
        var control1_cm = $('#control1-cm');
        var control2_cm = $('#control2-cm');
        $('#SiRespuesta-cm').hide();
        $('#NoRespuesta-cm').hide();


        control1_cm.change(function () {
            var inicioBusto_cm = 0;
            var finBusto_cm = 0;
            var valores_cm = "";
            var control1Sel_cm = control1_cm.val();
            switch (control1Sel_cm) {
                case "58":
                    inicioBusto_cm = 58;
                    valores_cm = ["60AA", "60AA", "60AA", "60A", "60A", "60A", "60A", "60B", "60B", "60C", "60C", "60C", "60D", "60D", "60D", "60DD(E)", "60DD(E)", "60DD(E)", "60F", "60F", "60F", "60G", "60G", "60G",];
                    break;
                case "59":
                    inicioBusto_cm = 59;
                    valores_cm = ["60AA", "60AA", "60AA", "60A", "60A", "60A", "60B", "60B", "60B", "60C", "60C", "60C", "60D", "60D", "60D", "60DD(E)", "60DD(E)", "60DD(E)", "60F", "60F", "60F", "60G", "60G", "60G",];
                    break;
                case "60":
                    inicioBusto_cm = 60;
                    valores_cm = ["60AA", "60AA", "60AA", "60AA", "60A", "60A", "60A", "60B", "60B", "60C", "60C", "60C", "60D", "60D", "60D", "60DD(E)", "60DD(E)", "60DD(E)", "60F", "60F", "60F", "60G", "60G", "60G",];
                    break;
                case "61":
                    inicioBusto_cm = 61;
                    valores_cm = ["60AA", "60AA", "60AA", "60A", "60A", "60A", "60B", "60B", "60B", "60C", "60C", "60C", "60D", "60D", "60D", "60DD(E)", "60DD(E)", "60DD(E)", "60F", "60F", "60F", "60G", "60G", "60G",];
                    break;
                case "62":
                    inicioBusto_cm = 62;
                    valores_cm = ["60AA", "60AA", "60AA", "60A", "60A", "60A", "60B", "60B", "60B", "60C", "60C", "60C", "60D", "60D", "60D", "60DD(E)", "60DD(E)", "60DD(E)", "60F", "60F", "60F", "60G", "60G", "60G",];
                    break;
                case "63":
                    inicioBusto_cm = 63;
                    valores_cm = ["65AA", "65AA", "65AA", "65A", "65A", "65A", "65B", "65B", "65B", "65C", "65C", "65C", "65D", "65D", "65D", "65DD(E)", "65DD(E)", "65DD(E)", "65F", "65F", "65F", "65G", "65G", "65G",];
                    break;
                case "64":
                    inicioBusto_cm = 64;
                    valores_cm = ["65AA", "65AA", "65AA", "65A", "65A", "65A", "65B", "65B", "65B", "65C", "65C", "65C", "65C", "65D", "65D", "65DD(E)", "65DD(E)", "65DD(E)", "65F", "65F", "65F", "65G", "65G", "65G",];
                    break;
                case "65":
                    inicioBusto_cm = 65;
                    valores_cm = ["65AA", "65AA", "65AA", "65A", "65A", "65A", "65B", "65B", "65B", "65C", "65C", "65C", "65D", "65D", "65D", "65DD(E)", "65DD(E)", "65DD(E)", "65F", "65F", "65F", "65G", "65G", "65G",];
                    break;
                case "66":
                    inicioBusto_cm = 66;
                    valores_cm = ["65AA", "65AA", "65AA", "65A", "65A", "65B", "65B", "65B", "65B", "65C", "65C", "65C", "65D", "65D", "65D", "65DD(E)", "65DD(E)", "65DD(E)", "65F", "65F", "65F", "65G", "65G", "65G",];
                    break;
                case "67":
                    inicioBusto_cm = 67;
                    valores_cm = ["65AA", "65AA", "65AA", "65A", "65A", "65A", "65B", "65B", "65B", "65B", "65C", "65C", "65D", "65D", "65D", "65DD(E)", "65DD(E)", "65DD(E)", "65F", "65F", "65F", "65G", "65G", "65G",];
                    break;
                case "68":
                    inicioBusto_cm = 68;
                    valores_cm = ["70AA", "70AA", "70AA", "70A", "70A", "70A", "70B", "70B", "70B", "70C", "70C", "70C", "70D", "70D", "70D", "70DD(E)", "70DD(E)", "70DD(E)", "70F", "70F", "70F", "70G", "70G", "70G",];
                    break;
                case "69":
                    inicioBusto_cm = 69;
                    valores_cm = ["70AA", "70AA", "70AA", "70A", "70A", "70A", "70A", "70B", "70B", "70B", "70C", "70C", "70C", "70D", "70D", "70D", "70DD(E)", "70DD(E)", "70DD(E)", "70F", "70F", "70F", "70F", "70F", "70F",];
                    break;
                case "70":
                    inicioBusto_cm = 70;
                    valores_cm = ["70AA", "70AA", "70AA", "70A", "70A", "70A", "70A", "70B", "70B", "70B", "70C", "70C", "70C", "70D", "70D", "70D", "70DD(E)", "70DD(E)", "70DD(E)", "70F", "70F", "70F", "70F", "70F", "70F",];
                    break;
                case "71":
                    inicioBusto_cm = 71;
                    valores_cm = ["70AA", "70AA", "70AA", "70A", "70A", "70A", "70B", "70B", "70B", "70C", "70C", "70C", "70D", "70D", "70D", "70DD(E)", "70DD(E)", "70DD(E)", "70F", "70F", "70F", "70F", "70F", "70F",];
                    break;
                case "72":
                    inicioBusto_cm = 72;
                    valores_cm = ["70AA", "70AA", "70AA", "70A", "70A", "70A", "70B", "70B", "70B", "70C", "70C", "70C", "70D", "70D", "70D", "70DD(E)", "70DD(E)", "70DD(E)", "70F", "70F", "70F", "70F", "70F", "70F",];
                    break;
                case "73":
                    inicioBusto_cm = 73;
                    valores_cm = ["75AA", "75AA", "75AA", "75A", "75A", "75A", "75B", "75B", "75B", "75C", "75C", "75C", "75D", "75D", "75D", "75DD(E)", "75DD(E)", "75DD(E)", "75F", "75F", "75F", "75G", "75G", "75G",];
                    break;
                case "74":
                    inicioBusto_cm = 74;
                    valores_cm = ["75AA", "75AA", "75AA", "75A", "75A", "75A", "75B", "75B", "75B", "75C", "75C", "75C", "75D", "75D", "75DD(E)", "75DD(E)", "75DD(E)", "75DD(E)", "75F", "75F", "75F", "75G", "75G", "75G",];
                    break;
                case "75":
                    inicioBusto_cm = 75;
                    valores_cm = ["75AA", "75AA", "75AA", "75A", "75A", "75A", "75B", "75B", "75B", "75C", "75C", "75C", "75D", "75D", "75DD(E)", "75DD(E)", "75DD(E)", "75DD(E)", "75F", "75F", "75F", "75G", "75G", "75G",];
                    break;
                case "76":
                    inicioBusto_cm = 76;
                    valores_cm = ["75AA", "75AA", "75AA", "75A", "75A", "75A", "75B", "75B", "75B", "75C", "75C", "75C", "75D", "75D", "75DD(E)", "75DD(E)", "75DD(E)", "75DD(E)", "75F", "75F", "75F", "75G", "75G", "75G",];
                    break;
                case "77":
                    inicioBusto_cm = 77;
                    valores_cm = ["75AA", "75AA", "75AA", "75A", "75A", "75A", "75B", "75B", "75B", "75C", "75C", "75C", "75D", "75D", "75DD(E)", "75DD(E)", "75DD(E)", "75DD(E)", "75F", "75F", "75F", "75G", "75G", "75G",];
                    break;
                case "78":
                    inicioBusto_cm = 78;
                    valores_cm = ["80AA", "80AA", "80AA", "80A", "80A", "80A", "80B", "80B", "80B", "80C", "80C", "80C", "80D", "80D", "80D", "80DD(E)", "80DD(E)", "80DD(E)", "80F", "80F", "80F", "80G", "80G", "80G",];
                    break;
                case "79":
                    inicioBusto_cm = 79;
                    valores_cm = ["80AA", "80AA", "80AA", "80A", "80A", "80A", "80B", "80B", "80B", "80C", "80C", "80C", "80D", "80D", "80DD(E)", "80DD(E)", "80DD(E)", "80DD(E)", "80F", "80F", "80F", "80G", "80G", "80G",];
                    break;
                case "80":
                    inicioBusto_cm = 80;
                    valores_cm = ["80AA", "80AA", "80AA", "80A", "80A", "80A", "80B", "80B", "80B", "80C", "80C", "80C", "80D", "80D", "80DD(E)", "80DD(E)", "80DD(E)", "80DD(E)", "80F", "80F", "80F", "80G", "80G", "80G",];
                    break;
                case "81":
                    inicioBusto_cm = 81;
                    valores_cm = ["80AA", "80AA", "80AA", "80A", "80A", "80A", "80B", "80B", "80B", "80C", "80C", "80C", "80D", "80D", "80DD(E)", "80DD(E)", "80DD(E)", "80DD(E)", "80F", "80F", "80F", "80G", "80G", "80G",];
                    break;
                case "82":
                    inicioBusto_cm = 82;
                    valores_cm = ["80AA", "80AA", "80AA", "80A", "80A", "80A", "80B", "80B", "80B", "80C", "80C", "80C", "80D", "80D", "80DD(E)", "80DD(E)", "80DD(E)", "80DD(E)", "80F", "80F", "80F", "80G", "80G", "80G",];
                    break;
                case "83":
                    inicioBusto_cm = 83;
                    valores_cm = ["85AA", "85AA", "85AA", "85A", "85A", "85A", "85B", "85B", "85B", "85C", "85C", "85C", "85D", "85D", "85D", "85DD(E)", "85DD(E)", "85DD(E)", "85F", "85F", "85F", "85G", "85G", "85G",];
                    break;
                case "84":
                    inicioBusto_cm = 84;
                    valores_cm = ["85AA", "85AA", "85AA", "85A", "85A", "85A", "85B", "85B", "85B", "85C", "85C", "85C", "85D", "85D", "85D", "85DD(E)", "85DD(E)", "85DD(E)", "85F", "85F", "85F", "85G", "85G", "85G",];
                    break;
                case "85":
                    inicioBusto_cm = 85;
                    valores_cm = ["85AA", "85AA", "85AA", "85A", "85A", "85A", "85B", "85B", "85B", "85C", "85C", "85C", "85D", "85D", "85D", "85DD(E)", "85DD(E)", "85DD(E)", "85F", "85F", "85F", "85G", "85G", "85G",];
                    break;
                case "86":
                    inicioBusto_cm = 86;
                    valores_cm = ["85AA", "85AA", "85AA", "85A", "85A", "85A", "85B", "85B", "85B", "85C", "85C", "85C", "85D", "85D", "85D", "85DD(E)", "85DD(E)", "85DD(E)", "85F", "85F", "85F", "85G", "85G", "85G",];
                    break;
                case "87":
                    inicioBusto_cm = 87;
                    valores_cm = ["85AA", "85AA", "85AA", "85A", "85A", "85A", "85B", "85B", "85B", "85C", "85C", "85C", "85D", "85D", "85D", "85DD(E)", "85DD(E)", "85DD(E)", "85F", "85F", "85F", "85G", "85G", "85G",];
                    break;
                case "88":
                    inicioBusto_cm = 88;
                    valores_cm = ["90AA", "90AA", "90AA", "90A", "90A", "90A", "90B", "90B", "90B", "90C", "90C", "90C", "90D", "90D", "90D", "90DD(E)", "90DD(E)", "90DD(E)", "90F", "90F", "90F", "90G", "90G", "90G",];
                    break;
                case "89":
                    inicioBusto_cm = 89;
                    valores_cm = ["90AA", "90AA", "90AA", "90A", "90A", "90A", "90B", "90B", "90B", "90C", "90C", "90C", "90D", "90D", "90D", "90DD(E)", "90DD(E)", "90DD(E)", "90F", "90F", "90F", "90G", "90G", "90G",];
                    break;
                case "90":
                    inicioBusto_cm = 90;
                    valores_cm = ["90AA", "90AA", "90AA", "90A", "90A", "90A", "90B", "90B", "90B", "90C", "90C", "90C", "90D", "90D", "90D", "90DD(E)", "90DD(E)", "90DD(E)", "90F", "90F", "90F", "90G", "90G", "90G",];
                    break;
                case "91":
                    inicioBusto_cm = 91;
                    valores_cm = ["90AA", "90AA", "90AA", "90A", "90A", "90A", "90B", "90B", "90B", "90C", "90C", "90C", "90D", "90D", "90D", "90DD(E)", "90DD(E)", "90DD(E)", "90F", "90F", "90F", "90G", "90G", "90G",];
                    break;
                case "92":
                    inicioBusto_cm = 92;
                    valores_cm = ["90AA", "90AA", "90AA", "90A", "90A", "90A", "90B", "90B", "90B", "90C", "90C", "90C", "90D", "90D", "90D", "90DD(E)", "90DD(E)", "90DD(E)", "90F", "90F", "90F", "90G", "90G", "90G",];
                    break;
                case "93":
                    inicioBusto_cm = 93;
                    valores_cm = ["95AA", "95AA", "95AA", "95A", "95A", "95A", "95B", "95B", "95B", "95C", "95C", "95C", "95D", "95D", "95D", "95DD(E)", "95DD(E)", "95DD(E)", "95F", "95F", "95F", "95G", "95G", "95G",];
                    break;
                case "94":
                    inicioBusto_cm = 94;
                    valores_cm = ["95AA", "95AA", "95AA", "95A", "95A", "95A", "95B", "95B", "95B", "95C", "95C", "95C", "95D", "95D", "95DD(E)", "95DD(E)", "95DD(E)", "95DD(E)", "95F", "95F", "95F", "95G", "95G", "95G",];
                    break;
                case "95":
                    inicioBusto_cm = 95;
                    valores_cm = ["95AA", "95AA", "95AA", "95A", "95A", "95A", "95B", "95B", "95B", "95C", "95C", "95C", "95D", "95D", "95DD(E)", "95DD(E)", "95DD(E)", "95DD(E)", "95F", "95F", "95F", "95G", "95G", "95G",];
                    break;
                case "96":
                    inicioBusto_cm = 96;
                    valores_cm = ["95AA", "95AA", "95AA", "95A", "95A", "95A", "95B", "95B", "95B", "95C", "95C", "95C", "95D", "95D", "95DD(E)", "95DD(E)", "95DD(E)", "95DD(E)", "95F", "95F", "95F", "95G", "95G", "95G",];
                    break;
                case "97":
                    inicioBusto_cm = 97;
                    valores_cm = ["95AA", "95AA", "95AA", "95A", "95A", "95A", "95B", "95B", "95B", "95C", "95C", "95C", "95D", "95D", "95DD(E)", "95DD(E)", "95DD(E)", "95DD(E)", "95F", "95F", "95F", "95G", "95G", "95G",];
                    break;
                case "98":
                    inicioBusto_cm = 98;
                    valores_cm = ["100AA", "100AA", "100AA", "100A", "100A", "100A", "100B", "100B", "100B", "100C", "100C", "100C", "100D", "100D", "100D", "100DD(E)", "100DD(E)", "100DD(E)", "100F", "100F", "100F", "100G", "100G", "100G",];
                    break;
                case "99":
                    inicioBusto_cm = 99;
                    valores_cm = ["100AA", "100AA", "100AA", "100A", "100A", "100A", "100B", "100B", "100B", "100C", "100C", "100C", "100D", "100D", "100D", "100DD(E)", "100DD(E)", "100DD(E)", "100F", "100F", "100F", "100G", "100G", "100G",];
                    break;
                case "100":
                    inicioBusto_cm = 100;
                    valores_cm = ["100AA", "100AA", "100AA", "100A", "100A", "100A", "100B", "100B", "100B", "100C", "100C", "100C", "100D", "100D", "100D", "100DD(E)", "100DD(E)", "100DD(E)", "100F", "100F", "100F", "100G", "100G", "100G",];
                    break;
                case "101":
                    inicioBusto_cm = 101;
                    valores_cm = ["100AA", "100AA", "100AA", "100A", "100A", "100A", "100B", "100B", "100B", "100C", "100C", "100C", "100D", "100D", "100D", "100DD(E)", "100DD(E)", "100DD(E)", "100F", "100F", "100F", "100G", "100G", "100G",];
                    break;
                case "102":
                    inicioBusto_cm = 102;
                    valores_cm = ["100AA", "100AA", "100AA", "100A", "100A", "100A", "100B", "100B", "100B", "100C", "100C", "100C", "100D", "100D", "100D", "100DD(E)", "100DD(E)", "100DD(E)", "100F", "100F", "100F", "100G", "100G", "100G",];
                    break;
                case "103":
                    inicioBusto_cm = 103;
                    valores_cm = ["105AA", "105AA", "105AA", "105A", "105A", "105A", "105B", "105B", "105B", "105C", "105C", "105C", "105D", "105D", "105D", "105DD(E)", "105DD(E)", "105DD(E)", "105F", "105F", "105F", "105G", "105G", "105G",];
                    break;
                case "104":
                    inicioBusto_cm = 104;
                    valores_cm = ["105AA", "105AA", "105AA", "105A", "105A", "105A", "105B", "105B", "105B", "105C", "105C", "105C", "105D", "105D", "105D", "105DD(E)", "105DD(E)", "105DD(E)", "105F", "105F", "105F", "105G", "105G", "105G",];
                    break;
                case "105":
                    inicioBusto_cm = 105;
                    valores_cm = ["105AA", "105AA", "105AA", "105A", "105A", "105A", "105B", "105B", "105B", "105C", "105C", "105C", "105D", "105D", "105D", "105DD(E)", "105DD(E)", "105DD(E)", "105F", "105F", "105F", "105G", "105G", "105G",];
                    break;
                case "106":
                    inicioBusto_cm = 106;
                    valores_cm = ["105AA", "105AA", "105AA", "105A", "105A", "105A", "105B", "105B", "105B", "105C", "105C", "105C", "105D", "105D", "105D", "105DD(E)", "105DD(E)", "105DD(E)", "105F", "105F", "105F", "105G", "105G", "105G",];
                    break;
                case "107":
                    inicioBusto_cm = 107;
                    valores_cm = ["105AA", "105AA", "105AA", "105A", "105A", "105A", "105B", "105B", "105B", "105C", "105C", "105C", "105D", "105D", "105D", "105DD(E)", "105DD(E)", "105DD(E)", "105F", "105F", "105F", "105G", "105G", "105G",];
                    break;

                default:
                    inicioBusto_cm = 0;
                    valores_cm = "";
            }
            control2_cm.html('');
            control2_cm.append('<option value="0">BUST (cm)</option>');
            control2_cm.prop("disabled", false);
            if (valores_cm.length > 1) {
                //Crear opciones de segundo control
                var contadorArray = 0;
                for (var i = 58; i <= 107; i++) {
                    if (inicioBusto_cm == i) {
                        if (valores_cm[contadorArray] != null) {
                            control2_cm.append('<option value="' + valores_cm[contadorArray] + '">' + i + '</option>');
                            inicioBusto_cm++;
                            contadorArray++;
                        } else {
                            control2_cm.append('<option value="0">' + i + '</option>');
                        }
                    } else {
                        control2_cm.append('<option value="0">' + i + '</option>');
                    }
                }
                /*for(var i in valores){
                  control2.append('<option value="'+valores[i]+'">'+inicioBusto+'</option>');
                  inicioBusto++;
                }       */
            } else {
                $('#NoRespuesta-cm').fadeOut();
                $('#SiRespuesta-cm').fadeOut();
                $('.detalleRespuesta-cm').html("");
                $('#detalleRespuesta-complex-cm').html("");
                for (var i = 27; i <= 53; i++) {
                    control2_cm.append('<option value="0">' + i + '</option>');
                }
            }
        });

        control2_cm.change(function () {
            var valorBusto_cm = control2_cm.val();
            if (valorBusto_cm != "0") {
                $('#detalleRespuesta-cm').html(valorBusto_cm);
                $('#detalleRespuesta-complex-cm').html("");

                $('#SiRespuesta-cm').fadeIn();
                $('#NoRespuesta-cm').fadeOut();
                if (valorBusto_cm === "60AA" || valorBusto_cm === "60A" || valorBusto_cm === "60B" || valorBusto_cm === "60C" || valorBusto_cm === "60D" || valorBusto_cm === "60DD(E)" || valorBusto_cm === "60F" || valorBusto_cm === "60G" || valorBusto_cm === "65AA" || valorBusto_cm === "65F" || valorBusto_cm === "65G" || valorBusto_cm === "70AA" || valorBusto_cm === "70G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, we recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "65A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>65B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "65B" || valorBusto_cm === "65C" || valorBusto_cm === "75AA" || valorBusto_cm === "75A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>70B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "65D" || valorBusto_cm === "65DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>70C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "70A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>65B OR 70B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "70B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>65C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "70C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "70D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "70DD(E)" || valorBusto_cm === "70F") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "75B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>70C OR 75C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "75C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>70D OR 80B</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "75D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80C OR 85B</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "75DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80D OR 85C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "75F" || valorBusto_cm === "75G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80DD(E) OR 85D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "80AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75B OR 70C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "80A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75B OR 80B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "80B" || valorBusto_cm === "80C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75C OR 70D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "80D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>75DD(E) OR 85C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "80DD(E)" || valorBusto_cm === "80F") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85C OR 85D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "80G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85DD(E) OR 90C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "85AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80B OR 75C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "85A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80B OR 75C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "85B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80C OR 75D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "85C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80D OR 90B</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "85D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80DD(E) OR 90C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "85DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90C OR 90D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "85F" || valorBusto_cm === "85G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90D OR 90DD(E)</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "90AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80B OR 85B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "90A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85B OR 80C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "90B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>80D OR 85C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "90C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "90D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85DD(E) OR 95C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "90DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95C OR 95D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "90F" || valorBusto_cm === "90G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90DD(E) OR 95DD(E)</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "95AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85B, 85C OR 90B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "95A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85B OR 90B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "95B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85D OR 90C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "95C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>85DD(E) OR 90D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "95D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90D OR 90DD(E)</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "95DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90DD(E) OR 100C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "95F" || valorBusto_cm === "95G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90DD(E) OR 95DD(E) ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "100AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90B OR 95B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "100A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95B OR 90C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "100B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95C</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "100C") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>90DD(E) OR 95D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "100D" || valorBusto_cm === "100DD(E)") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95DD(E)</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "100F" || valorBusto_cm === "100G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95DD(E) + Extender </b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "105AA") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95B + double Extender</b> ' + "these have the same volume and may also fit!" + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "105A") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95B OR 90C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a https://leonisa.eu/en-eu/collections/sujetadores-bralettes"> <u>Check them out!</u></a>');
                }
                if (valorBusto_cm === "105B") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>100C OR 95D</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "105C" || valorBusto_cm === "105D") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>100D OR 95DD(E)</b> ' + "these have the same volume and may also fit!");
                }
                if (valorBusto_cm === "105DD(E)" || valorBusto_cm === "105F" || valorBusto_cm === "105G") {
                    $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>95DD + double Extender </b> ' + "these have the same volume and may also fit!");
                }
            }
            else {
                $('#SiRespuesta-cm').fadeOut();
                $('#NoRespuesta-cm').fadeIn();
                $('.detalleRespuesta-cm').html("");
            }
        });
    });