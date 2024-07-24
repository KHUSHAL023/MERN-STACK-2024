
        let baseurl = "https://ill-stole-duck.cyclic.app/menu/"
        let url = "https://ill-stole-duck.cyclic.app/menu/?page=1&limit=1"


        async function myfun() {
            try {
                // console.log(url);
                let req1 = await fetch(baseurl);
                let res1 = await req1.json();
                let alldata = res1;
                let req = await fetch(url);
                let res = await req.json();
                let data = res;
                let totalButton = res1.length;
                pagination(totalButton);
                let dd = display(data);
                document.querySelector(".msnd").innerHTML = dd;

            }
            catch (err) {
                console.log(err);
            }
        }

        myfun();
        function pagination(button) {
            for (let i = 1; i <= button; i++) {
                let b = document.createElement("button");
                b.innerText = i;
                let url1 = `https://ill-stole-duck.cyclic.app/menu/?page=${i}&limit=1`
                b.addEventListener("click", async () => {

                    document.querySelector(".msnd").innerText = "";
                    let res = await fetch(url1);
                    let req = await res.json();

                    let dd = display(req);

                    document.querySelector(".msnd").innerHTML = dd;
                })
                document.querySelector(".pagination").append(b);
            }

        }
        function display(data) {
            return `<div>
                <div>
                    <div>
                <img src="${data[0].image}">
               
                </div>
                <div>
                    <h1>${data[0].title}</h1>
                    <h3> From the Test Kitchen  </h3>
                    <p>${data[0].description}</p>
                    </div>
                </div>
                <div>
                    <h1>INGREDIENT</h1>
                    <div>
                    <div>
                        <img src="${data[0].ingredients_image}">
                        </div>
                    <div>
                        <ul>
                           ${ing(data)}
                            </ul>
                        </div>
                        </div>
                    </div>
                    <h1 class="inss">INSTRUCTIONS</h1>
                    <div>
                     ${ins(data)}
                        </div>
                </div>`
        }

        function ing(data) {
            let ingredients = data[0].ingredients.map((item) => {
                return `<li>${item}</li>`
            })
            let ingredientsFinal = ingredients.join("");
            return ingredientsFinal;
        }
        function ins(data) {

            let instructions = data[0]["Instruction"].map((item) => {
                return `
                <div>
                   <img src="${item.image}">
                   <h3>${item.title}</h3>
                   <p>${item.description}</p>
                    </div>
                `
            })
            let instructionsFinal = instructions.join("");
            return instructionsFinal;
        }
