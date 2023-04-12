const {
    CreateNewProduct,
    ReadListProduct,
    UpdateProduct,
    DeleteProduct,
} = require('../models/sanphamService');

const {
    CreateNewCategory,
    DeleteCategory,
    UpdateCategory,
    ReadListCategory,
} = require('../models/loaisanphamService');

const {
    CreateNewOder,
    DeleteOder,
    UpdateOder,
    ReadListOder,
} = require('../models/donhangService');

const {
    CreateNewAccount,
    DeleteAccount,
    UpdateAccount,
    ReadListAccount,
} = require('../models/taikhoanService');

const createProduct = async (req, res) => {
    const { ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham } = req.body;
    const data = [ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham];
    console.log("data chuẩn bị được add: ", data);
    const messages = await CreateNewProduct(data);
    if (messages === false) {
        res.json({ success: false, message: "add product failed" });
    }
    console.log("product added successfully");
    res.json({ success: true, message: "product added successfully" });
}

const readListProduct = async (req, res) => {
    try {
        const data = await ReadListProduct();
        console.log("data đọc được: ", data);
        res.json({success: true, data})
    } catch (error) {
        res.json({ success: false, message: "error reading list product" });
        console.error(error);
    }
};

const updateProduct = async (req, res) => {
    const { id, ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham } = req.body;
    const data = [ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham, id];
    const success = await UpdateProduct(data);
    if (success === false) res.json({success: false, message: "update failed"});
    res.json({success: true, message: "update succeed"})
};

const deleteProduct = async (req, res) => {
    const { id } = req.body;
    const success = await DeleteProduct([id]);
    if (success === false) res.json({success: false, message: "delete failed"});
    res.json({success: true, message: "delete succeed"})
};

////////////////////////////////

const createNewCategory = async (req, res) => {
    const { ten, moTa, anh } = req.body;
    const data = [ten, moTa, anh];
    const messages = await CreateNewCategory(data);
    if (messages === false) {
        res.json({ success: false, message: "add category failed" });
    }
    res.json({ success: true, message: "category added successfully" });
}

const readListCategory = async (req, res) => {
    try {
        const data = await ReadListCategory();
        console.log("data đọc được: ", data);
        res.json({success: true, data})
    } catch (error) {
        res.json({ success: false, message: "error reading list category" });
        console.error(error);
    }
};

const updateCategory = async (req, res) => {
    const { maLoai, ten, moTa, anh } = req.body;
    const data = [ten, moTa, anh, maLoai];
    const success = await UpdateCategory(data);
    if (success === false) res.json({success: false, message: "update failed"});
    res.json({success: true, message: "update succeed"})
};

const deleteCategory = async (req, res) => {
    const { maLoai } = req.body;
    const success = await DeleteCategory([maLoai]);
    if (success === false) res.json({success: false, message: "delete failed"});
    res.json({success: true, message: "delete succeed"})
};

/////////////////////////////////////////

const createNewOder = async (req, res) => {
    const { tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan } = req.body;
    const data = [tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan];
    const messages = await CreateNewOder(data);
    if (messages === false) {
        res.json({ success: false, message: "add oder failed" });
    }
    res.json({ success: true, message: "oder added successfully" });
}

const readListOder = async (req, res) => {
    try {
        const data = await ReadListOder();
        console.log("data đọc được: ", data);
        res.json({success: true, data})
    } catch (error) {
        res.json({ success: false, message: "error reading list oder" });
        console.error(error);
    }
};

const updateOder = async (req, res) => {
    const { id, tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan } = req.body;
    const data = [tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan, id];
    const success = await UpdateOder(data);
    if (success === false) res.json({success: false, message: "update failed"});
    res.json({success: true, message: "update succeed"})
};

const deleteOder = async (req, res) => {
    const { id } = req.body;
    const success = await DeleteOder([id]);
    if (success === false) res.json({success: false, message: "delete failed"});
    res.json({success: true, message: "delete succeed"})
};

////////////////////////////////////////////////////

const createNewAccount = async (req, res) => {
    const { userName, passWord, tenNhanVien, vaiTro } = req.body;
    const data = [userName, passWord, tenNhanVien, vaiTro];
    const messages = await CreateNewAccount(data);
    if (messages === false) {
        res.json({ success: false, message: "add account failed" });
    }
    res.json({ success: true, message: "account added successfully" });
}

const readListAccount = async (req, res) => {
    try {
        const data = await ReadListAccount();
        console.log("data đọc được: ", data);
        res.json({success: true, data})
    } catch (error) {
        res.json({ success: false, message: "error reading list account" });
        console.error(error);
    }
};

const updateAccount = async (req, res) => {
    const { id, userName, passWord, tenNhanVien, vaiTro } = req.body;
    const data = [userName, passWord, tenNhanVien, vaiTro, id];
    const success = await UpdateAccount(data);
    if (success === false) res.json({success: false, message: "update failed"});
    res.json({success: true, message: "update succeed"})
};

const deleteAccount = async (req, res) => {
    const { id } = req.body;
    const success = await DeleteAccount([id]);
    if (success === false) res.json({success: false, message: "delete failed"});
    res.json({success: true, message: "delete succeed"})
};

module.exports = {
    createProduct: createProduct,
    readListProduct : readListProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct,

    createNewCategory : createNewCategory,
    readListCategory : readListCategory,
    updateCategory : updateCategory,
    deleteCategory: deleteCategory,

    createNewOder : createNewOder,
    readListOder : readListOder,
    updateOder : updateOder,
    deleteOder : deleteOder,

    createNewAccount : createNewAccount,
    readListAccount : readListAccount,
    updateAccount : updateAccount,
    deleteAccount : deleteAccount,
}