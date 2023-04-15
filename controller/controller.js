const db = require('../models/db');
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

const dathangService = require('../models/dathangService');

const createProduct = async (req, res) => {
    const { ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham } = req.body;
    const data = [ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham];
    // console.log("data chuẩn bị được add: ", data);
    try {
        const messages = await CreateNewProduct(data);
        if (messages === false) {
            res.json({ success: false, message: "add product failed" });
        }
        // console.log("product added successfully");
        res.json({ success: true, message: "product added successfully" });
    } catch (error) {
        console.error(error);
    }

}

const readListProduct = async (req, res) => {
    try {
        const data = await ReadListProduct();
        // console.log("data đọc được: ", data);
        res.json({ success: true, data })
    } catch (error) {
        res.json({ success: false, message: "error reading list product" });
        console.error(error);
    }
};

const updateProduct = async (req, res) => {
    const { id, ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham } = req.body;
    const data = [ten, soLuong, moTa, donVi, anh, giaNhap, giaBan, idLoaiSanPham, id];
    try {
        const success = await UpdateProduct(data);
        if (success === false) res.json({ success: false, message: "update failed" });
        res.json({ success: true, message: "update succeed" })
    } catch (error) {
        console.error(error);
    }

};

const deleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        const success = await DeleteProduct([id]);
        if (success === false) res.json({ success: false, message: "delete failed" });
        res.json({ success: true, message: "delete succeed" })
    } catch (error) {
        console.error(error);
    }
};

////////////////////////////////

const createNewCategory = async (req, res) => {
    const { ten, moTa, anh } = req.body;
    const data = [ten, moTa, anh];
    try {
        const messages = await CreateNewCategory(data);
        if (messages === false) {
            res.json({ success: false, message: "add category failed" });
        }
        res.json({ success: true, message: "category added successfully" });
    } catch (error) {
        console.error(error);
    }

}

const readListCategory = async (req, res) => {
    try {
        const data = await ReadListCategory();
        console.log("data đọc được: ", data);
        res.json({ success: true, data })
    } catch (error) {
        res.json({ success: false, message: "error reading list category" });
        console.error(error);
    }
};

const updateCategory = async (req, res) => {
    const { maLoai, ten, moTa, anh } = req.body;
    const data = [ten, moTa, anh, maLoai];
    try {
        const success = await UpdateCategory(data);
        if (success === false) res.json({ success: false, message: "update failed" });
        res.json({ success: true, message: "update succeed" })
    } catch (error) {
        console.error(error);
    }
};

const deleteCategory = async (req, res) => {
    const { maLoai } = req.body;
    try {
        const success = await DeleteCategory([maLoai]);
        if (success === false) res.json({ success: false, message: "delete failed" });
        res.json({ success: true, message: "delete succeed" })
    } catch (error) {
        console.error(error);
    }
};

/////////////////////////////////////////

const createIdCodeOder = async () => {
    let idCode = '';
    while (idCode === '') {
        const newIdCode = `${Date.now().toString(36)}${Math.random().toString(36).substr(2, 5)}`;
        const [rows] = await db.execute('SELECT * FROM donHang WHERE id = ?', [newIdCode]);
        if (rows.length === 0) {
            idCode = newIdCode;
        }
    }
    return idCode;
}

const createNewOder = async (req, res) => {
    const { tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan, listProduct } = req.body;
    try {
        const idcode = await createIdCodeOder(); 
        const data1 = [idcode, tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan];
        const message1 = await CreateNewOder(data1);
        if (message1 === false) res.json({success: false, message: "create order failed"});
        for (let i = 0 ; i < listProduct.length; i++) {
            let message2 = await dathangService.CreateNewOderProduct([listProduct[i][0], idcode, listProduct[i][1]]); 
            if (message2 === false) res.json({success: false, message: 'add product in order failed'});
        }
        res.json({success: true, message: "create order succeed"});
    } catch (error) {
        console.error(error);
    }
}

const readListOder = async (req, res) => {
    try {
        const data = await ReadListOder();
        console.log("data đọc được: ", data);
        res.json({ success: true, data })
    } catch (error) {
        res.json({ success: false, message: "error reading list oder" });
        console.error(error);
    }
};

const updateOder = async (req, res) => {
    const { id, tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan } = req.body;
    const data = [tenKhach, SDT, diaChi, hinhThucThanhToan, ngayTao, idTaiKhoan, id];
    try {
        const success = await UpdateOder(data);
        if (success === false) res.json({ success: false, message: "update failed" });
        res.json({ success: true, message: "update succeed" })
    } catch (error) {
        console.error(error);
    }
};

const deleteOder = async (req, res) => {
    const { id } = req.body;
    try {
        const success = await DeleteOder([id]);
        if (success === false) res.json({ success: false, message: "delete failed" });
        res.json({ success: true, message: "delete succeed" })
    } catch (error) {
        console.error(error);
    }

};

////////////////////////////////////////////////////

const createNewAccount = async (req, res) => {
    const { userName, passWord, tenNhanVien, vaiTro } = req.body;
    const data = [userName, passWord, tenNhanVien, vaiTro];
    try {
        const messages = await CreateNewAccount(data);
        if (messages === false) {
            res.json({ success: false, message: "add account failed" });
        }
        res.json({ success: true, message: "account added successfully" });
    } catch (error) {
        console.error(error);
    }

}

const readListAccount = async (req, res) => {
    try {
        const data = await ReadListAccount();
        console.log("data đọc được: ", data);
        res.json({ success: true, data })
    } catch (error) {
        res.json({ success: false, message: "error reading list account" });
        console.error(error);
    }
};

const updateAccount = async (req, res) => {
    const { id, userName, passWord, tenNhanVien, vaiTro } = req.body;
    const data = [userName, passWord, tenNhanVien, vaiTro, id];
    try {
        const success = await UpdateAccount(data);
        if (success === false) res.json({ success: false, message: "update failed" });
        res.json({ success: true, message: "update succeed" })
    } catch (error) {
        console.error(error);
    }
};

const deleteAccount = async (req, res) => {
    const { id } = req.body;
    try {
        const success = await DeleteAccount([id]);
        if (success === false) res.json({ success: false, message: "delete failed" });
        res.json({ success: true, message: "delete succeed" })
    } catch (error) {
        console.error(error);
    }
};
////////////////////////////////////////


module.exports = {
    createProduct: createProduct,
    readListProduct: readListProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,

    createNewCategory: createNewCategory,
    readListCategory: readListCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,

    createNewOder: createNewOder,
    readListOder: readListOder,
    updateOder: updateOder,
    deleteOder: deleteOder,

    createNewAccount: createNewAccount,
    readListAccount: readListAccount,
    updateAccount: updateAccount,
    deleteAccount: deleteAccount,
}