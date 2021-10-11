
    const wrapper = document.querySelector(".wrapper");


    const fileName = document.querySelector(".file-name");
    const txtfile = document.querySelector(".file-name");

    const browseBtn = document.querySelector("#default-btn");
    const genTxtBtn = document.querySelector("#default-btn");

    const customBtn = document.querySelector("#custom-btn");

    const cancelBtn = document.querySelector("#cancel-btn i");
    const img = document.querySelector("img");

    //validate
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

    function browseBtnActive() {
        browseBtn.click();
    }

    function genTxtBtnActive() {
        document.getElementById("txtField").innerHTML = "Hello World";
    }

    browseBtn.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                img.src = result;
                wrapper.classList.add("active");
            }
            cancelBtn.addEventListener("click", function () {
                img.src = "";
                wrapper.classList.remove("active");
            })
            reader.readAsDataURL(file);
        }
        if (this.value) {
            let valueStore = this.value.match(regExp);
            fileName.textContent = valueStore;
        }
    })

    //genTxtBtn.addEventListener("generate", function () {
    //});

