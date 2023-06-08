var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1 ) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

            function validateForm() {
                document.querySelector("form[name='message-form']").addEventListener("submit", function(event) {
                event.preventDefault(); // Mencegah perilaku default dari form

                var name = document.forms["message-form"]["full-name"].value;
                var date = document.forms["message-form"]["birth-date"].value;
                var gender = document.forms["message-form"]["gender"].value;
                var messages = document.forms["message-form"]["messages"].value;

                if (name == "" || date == "" || gender == "" || messages == "") {
                alert("Input tidak boleh kosong");
                return false;
                }

                document.getElementById("sender-full-name").innerText = name;
                document.getElementById("sender-birth-date").innerText = date;
                document.getElementById("sender-gender").innerText = gender;
                document.getElementById("sender-messages").innerText = messages;
                return false;
                });

            }