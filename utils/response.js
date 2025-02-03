// utils/response.js

// Fungsi untuk mengirimkan response standar di Express
const createResponse = (res, status, message, data = null) => {
    return res.status(status).json({
        status,
        message,
        ...(data && { data }), // jika ada data, tambahkan ke response
    });
};

module.exports = createResponse;
