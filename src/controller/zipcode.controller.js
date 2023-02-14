import pool from  '../config/mysql.config.js'
import Response from '../domain/response.js'
import ZIP_QUERES from '../query/zipcode.query.js'
import viacepApi from '../utils/viacep.api.js';

const httpStatus = {
    OK: { code: 200, status: 'Ok' },
    NOT_FOUND: { code: 204, status: 'No Content' },
    BAD_REQUEST: { code: 400, status: 'Bad Request' }
}


export const createZipCode = (data) => {
    pool.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query(ZIP_QUERES.CREATE_ZIPCODE, Object.values(data))
    });
}

export const getZipCode = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) return next(err);
        connection.query(ZIP_QUERES.SELECT_ZIPCODE, [req.query.cep], (err, resp) => {
            const data = resp[0]
            if (data?.cep) {
                res.send(new Response(httpStatus.OK.code, httpStatus.OK.status, 'content', data))
            } else {
                viacepApi(req.query.cep)
                .then((viacepData) => {
                    createZipCode(viacepData)
                    res.send(new Response(httpStatus.OK.code, httpStatus.OK.status, 'content', viacepData))
                })
                .catch((error) => {
                    res.send(new Response(httpStatus.BAD_REQUEST.code, httpStatus.BAD_REQUEST.status, { error: true, message: error}))
                })
            }
        })
    });
}
