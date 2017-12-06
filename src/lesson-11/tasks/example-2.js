import fetch from 'isomorphic-fetch';

const resultList = [];
const promises = [];
const pathList = ['https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=cn',
    'https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=ca',
    'https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=au'];

function fillResultList(sources) {
    for (const { name, description, country } of sources) {
        const item = {
            name,
            description,
            country
        }
        resultList.push(item);
    }
}

async function getData(path) {
    return fetch(path)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function ({ sources }) {
            fillResultList(sources);
        });
}

(async () => {
    try {
        const cn = await getData('https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=cn');
        const ca = await getData('https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=ca');
        const au = await getData('https://newsapi.org/v2/sources?apiKey=f51575f85f6f45a39506856c4eb46563&country=au');
        console.log(resultList);
    }
    catch (error) {
        console.log(error);
    }
})();