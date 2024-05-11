const fetch = require('isomorphic-unfetch')

let key1 = 'ghp_lh2F44XCs5xB1oH';
let key2 = '7Qbmq8BUwIz4ptT1Y1bdb';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/NamiTrakyali/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
