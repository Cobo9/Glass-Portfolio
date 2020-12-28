import {contactName,contactEmail,contactTextarea, contactBtn, contactForm} from "./elements"


contactForm.addEventListener("submit", sendEmail)

function sendEmail(e){
    e.preventDefault();
    var tempParams={
        from_name:  contactEmail.value,
        to_name: "jakubgond@gmail.com",
        message: `${contactName.value} pisze:
        ${contactTextarea.value}
        `
    };
    emailjs.send("service_jh6xhls","template_3rpbqdk", tempParams )
            .then(function(res){
                if(res.status === 200){
                    contactEmail.value ="";
                    contactName.value="";
                    contactTextarea.value="";
                    contactBtn.textContent = "Sent!"
    
                    setTimeout(()=>{
                        contactBtn.textContent = "Send"  
                    },3000)
                }


            })
}


