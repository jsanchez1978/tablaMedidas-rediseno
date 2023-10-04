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
            case "58": //es el valor de 58
                inicioBusto_cm = 66;
                valores_cm = ["28AA", "28AA", "28AA", "28A", "28A", "28A", "28A", "28B", "28B", "28C", "28C", "28C", "28D", "28D", "28D", "28E", "28E", "28E", "28F", "28F", "28F", "28G", "28G", "28G",];
                break;
            case "59": //es el valor de 59
                inicioBusto_cm = 67;
                valores_cm = ["28AA", "28AA", "28AA", "28A", "28A", "28A", "28A", "28B", "28B", "28C", "28C", "28C", "28D", "28D", "28D", "28E", "28E", "28E", "28F", "28F", "28F", "28G", "28G", "28G",];
                break;
            case "60": //es el valor de 60
                inicioBusto_cm = 68;
                valores_cm = ["28AA", "28AA", "28AA", "28A", "28A", "28A", "28A", "28B", "28B", "28C", "28C", "28C", "28D", "28D", "28D", "28E", "28E", "28E", "28F", "28F", "28F", "28G", "28G", "28G",];
                break;
            case "61": //es el valor de 61
                inicioBusto_cm = 69;
                valores_cm = ["28AA", "28AA", "28AA", "28A", "28A", "28A", "28A", "28B", "28B", "28C", "28C", "28C", "28D", "28D", "28D", "28E", "28E", "28E", "28F", "28F", "28F", "28G", "28G", "28G",];
                break;
            case "62": //es el valor de 62
                inicioBusto_cm = 70;
                valores_cm = ["28AA", "28AA", "28AA", "28A", "28A", "28A", "28A", "28B", "28B", "28C", "28C", "28C", "28D", "28D", "28D", "28E", "28E", "28E", "28F", "28F", "28F", "28G", "28G", "28G",];
                break;
            case "63": //es el valor de 63
                inicioBusto_cm = 71;
                valores_cm = ["30AA", "30AA", "30AA", "30A", "30A", "30A", "30B", "30B", "30B", "30C", "30C", "30C", "30D", "30D", "30D", "30E", "30E", "30E", "30F", "30F", "30F", "30G", "30G", "30G",];
                break;
            case "64": //es el valor de 64
                inicioBusto_cm = 72;
                valores_cm = ["30AA", "30AA", "30AA", "30A", "30A", "30A", "30B", "30B", "30B", "30C", "30C", "30C", "30D", "30D", "30D", "30E", "30E", "30E", "30F", "30F", "30F", "30G", "30G", "30G",];
                break;
            case "65": //es el valor de 65
                inicioBusto_cm = 73;
                valores_cm = ["30AA", "30AA", "30AA", "30A", "30A", "30A", "30B", "30B", "30B", "30C", "30C", "30C", "30D", "30D", "30D", "30E", "30E", "30E", "30F", "30F", "30F", "30G", "30G", "30G",];
                break;
            case "66": //es el valor de 66
                inicioBusto_cm = 74;
                valores_cm = ["30AA", "30AA", "30AA", "30A", "30A", "30A", "30B", "30B", "30B", "30C", "30C", "30C", "30D", "30D", "30D", "30E", "30E", "30E", "30F", "30F", "30F", "30G", "30G", "30G",];
                break;
            case "67": //es el valor de 67
                inicioBusto_cm = 75;
                valores_cm = ["30AA", "30AA", "30AA", "30A", "30A", "30A", "30B", "30B", "30B", "30C", "30C", "30C", "30D", "30D", "30D", "30E", "30E", "30E", "30F", "30F", "30F", "30G", "30G", "30G",];
                break;
            case "68": //es el valor de 68
                inicioBusto_cm = 76;
                valores_cm = ["32AA", "32AA", "32AA", "32A", "32A", "32A", "32B", "32B", "32B", "32C", "32C", "32C", "32D", "32D", "32D", "32E", "32E", "32E", "32F", "32F", "32F", "32G", "32G", "32G",];
                break;
            case "69": //es el valor de 69
                inicioBusto_cm = 76;
                valores_cm = ["32AA", "32AA", "32AA", "32A", "32A", "32A", "32A", "32B", "32B", "32B", "32C", "32C", "32C", "32D", "32D", "32D", "32E", "32E", "32E", "32F", "32F", "32F", "32G", "32G", "32G",];
                break;
            case "70": //es el valor de 70
                inicioBusto_cm = 77;
                valores_cm = ["32AA", "32AA", "32AA", "32A", "32A", "32A", "32A", "32B", "32B", "32B", "32C", "32C", "32C", "32D", "32D", "32D", "32E", "32E", "32E", "32F", "32F", "32F", "32G", "32G", "32G",];
                break;
            case "71": //es el valor de 71
                inicioBusto_cm = 79;
                valores_cm = ["32AA", "32AA", "32AA", "32A", "32A", "32A", "32B", "32B", "32B", "32C", "32C", "32C", "32D", "32D", "32D", "32E", "32E", "32E", "32F", "32F", "32F", "32G", "32G", "32G",];
                break;
            case "72": //es el valor de 72
                inicioBusto_cm = 80;
                valores_cm = ["32AA", "32AA", "32AA", "32A", "32A", "32A", "32B", "32B", "32B", "32C", "32C", "32C", "32D", "32D", "32D", "32E", "32E", "32E", "32F", "32F", "32F", "32G", "32G", "32G",];
                break;
            case "73": //es el valor de 73
                inicioBusto_cm = 81;
                valores_cm = ["34AA", "34AA", "34AA", "34A", "34A", "34A", "34B", "34B", "34B", "34C", "34C", "34C", "34D", "34D", "34D", "34E", "34E", "34E", "34F", "34F", "34F", "34G", "34G", "34G",];
                break;
            case "74": //es el valor de 74
                inicioBusto_cm = 82;
                valores_cm = ["34AA", "34AA", "34AA", "34A", "34A", "34A", "34B", "34B", "34B", "34C", "34C", "34C", "34D", "34D", "34D", "34E", "34E", "34E", "34F", "34F", "34F", "34G", "34G", "34G",];
                break;
            case "75": //es el valor de 75
                inicioBusto_cm = 83;
                valores_cm = ["34AA", "34AA", "34AA", "34A", "34A", "34A", "34B", "34B", "34B", "34C", "34C", "34C", "34D", "34D", "34D", "34E", "34E", "34E", "34F", "34F", "34F", "34G", "34G", "34G",];
                break;
            case "76": //es el valor de 76
                inicioBusto_cm = 84;
                valores_cm = ["34AA", "34AA", "34AA", "34A", "34A", "34A", "34B", "34B", "34B", "34C", "34C", "34C", "34D", "34D", "34D", "34E", "34E", "34E", "34F", "34F", "34F", "34G", "34G", "34G",];
                break;
            case "77": //es el valor de 77
                inicioBusto_cm = 85;
                valores_cm = ["34AA", "34AA", "34AA", "34A", "34A", "34A", "34B", "34B", "34B", "34C", "34C", "34C", "34D", "34D", "34D", "34E", "34E", "34E", "34F", "34F", "34F", "34G", "34G", "34G",];
                break;
            case "78": //es el valor de 78
                inicioBusto_cm = 86;
                valores_cm = ["36AA", "36AA", "36AA", "36A", "36A", "36A", "36B", "36B", "36B", "36C", "36C", "36C", "36D", "36D", "36D", "36E", "36E", "36E", "36F", "36F", "36F", "36G", "36G", "36G",];
                break;
            case "79": //es el valor de 79
                inicioBusto_cm = 87;
                valores_cm = ["36AA", "36AA", "36AA", "36A", "36A", "36A", "36B", "36B", "36B", "36C", "36C", "36C", "36D", "36D", "36D", "36E", "36E", "36E", "36F", "36F", "36F", "36G", "36G", "36G",];
                break;
            case "80": //es el valor de 80
                inicioBusto_cm = 88;
                valores_cm = ["36AA", "36AA", "36AA", "36A", "36A", "36A", "36B", "36B", "36B", "36C", "36C", "36C", "36D", "36D", "36D", "36E", "36E", "36E", "36F", "36F", "36F", "36G", "36G", "36G",];
                break;
            case "81": //es el valor de 81
                inicioBusto_cm = 89;
                valores_cm = ["36AA", "36AA", "36AA", "36A", "36A", "36A", "36B", "36B", "36B", "36C", "36C", "36C", "36D", "36D", "36D", "36E", "36E", "36E", "36F", "36F", "36F", "36G", "36G", "36G",];
                break;
            case "82": //es el valor de 82
                inicioBusto_cm = 90;
                valores_cm = ["36AA", "36AA", "36AA", "36A", "36A", "36A", "36B", "36B", "36B", "36C", "36C", "36C", "36D", "36D", "36D", "36E", "36E", "36E", "36F", "36F", "36F", "36G", "36G", "36G",];
                break;
            case "83": //es el valor de 83
                inicioBusto_cm = 91;
                valores_cm = ["38AA", "38AA", "38AA", "38A", "38A", "38A", "38B", "38B", "38B", "38C", "38C", "38C", "38D", "38D", "38D", "38E", "38E", "38E", "38F", "38F", "38F", "38G", "38G", "38G",];
                break;
            case "84": //es el valor de 84
                inicioBusto_cm = 92;
                valores_cm = ["38AA", "38AA", "38AA", "38A", "38A", "38A", "38B", "38B", "38B", "38C", "38C", "38C", "38D", "38D", "38D", "38E", "38E", "38E", "38F", "38F", "38F", "38G", "38G", "38G",];
                break;
            case "85": //es el valor de 85
                inicioBusto_cm = 93;
                valores_cm = ["38AA", "38AA", "38AA", "38A", "38A", "38A", "38B", "38B", "38B", "38C", "38C", "38C", "38D", "38D", "38D", "38E", "38E", "38E", "38F", "38F", "38F", "38G", "38G", "38G",];
                break;
            case "86": //es el valor de 86
                inicioBusto_cm = 94;
                valores_cm = ["38AA", "38AA", "38AA", "38A", "38A", "38A", "38B", "38B", "38B", "38C", "38C", "38C", "38D", "38D", "38D", "38E", "38E", "38E", "38F", "38F", "38F", "38G", "38G", "38G",];
                break;
            case "87": //es el valor de 87
                inicioBusto_cm = 95;
                valores_cm = ["38AA", "38AA", "38AA", "38A", "38A", "38A", "38B", "38B", "38B", "38C", "38C", "38C", "38D", "38D", "38D", "38E", "38E", "38E", "38F", "38F", "38F", "38G", "38G", "38G",];
                break;
            case "88": //es el valor de 88
                inicioBusto_cm = 96;
                valores_cm = ["40AA", "40AA", "40AA", "40A", "40A", "40A", "40B", "40B", "40B", "40C", "40C", "40C", "40D", "40D", "40D", "40E", "40E", "40E", "40F", "40F", "40F", "40G", "40G", "40G",];
                break;
            case "89": //es el valor de 89
                inicioBusto_cm = 97;
                valores_cm = ["40AA", "40AA", "40AA", "40A", "40A", "40A", "40B", "40B", "40B", "40C", "40C", "40C", "40D", "40D", "40D", "40E", "40E", "40E", "40F", "40F", "40F", "40G", "40G", "40G",];
                break;
            case "90": //es el valor de 90
                inicioBusto_cm = 98;
                valores_cm = ["40AA", "40AA", "40AA", "40A", "40A", "40A", "40B", "40B", "40B", "40C", "40C", "40C", "40D", "40D", "40D", "40E", "40E", "40E", "40F", "40F", "40F", "40G", "40G", "40G",];
                break;
            case "91": //es el valor de 91
                inicioBusto_cm = 99;
                valores_cm = ["40AA", "40AA", "40AA", "40A", "40A", "40A", "40B", "40B", "40B", "40C", "40C", "40C", "40D", "40D", "40D", "40E", "40E", "40E", "40F", "40F", "40F", "40G", "40G", "40G",];
                break;
            case "92": //es el valor de 92
                inicioBusto_cm = 100;
                valores_cm = ["40AA", "40AA", "40AA", "40A", "40A", "40A", "40B", "40B", "40B", "40C", "40C", "40C", "40D", "40D", "40D", "40E", "40E", "40E", "40F", "40F", "40F", "40G", "40G", "40G",];
                break;
            case "93": //es el valor de 93
                inicioBusto_cm = 101;
                valores_cm = ["42AA", "42AA", "42AA", "42A", "42A", "42A", "42B", "42B", "42B", "42C", "42C", "42C", "42D", "42D", "42D", "42E", "42E", "42E", "42F", "42F", "42F", "42G", "42G", "42G",];
                break;
            case "94": //es el valor de 94
                inicioBusto_cm = 102;
                valores_cm = ["42AA", "42AA", "42AA", "42A", "42A", "42A", "42B", "42B", "42B", "42C", "42C", "42C", "42D", "42D", "42D", "42E", "42E", "42E", "42F", "42F", "42F", "42G", "42G", "42G",];
                break;
            case "95": //es el valor de 95
                inicioBusto_cm = 103;
                valores_cm = ["42AA", "42AA", "42AA", "42A", "42A", "42A", "42B", "42B", "42B", "42C", "42C", "42C", "42D", "42D", "42D", "42E", "42E", "42E", "42F", "42F", "42F", "42G", "42G", "42G",];
                break;
            case "96": //es el valor de 96
                inicioBusto_cm = 104;
                valores_cm = ["42AA", "42AA", "42AA", "42A", "42A", "42A", "42B", "42B", "42B", "42C", "42C", "42C", "42D", "42D", "42D", "42E", "42E", "42E", "42F", "42F", "42F", "42G", "42G", "42G",];
                break;
            case "97": //es el valor de 97
                inicioBusto_cm = 105;
                valores_cm = ["42AA", "42AA", "42AA", "42A", "42A", "42A", "42B", "42B", "42B", "42C", "42C", "42C", "42D", "42D", "42D", "42E", "42E", "42E", "42F", "42F", "42F", "42G", "42G", "42G",];
                break;
            case "98": //es el valor de 98
                inicioBusto_cm = 106;
                valores_cm = ["44AA", "44AA", "44AA", "44A", "44A", "44A", "44B", "44B", "44B", "44C", "44C", "44C", "44D", "44D", "44D", "44E", "44E", "44E", "44F", "44F", "44F", "44G", "44G", "44G",];
                break;
            case "99": //es el valor de 99
                inicioBusto_cm = 107;
                valores_cm = ["44AA", "44AA", "44AA", "44A", "44A", "44A", "44B", "44B", "44B", "44C", "44C", "44C", "44D", "44D", "44D", "44E", "44E", "44E", "44F", "44F", "44F", "44G", "44G", "44G",];
                break;
            case "100": //es el valor de 100
                inicioBusto_cm = 108;
                valores_cm = ["44AA", "44AA", "44AA", "44A", "44A", "44A", "44B", "44B", "44B", "44C", "44C", "44C", "44D", "44D", "44D", "44E", "44E", "44E", "44F", "44F", "44F", "44G", "44G", "44G",];
                break;
            case "101": //es el valor de 101
                inicioBusto_cm = 109;
                valores_cm = ["44AA", "44AA", "44AA", "44A", "44A", "44A", "44B", "44B", "44B", "44C", "44C", "44C", "44D", "44D", "44D", "44E", "44E", "44E", "44F", "44F", "44F", "44G", "44G", "44G",];
                break;
            case "102": //es el valor de 102
                inicioBusto_cm = 110;
                valores_cm = ["44AA", "44AA", "44AA", "44A", "44A", "44A", "44B", "44B", "44B", "44C", "44C", "44C", "44D", "44D", "44D", "44E", "44E", "44E", "44F", "44F", "44F", "44G", "44G", "44G",];
                break;
            case "103": //es el valor de 103
                inicioBusto_cm = 111;
                valores_cm = ["46AA", "46AA", "46AA", "46A", "46A", "46A", "46B", "46B", "46B", "46C", "46C", "46C", "46D", "46D", "46D", "46E", "46E", "46E", "46F", "46F", "46F", "46G", "46G", "46G",];
                break;
            case "104": //es el valor de 103
                inicioBusto_cm = 112;
                valores_cm = ["46AA", "46AA", "46AA", "46A", "46A", "46A", "46B", "46B", "46B", "46C", "46C", "46C", "46D", "46D", "46D", "46E", "46E", "46E", "46F", "46F", "46F", "46G", "46G", "46G",];
                break;
            case "105": //es el valor de 103
                inicioBusto_cm = 113;
                valores_cm = ["46AA", "46AA", "46AA", "46A", "46A", "46A", "46B", "46B", "46B", "46C", "46C", "46C", "46D", "46D", "46D", "46E", "46E", "46E", "46F", "46F", "46F", "46G", "46G", "46G",];
                break;
            case "106": //es el valor de 103
                inicioBusto_cm = 114;
                valores_cm = ["46AA", "46AA", "46AA", "46A", "46A", "46A", "46B", "46B", "46B", "46C", "46C", "46C", "46D", "46D", "46D", "46E", "46E", "46E", "46F", "46F", "46F", "46G", "46G", "46G",];
                break;
            case "107": //es el valor de 103
                inicioBusto_cm = 115;
                valores_cm = ["46AA", "46AA", "46AA", "46A", "46A", "46A", "46B", "46B", "46B", "46C", "46C", "46C", "46D", "46D", "46D", "46E", "46E", "46E", "46F", "46F", "46F", "46G", "46G", "46G",];
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
            for (var i = 66; i <= 138; i++) {
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
        } else {
            $('#NoRespuesta-cm').fadeOut();
            $('#SiRespuesta-cm').fadeOut();
            $('.detalleRespuesta-cm').html("");
            $('#detalleRespuesta-complex-cm').html("");
            for (var i = 66; i <= 138; i++) {
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
            if (valorBusto_cm === "28AA" || valorBusto_cm === "28A" || valorBusto_cm === "28B" || valorBusto_cm === "28C" || valorBusto_cm === "28D" || valorBusto_cm === "28E" || valorBusto_cm === "28F" || valorBusto_cm === "28G" || valorBusto_cm === "30AA" || valorBusto_cm === "30F" || valorBusto_cm === "30G" || valorBusto_cm === "32AA" || valorBusto_cm === "32G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, we recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "30A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>30B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "30B" || valorBusto_cm === "30C" || valorBusto_cm === "34AA" || valorBusto_cm === "34A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>32B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "30D" || valorBusto_cm === "30E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>32C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "32A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>30B OR 32B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "32B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>30C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "32C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "32D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "32E" || valorBusto_cm === "32F") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "34B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>32C OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "34C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>32D OR 36B</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "34D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36C OR 38B</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "34E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36D OR 38C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "34F" || valorBusto_cm === "34G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36E OR 38D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "36AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34B OR 32C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "36A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34B OR 36B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "36B" || valorBusto_cm === "36C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34C OR 32D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "36D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>34E OR 38C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "36E" || valorBusto_cm === "36F") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38C OR 38D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "36G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38E OR 40C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "38AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36B OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "38A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36B OR 34C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "38B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36C OR 34D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "38C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36D OR 40B</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "38D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36E OR 40C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "38E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40C OR 40D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "38F" || valorBusto_cm === "38G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40D OR 40E</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "40AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36B OR 38B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "40A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38B OR 36C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "40B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>36D OR 38C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "40C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "40D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38E OR 42C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "40E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42C OR 42D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "40F" || valorBusto_cm === "40G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40E OR 42E</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "42AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38B, 38C OR 40B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "42A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38B OR 40B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "42B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38D OR 40C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "42C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>38E OR 40D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "42D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40D OR 40E</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "42E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40E OR 44C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "42F" || valorBusto_cm === "42G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40E OR 42E ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "44AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40B OR 42B</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "44A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42B OR 40C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "44B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42C</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "44C") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>40E OR 42D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "44D" || valorBusto_cm === "44E") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42E</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "44F" || valorBusto_cm === "44G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42E + Extender </b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "46AA") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42B + double Extender</b> ' + "these have the same volume and may also fit!" + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "46A") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42B OR 40C</b> ' + "these have the same volume and may also fit! We recommend you try our bralettes and/or sports bras." + '<a href="/collections/bralette"> <u>Check them out!</u></a>');
            }
            if (valorBusto_cm === "46B") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>44C OR 42D</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "46C" || valorBusto_cm === "46D") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>44D OR 42E</b> ' + "these have the same volume and may also fit!");
            }
            if (valorBusto_cm === "46E" || valorBusto_cm === "46F" || valorBusto_cm === "46G") {
                $('#detalleRespuesta-complex-cm').html("If your size is unavailable, you can try size " + '<b>42DD/E + double Extender </b> ' + "these have the same volume and may also fit!");
            }
        }
        else {
            $('#SiRespuesta-cm').fadeOut();
            $('#NoRespuesta-cm').fadeIn();
            $('.detalleRespuesta-cm').html("");
        }
    });
});
