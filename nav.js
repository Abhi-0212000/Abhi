const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    // console.log(visibility);
});



// for contact page sending email

function sendMail(){
    var params = {
        from_name: document.getElementById("full_name").value , 
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value

    };
    const serviceID = "service_zldx4zv";
    const templateID = "template_zdbf6pl";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
            document.getElementById("first_name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
    .catch((err) => console.log(err));
}

