const formEl = document.getElementById("Edit");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("name");
const priceEl = document.getElementById("price");
const hEl = document.getElementById("24h");
const dEl = document.getElementById("7d");
const marketEl = document.getElementById("market");
const volumeEl = document.getElementById("volume");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const idElvalue = +idEl.value;
    const nameElvalue = nameEl.value;
    const priceElvalue = priceEl.value;
    const hElvalue = hEl.value;
    const dElvalue = dEl.value;
    const marketElvalue = marketEl.value;
    const volumeElvalue = volumeEl.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify([
        {
            "id": idElvalue,
            "Name": nameElvalue,
            "price": priceElvalue,
            "h": hElvalue,
            "d": dElvalue,
            "marketCap": marketElvalue,
            "volume": volumeElvalue
        }
    ]);

    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(`http://localhost:3000/api/v1/crypto/data/${idElvalue}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));


});

//News

// const n_formEl = document.getElementById("News-Edit");
// const n_idEl = document.getElementById("N-id");
// const n_imgEl = document.getElementById("N-img");
// const n_subEl = document.getElementById("N-sub");
// const n_paragEl = document.getElementById("N-parag");
// const n_byEl = document.getElementById("N-by");
// const n_dateEl = document.getElementById("N-date");
// const n_timeEl = document.getElementById("N-time");
//
// n_formEl.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const n_idvalue = n_idEl.value;
//     const n_imgvalue = n_imgEl.value;
//     const n_subElvalue = n_subEl.value;
//     const n_paragElvalue = n_paragEl.value;
//     const n_byElvalue = n_byEl.value;
//     const n_dateElvalue = n_dateEl.value;
//     const n_timeElvalue = n_timeEl.value;
//
//
// });


