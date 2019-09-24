import resource from '../constants/resource';
import http, { process, validator } from '../utils/http';

// const findAll = (query, callback) => {
//     const req = http(resource.test);
//     return req.gets(query).then(process(callback));
// }

const findAll = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const req = http(resource.test);
            resolve(await req.gets(query));
        } catch (e) {
            resolve(e);
        }
    });
}

export {
    findAll
};

export default {
    findAll
};