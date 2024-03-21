const fetch = require('isomorphic-unfetch')

let key1 = 'ghp_PegBswG1pSXlCqd';
let key2 = 'IPXeJM5NjphA8Tx0NCDMH';

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
