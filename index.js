
        let arr = [`Before Blue Apron, I tried HelloFresh. Blue Apron beats them on all counts—directions, freshness,
                packing, and prep. `, `We’d tried many other food delivery services and none of them have compared in quality and variety to Blue Apron.`, `We love Blue Apron! It eliminates a ton of food waste while allowing us to try new things and have tasty meals. Really great quality food, awesome flavors, and things we wouldn't otherwise have any idea how to create.`]
        let i = 0;
        setInterval(function () {

            document.querySelector(".eth p").innerText = arr[i];
            i++;
            if (i == arr.length) {
                i = 0;
            }
        }, 2000)