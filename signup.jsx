
    document.querySelector("#Signup").addEventListener("click", () => {
        let email = document.querySelector("#email").value;
        let name = document.querySelector("#name").value;
        let password = document.querySelector("#password").value;
        let address = document.querySelector("#address").value;
        let obj = { name, email, password, address };
        console.log(obj);
        sgn(obj);
    })
    let url = "https://ill-stole-duck.cyclic.app/user/register"
    let sgn = async (obj) => {

        let res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(res => alert(res))
            .catch(err => alert(err))
    }
