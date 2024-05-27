const formEl = document.getElementById("create");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("name");
const priceEl = document.getElementById("price");
const hEl = document.getElementById("24h");
const dEl = document.getElementById("7d");
const marketEl = document.getElementById("market");
const volumeEl = document.getElementById("volume");

formEl.addEventListener("submit",function (e)  {
    e.preventDefault();
    const idElvalue = idEl.value;
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
            id:+idElvalue,
            "Name": nameElvalue,
            "price": priceElvalue,
            "h": hElvalue,
            "d": dElvalue,
            "marketCap": marketElvalue,
            "volume": volumeElvalue
        }
    ]);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:3000/api/v1/crypto/data", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error(error));
})

//News

const n_formEl = document.getElementById("News-create");
const n_idEl = document.getElementById("N-id");
const n_imgEl = document.getElementById("N-img");
const n_subEl = document.getElementById("N-sub");
const n_paragEl = document.getElementById("N-parag");
const n_byEl = document.getElementById("N-by");
const n_dateEl = document.getElementById("N-date");
const n_timeEl = document.getElementById("N-time");

n_formEl.addEventListener("submit",function (e)  {
    e.preventDefault();
    const n_idvalue = n_idEl.value;
    const n_imgvalue = n_imgEl.value;
    const n_subElvalue = n_subEl.value;
    const n_paragElvalue = n_paragEl.value;
    const n_byElvalue = n_byEl.value;
    const n_dateElvalue = n_dateEl.value;
    const n_timeElvalue = n_timeEl.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        id:n_idvalue,
        "img": n_imgvalue,
        "subtitle": n_subElvalue,
        "parag": n_paragElvalue,
        "author": {
            "by": `By: ${n_byElvalue}`,
            "date": `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10"
                                   fill="none">
  <path d="M2.8824 0C2.97522 0 3.06425 0.0368749 3.12989 0.102513C3.19552 0.16815 3.2324 0.257174 3.2324 0.35V1.0045H6.9909V0.3545C6.9909 0.261674 7.02777 0.17265 7.09341 0.107013C7.15905 0.0413749 7.24807 0.0045 7.3409 0.0045C7.43372 0.0045 7.52275 0.0413749 7.58839 0.107013C7.65402 0.17265 7.6909 0.261674 7.6909 0.3545V1.0045H9.0459C9.31103 1.0045 9.56531 1.10979 9.75283 1.29722C9.94035 1.48464 10.0458 1.73887 10.0459 2.004V9.0005C10.0458 9.26563 9.94035 9.51986 9.75283 9.70728C9.56531 9.89471 9.31103 10 9.0459 10H1.0459C0.780769 10 0.52649 9.89471 0.338968 9.70728C0.151446 9.51986 0.046031 9.26563 0.0458984 9.0005L0.0458984 2.004C0.046031 1.73887 0.151446 1.48464 0.338968 1.29722C0.52649 1.10979 0.780769 1.0045 1.0459 1.0045H2.5324V0.3495C2.53253 0.256761 2.56946 0.167865 2.63509 0.102336C2.70071 0.0368062 2.78966 -9.46317e-08 2.8824 0V0ZM0.745898 3.871V9.0005C0.745898 9.0399 0.753658 9.07891 0.768735 9.1153C0.783811 9.1517 0.805909 9.18477 0.833766 9.21263C0.861624 9.24049 0.894696 9.26259 0.931093 9.27766C0.967491 9.29274 1.0065 9.3005 1.0459 9.3005H9.0459C9.08529 9.3005 9.12431 9.29274 9.1607 9.27766C9.1971 9.26259 9.23017 9.24049 9.25803 9.21263C9.28589 9.18477 9.30799 9.1517 9.32306 9.1153C9.33814 9.07891 9.3459 9.0399 9.3459 9.0005V3.878L0.745898 3.871ZM3.3794 7.3095V8.1425H2.5459V7.3095H3.3794ZM5.4624 7.3095V8.1425H4.6294V7.3095H5.4624ZM7.5459 7.3095V8.1425H6.7124V7.3095H7.5459ZM3.3794 5.321V6.154H2.5459V5.321H3.3794ZM5.4624 5.321V6.154H4.6294V5.321H5.4624ZM7.5459 5.321V6.154H6.7124V5.321H7.5459ZM2.5324 1.704H1.0459C1.0065 1.704 0.967491 1.71176 0.931093 1.72684C0.894696 1.74191 0.861624 1.76401 0.833766 1.79187C0.805909 1.81973 0.783811 1.8528 0.768735 1.88919C0.753658 1.92559 0.745898 1.9646 0.745898 2.004V3.1715L9.3459 3.1785V2.004C9.3459 1.9646 9.33814 1.92559 9.32306 1.88919C9.30799 1.8528 9.28589 1.81973 9.25803 1.79187C9.23017 1.76401 9.1971 1.74191 9.1607 1.72684C9.12431 1.71176 9.08529 1.704 9.0459 1.704H7.6909V2.1685C7.6909 2.26133 7.65402 2.35035 7.58839 2.41599C7.52275 2.48163 7.43372 2.5185 7.3409 2.5185C7.24807 2.5185 7.15905 2.48163 7.09341 2.41599C7.02777 2.35035 6.9909 2.26133 6.9909 2.1685V1.704H3.2324V2.164C3.2324 2.25683 3.19552 2.34585 3.12989 2.41149C3.06425 2.47713 2.97522 2.514 2.8824 2.514C2.78957 2.514 2.70055 2.47713 2.63491 2.41149C2.56927 2.34585 2.5324 2.25683 2.5324 2.164V1.704Z"
        fill="#616161"/>
</svg>${n_dateElvalue}`,
            "time": `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10"
                                   fill="none">
  <path d="M5.0979 10C4.109 10 3.1423 9.70676 2.32005 9.15735C1.49781 8.60794 0.856943 7.82705 0.478505 6.91342C0.100067 5.99979 0.00105016 4.99445 0.193976 4.02455C0.386902 3.05465 0.863106 2.16373 1.56237 1.46447C2.26163 0.765206 3.15255 0.289002 4.12245 0.0960758C5.09236 -0.0968502 6.09769 0.00216642 7.01132 0.380604C7.92495 0.759043 8.70584 1.3999 9.25525 2.22215C9.80466 3.0444 10.0979 4.0111 10.0979 5C10.0979 6.32608 9.57112 7.59785 8.63343 8.53553C7.69575 9.47322 6.42398 10 5.0979 10ZM5.0979 0.714288C4.25027 0.714288 3.42167 0.96564 2.71689 1.43656C2.0121 1.90748 1.46279 2.57682 1.13842 3.35993C0.814043 4.14304 0.729172 5.00476 0.894537 5.8361C1.0599 6.66745 1.46808 7.43109 2.06744 8.03046C2.66681 8.62983 3.43045 9.038 4.2618 9.20337C5.09315 9.36873 5.95486 9.28386 6.73797 8.95948C7.52108 8.63511 8.19042 8.0858 8.66134 7.38102C9.13226 6.67623 9.38361 5.84764 9.38361 5C9.38361 3.86336 8.93209 2.77327 8.12836 1.96954C7.32463 1.16582 6.23454 0.714288 5.0979 0.714288Z"
        fill="#616161"/>
  <path d="M6.73715 7.14279L4.74072 5.14636V1.78564H5.45501V4.84993L7.24072 6.63922L6.73715 7.14279Z" fill="#616161"/>
</svg>${n_timeElvalue}`
        }
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:3000/api/v1/crypto/news", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error(error));
})


