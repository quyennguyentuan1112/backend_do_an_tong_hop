const db = require('./db');

const CreateNewOderProduct = async (data) => {
    try {
        await db.execute(`INSERT INTO datHang (idSanPham, idDonHang, soLuong) VALUES
        (?, ?, ?)`,
            data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


const ReadListOderProduct = async () => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM datHang`);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const UpdateOderProduct = async (data) => {
    try {
        await db.execute(`UPDATE datHang SET soLuong = ? WHERE idSanPham = ? AND idDonHang = ?`, data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


const DeleteOderProduct = async (id) => {
    try {
        await db.execute(`DELETE FROM donHang WHERE idSanPham = ? AND idDonHang = ?`, id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


module.exports = {
    CreateNewOderProduct : CreateNewOderProduct,
    ReadListOderProduct : ReadListOderProduct,
    UpdateOderProduct : UpdateOderProduct,
    DeleteOderProduct : DeleteOderProduct,
};