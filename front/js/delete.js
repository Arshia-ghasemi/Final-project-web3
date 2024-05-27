const formEl = document.querySelector('#delete-data');
const idEl = document.querySelector('#id');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const idvalue = +idEl.value

    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    fetch(`http://localhost:3000/api/v1/crypto/data/${idvalue}`, requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error(error));
})

//News

const n_formEl = document.querySelector('#delete-news');
const n_idEl = document.querySelector('#N-id');
n_formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const n_idvalue = +n_idEl.value;

    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    fetch(`http://localhost:3000/api/v1/crypto/news/${n_idvalue}`, requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error(error));
})
