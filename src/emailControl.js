import {contactName,contactEmail,contactTextarea, contactBtn} from "./elements"


contactBtn.addEventListener("click", sendEmail)

function sendEmail(params){
    var tempParams={
        from_name:  contactEmail.value,
        to_name: "jakubgond@gmail.com",
        message: `${contactName.value} pisze:
        ${contactTextarea.value}
        `
    };
    emailjs.send("service_jh6xhls","template_3rpbqdk", tempParams )
            .then(function(res){
                console.log("success",res.status)
            })
}


