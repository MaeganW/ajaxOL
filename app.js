$(document).ready(function () {
    $.ajax({url: "http://localhost:9000/data-services/v3/commingling/ok?startDate=2017-06-13&endDate=2017-07-06&shapeFormat=geojson&docTypeVersion=v2&page=1&token=7781e0c3-2d45-480f-b80f-f55480233a96", success: function(dataObj){

        var wells = dataObj.result.records;
        var selectedWell;

        function findWell(well) {
            return well.well_name === selectedWell.toUpperCase();
        }

        function updateWell() {
            var output = "";
            selectedWell = $("option:selected").val();
            var selectedWellObj = wells.find(findWell);

            var buildOutput = function () {
                var keys = Object.keys(selectedWellObj);

                keys.forEach(function (key) {
                    var value = selectedWellObj[key];
                    output += '<li><span class="key">' + key.toUpperCase(key).replace(/_/g, " ") + '</span> : <span class="value">' + value + '</span></li>';
                });
                $(".records-container").html(output);
            }
            buildOutput();
        }

        $("button").click(function () {
            if ($("option:selected").val() === 'Select Well') {
                var output = "";
                $(".records-container").html(output);
            } else {
                updateWell();
            }
        });
    }});
});
