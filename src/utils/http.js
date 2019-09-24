import "babel-polyfill";
import axios from 'axios';
import resource from '../constants/resource';

const refineError = err => {
    let data = err.response.data;

    if (data) {
        if (data instanceof Array) {
            data = data[0];
        } else if (data instanceof Object) {

        } else {
            data = "";
        }
    } else {
        data = "";
    }
    return {
        status: err.response.status,
        data: data
    }
};

const generateQuery = query => {
    if (query && query instanceof Object) {
        const keys = Object.keys(query);
        if (keys.length) {
            let queryString = '?';
            keys.forEach(function (key, index) {
                if (index) queryString += '&';
                queryString += key + '=' + encodeURIComponent(query[key]);
            });
            return queryString;
        } else {
            return '';
        }
    } else {
        return '';
    }
};

class Http {
    constructor(url) {
        this.url = `${resource.DOMAIN}/${url}`;
        this.options = {};
    }

    async post(body) {
        try {
            return axios.post(this.url, body, this.options);
        }
        catch (err) {
            return refineError(err);
        }
    }

    async postFormData(body, param) {
        let url = this.url;
        if (param) {
            url += `/${param}`;
        }
        try {
            return axios.post(url, body, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }
        catch (err) {
            return refineError(err);
        }
    }

    async get(id) {
        try {
            return axios.get(this.url + '/' + id, this.options);
        }
        catch (err) {
            return refineError(err);
        }
    }
    async gets(query) {
        try {
            return axios.get(this.url + generateQuery(query), this.options);
        }
        catch (err) {
            return refineError(err);
        }
    }
    async put(body) {
        let url = this.url;
        if (body.id) {
            url += `/${body.id}`;
            delete body.id;
        }
        try {
            return axios.put(url, body, this.options);
        }
        catch (err) {
            return refineError(err);
        }
    }
    async delete(query) {
        let url = this.url;
        if (query.id) {
            url += `/${query.id}`;
            delete query.id;
        }
        try {
            return axios({
                method: 'delete',
                url: url,
                data: query,
                headers: this.options.headers
            });
        }
        catch (err) {
            return refineError(err);
        }
    }
}

const process = callback => ({ status, data }) => {
    callback(status, data);
};

const validator = (data, acceptable, essential, successCallback, failCallback) => {
    let body = {};
    acceptable.forEach((key) => {
        if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
            body[key] = data[key];
        }
    });
    for (let i=0; i<essential.length; i++) {
        const key = essential[i];
        if (data[key] === undefined || data[key] === null || data[key] === '') {
            let errors = {};
            errors[key] = ['필수 요청 값이 없습니다.'];
            return failCallback(400, {
                errors: errors
            });
        }
    }
    return successCallback(body);
};

export {
    generateQuery,
    process,
    validator
};

export default (url) => {
    return new Http(url);
}