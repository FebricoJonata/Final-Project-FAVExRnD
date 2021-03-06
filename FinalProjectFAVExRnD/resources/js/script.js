$("#form").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            minlength: 2,
            email: true
        },
        password:{
            minlength: 8,
            password: true
        },
        username:{
            minlength: 2
        },
        fullname:{
            minlength: 2
        },
        message:{
            minlength: 10
        },
    },
    message:{
        name:{
            minlength: "Harus lebih dari 2 huruf"
        },
        email:{
            minlength: "Harus lebih dari 2 huruf"
        },
        password:{
            minlength: "Harus lebih dari 8 huruf"
        },
        username:{
            minlength: "Harus lebih dari 2 huruf"
        },
        fullname:{
            minlength: "Harus lebih dari 2 huruf"
        },
        message:{
            minlength: "Harus lebih dari 10 huruf"
        },
    },

    submitHandler: function(form) {
      form.submit();
    }
   });