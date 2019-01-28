$().ready(function(){

  
    $("#contactform").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                isPrototypeOf: email
            },

            subject: {
                required: true,
            }
        },
        messages: {
            name:{
                
                required : "Name can not be empty",
                minlength : "Name too short"
            },
            
            email: {
                required: "Email can not be empty.",
                isPrototypeOf: "Email is invalid."
                
            },
            subject: {
                required: "Subject can not be empty",
                
            }
        }

    });
})

