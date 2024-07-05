const form = document.querySelector("form") ;
const fullName = document.getElementById ("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const addreas = document.getElementById ("addreas");
const massaje = document.getElementById("messag");

function sendEmail() {
    const bodyMessage = 'Full Name : ${fullName.value}<br>   Email: ${email.value}<br>     phone Number: ${phone.value}<br>   Message: ${massaje.value}<br>';

   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "softwareengineering05.athar@gmail.com",
        Password : "A588B8773521A277DE5F60B204EAE7EF3CC0",
        To : 'softwareengineering05.athar@gmail.com',
        From : "softwareengineering05.athar@gmail.com",
        Subject : addreas.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "order sent successfully!",
                icon: "success"
              });
        }
        }
    );
}

form.addEventListener("submit" , (e) => {

     sendEmail();
});