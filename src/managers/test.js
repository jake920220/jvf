import resource from '../constants/resource';
import http, { process, validator } from '../utils/http';

const findAll = (query, callback) => {
    const req = http(resource.test);
    return req.gets(query).then(process(callback));
}

export {
    findAll
};

export default {
    findAll
};