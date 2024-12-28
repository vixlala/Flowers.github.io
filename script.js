
const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/bejjmoga", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
/*<center>
        <div class="grid-container">
            <div class="grid-row">
                <div class="grid-item">
                    <p>Композиция 1</p><img src="букет1.jpg" alt="Картинка 1">
                    <p>110р</p>
                </div>
                <div class="grid-item">
                    <p>Композиция 2</p><img src="букет2.jpg" alt="Картинка 2">
                    <p>130р</p>
                </div>
                <div class="grid-item">
                    <p>Композиция 3</p><img src="букет3.webp" alt="Картинка 3">
                    <p>150р</p>
                </div>
            </div>
            <div class="grid-row">
                <div class="grid-item">
                    <p>Композиция 4</p><img src="букет4.jpg" alt="Картинка 4">
                    <p>100р</p>
                </div>
                <div class="grid-item">
                    <p>Композиция 5</p><img src="букет52.jpg" alt="Картинка 5">
                    <p>140р</p>
                </div>
                <div class="grid-item">
                    <p>Композиция 6</p><img src="букет6.png" alt="Картинка 6">
                    <p>150р</p>
                </div>
            </div>
        </div>
    </center>
</div>*/