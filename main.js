
$(document).ready(function() {
    $(".user").click(
        function () {
            if($("#css").attr("href")=="main.css") {
                $("#css").attr("href", "copy.css");
            } else{
                $("#css").attr("href", "main.css");
            }
            console.log("jde to!");
        }
    );
});