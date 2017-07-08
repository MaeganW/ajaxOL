$(document).ready(function () {

    $("button").click(function () {
        if ($("option:selected").val() == 'Marzett') {
            $.getJSON('data.json', function (dataObj) {
                var outputKey = "";
                var resultOne = dataObj.result.records[0];

                for (key in resultOne) {
                    formattedKey = key.toUpperCase(key).replace(/_/g, " ");

                    outputKey += '<li><span class="key">' + formattedKey + '</span> : <span class="value">' + resultOne[key] + '</span></li>';
                }

                $(".records-container").html(outputKey.replace(/;/g, " "));
            });
        } else if ($("option:selected").val() == 'Johnson State') {
            $.getJSON('data.json', function (dataObj) {
                var outputKey = "";
                var resultTwo = dataObj.result.records[1];

                for (key in resultTwo) {
                    formattedKey = key.toUpperCase(key).replace(/_/g, " ");

                    outputKey += '<li><span class="key">' + formattedKey + '</span> : <span class="value">' + resultTwo[key] + '</span></li>';
                }

                $(".records-container").html(outputKey.replace(/;/g, " "));
            });
        } else {
            outputKey = "";
            $(".records-container").html(outputKey);
        };
    });
});
