$("#Dem").click(function(){
    ("#Demo").show();
    
     
});

$("button").click(function() {
    $.ajax({
        url: "https://www.googleapis.com/civicinfo/v2/elections?key=<AIzaSyCB7viAXo9FP_4nN2Kh_4Qr0pcAuReT9Z8>",
        method: "GET",
        success: function (response) {
       
        }
    }) 



});