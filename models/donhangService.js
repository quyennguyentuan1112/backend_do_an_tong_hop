const db = require('./db');


const CreateNewOder = async (data) => {
    try {
        await db.execute(`INSERT INTO donHang (tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan) VALUES
        (?, ?, ?, ?, ?, ?)`,
            data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


const ReadListOder = async () => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM donHang`);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const UpdateOder = async (data) => {
    try {
        await db.execute(`UPDATE donHang SET tenKhach = ?, SDT = ?, diaChi = ?, hinhThucThanhToan = ?, ngayTao = ?, idTaiKhoan = ? WHERE id = ?`, data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const DeleteOder = async (id) => {
    try {
        await db.execute(`DELETE FROM donHang WHERE id = ?`, id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    CreateNewOder : CreateNewOder,
    ReadListOder : ReadListOder,
    UpdateOder : UpdateOder,
    DeleteOder : DeleteOder,
};