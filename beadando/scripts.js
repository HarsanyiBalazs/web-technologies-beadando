$(document).ready(function () {

        var count = 0;
        var clicked = false;
        var menu = $("#menu");
        var content = $("#content");
        var links = $("#links");
        var changing_pictures = $("#changing_pictures");
        

        var tea1= $("<img src=\"tea1.jpg\" class=\"pictures\">");
        var tea2 = $("<img src=\"tea2.jpg\" class=\"pictures\">");
        var tea3 = $("<img src=\"tea3.jpg\" class=\"pictures\">");
        var tea4 = $("<img src=\"tea4.jpg\" class=\"pictures\">");
        var tea5 = $("<img src=\"tea5.jpg\" class=\"pictures\">");
            
            $("#menubutton").click(function() 
            {
                if (clicked) 
                {
                    menu.css("width","5%");
                    content.css("margin-left","5%");
                    links.css("display","none");
                }else
                {
                    menu.css("width","15%");
                    content.css("margin-left","15%");
                    links.css("display","inline");
                }
                clicked = !clicked;  
            });

            changing_pictures.click(function()
            {
                
                switch(count % 5)
                {
                    case 0:
                        $(this).html(tea2);
                        count++;
                        break;
                    case 1:
                        $(this).html(tea3);
                        count++;
                        break;
                    case 2:
                        $(this).html(tea4);
                        count++;
                        break;
                    case 3:
                        $(this).html(tea5);
                        count++;
                        break;
                    case 4:
                        $(this).html(tea1);
                        count++;
                        break;
                }

            })

            setInterval(function() {
                changing_pictures.trigger('click');
                }, 5000);



            $(".picture").click(function()
                {
                    $(this).animate({width:'100%',opacity:'1'},"fast");
                })
    
            $(".picture").mouseleave(function()
                {
                    $(this).animate({width:'45%',opacity:'1'},"fast");
                })



            $("#validate").click(function()
            {
                var registered= true;
                var formFirstName=$("#formFirstName").val();
                var formLastName=$("#formLastName").val();
                var formEmail=$("#formEmail").val();
                var formPassword=$("#formPassword").val();



                var message=$("<div style=\"margin-top: 10px;font-size:25px;color:blue;\"><b>Regisztrációja sikeresen megtörtént!</b></div>");
                var messageLastName=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>A vezetéknév nem lett kitöltve</b></div><br>");
                var messageFirstName=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>A keresztnév nem lett kitöltve</b></div><br>");
                var messageEmail=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>Az email nem lett kitöltve</b></div><br>");
                var messagePasswordLength=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>A jelszónak legalább 8 karakter hosszúnak kell lennie</b></div><br>");
                var messagePasswordNumber=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>A jelszónak tartalmaznia kell számot</b></div><br>");
                var messagePasswordUpperCase=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>A jelszónak tartalmaznia kell nagybetűt</b></div><br>");
                var messageConditions=$("<div style=\"margin-top: 10px;font-size:25px;color:red;\"><b>Az adatvédelmi nyilatkozat nem lett elfogadva</b></div><br>");

                $("#formFirstName").css("border","1px solid white");
                $("#formLastName").css("border","1px solid white");
                $("#formEmail").css("border","1px solid white");
                $("#formPassword").css("border","1px solid white");
                $("#conditionsDiv").css("border","none");
                $("#results").html("");


                


                if(formLastName==""){
                    $("#results").append(messageLastName);
                    $("#formLastName").css("border","3px solid red");
                    registered=false;
                }

                if(formFirstName==""){
                    $("#results").append(messageFirstName);
                    $("#formFirstName").css("border","3px solid red");
                    registered=false;
                }

                if(formEmail==""){
                    $("#results").append(messageEmail);
                    $("#formEmail").css("border","3px solid red");
                    registered=false;
                }

                if(formPassword.length < 8){
                    $("#results").append(messagePasswordLength);
                    $("#formPassword").css("border","3px solid red");
                    registered=false;
                }
                if( /[0-9]/.test(formPassword)== false )
                {
                    $("#results").append(messagePasswordNumber);
                    $("#formPassword").css("border","3px solid red");
                    registered=false;
                } 
                if( /[A-Z]/.test(formPassword)== false)
                {
                    $("#results").append(messagePasswordUpperCase);
                    $("#formPassword").css("border","3px solid red");
                    registered=false;
                }


                if( !document.getElementById('conditions').checked )
                {
                    
                    $("#results").append(messageConditions);
                    $("#conditionsDiv").css("border","2px dashed red");
                    registered=false;
                    
                }

                
                if(registered == true)
                {
                    $("#results").html(message);
                    return;
                }else
                {
                    alert("Sikertelen regisztráció");
                    return;
                }
                    
                
            })
})
