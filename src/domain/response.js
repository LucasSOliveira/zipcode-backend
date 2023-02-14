class Response {
    constructor(statusCode, httpStatus, message, data) {
        this.timeStame = new Date().toLocaleDateString();
        this.statusCode = statusCode;
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
    }
}

export default Response;