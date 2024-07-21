
    let url = "https://ill-stole-duck.cyclic.app/user/login";
    document.querySelector("#login").addEventListener("click", () => {
        lgn();
    })
    async function lgn() {
        try {
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;
            let obj = { email, password };
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            )

            let response = await res.json();
            if (res.ok == true) {

                alert(response.msg);
                localStorage.setItem("token", response.token);
                window.location.href = "./index.html";
            }
        }
        catch (error) {
            alert(error);
        }
    }
