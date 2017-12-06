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

for (const path of pathList) {
    const prom = fetch(path)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function ({ sources }) {
            fillResultList(sources);
        });
    promises.push(prom);
}

Promise.all(promises).then(
    () => {
        console.log('Successful');
        console.log(resultList);
    },
    () => {
        console.log('Error getting all data');
    });