import React, { useState, useMemo } from 'react';

const Finance = () => {
    // --- MOCK DATA: DỮ LIỆU GIAO DỊCH ---
    const [transactions, setTransactions] = useState([
        { id: 'GD001', date: '25/12/2024', type: 'income', amount: 4500000, category: 'Bán hàng', desc: 'Doanh thu ca sáng', staff: 'Lan Anh' },
        { id: 'GD002', date: '25/12/2024', type: 'expense', amount: 1200000, category: 'Nguyên liệu', desc: 'Nhập sữa tươi & đá', staff: 'Minh Tâm' },
        { id: 'GD003', date: '24/12/2024', type: 'expense', amount: 500000, category: 'Điện nước', desc: 'Thanh toán tiền mạng VNPT', staff: 'Lan Anh' },
        { id: 'GD004', date: '24/12/2024', type: 'income', amount: 5200000, category: 'Bán hàng', desc: 'Doanh thu cả ngày', staff: 'Hệ thống' },
        { id: 'GD005', date: '23/12/2024', type: 'expense', amount: 2000000, category: 'Lương thưởng', desc: 'Tạm ứng lương T12', staff: 'Admin' },
    ]);

    // --- STATES ---
    const [filterType, setFilterType] = useState('all'); // all, income, expense
    const [searchTerm, setSearchTerm] = useState('');
    
    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('income'); // income (Thu) hoặc expense (Chi)

    // --- TÍNH TOÁN THỐNG KÊ (Real-time) ---
    const stats = useMemo(() => {
        const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
        const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
        return {
            income,
            expense,
            profit: income - expense
        };
    }, [transactions]);

    // --- LỌC DỮ LIỆU ---
    const filteredTransactions = transactions.filter(t => {
        const matchType = filterType === 'all' || t.type === filterType;
        const matchSearch = t.desc.toLowerCase().includes(searchTerm.toLowerCase()) || t.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchType && matchSearch;
    });

    // --- XỬ LÝ FORM ---
    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTrans = {
            id: `GD${Math.floor(Math.random() * 1000)}`,
            date: new Date().toLocaleDateString('vi-VN'), // Lấy ngày hiện tại
            type: modalType,
            amount: Number(formData.get('amount')),
            category: formData.get('category'),
            desc: formData.get('desc'),
            staff: 'Admin' // Giả lập người đang đăng nhập
        };

        setTransactions([newTrans, ...transactions]); // Thêm vào đầu danh sách
        setShowModal(false);
        alert("Đã tạo phiếu thành công!");
    };

    return (
        <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto relative">
            <div className="text-lg font-bold mb-[15px] text-accent border-b border-white/10 pb-2">
                💰 Quản lý Thu - Chi
            </div>

            {/* --- DASHBOARD CARDS (Tự động tính toán) --- */}
            <div className="grid grid-cols-3 gap-5 mb-8">
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="text-text-dim text-sm font-medium mb-2">Tổng Thu (Tháng)</div>
                    <div className="text-2xl font-extrabold text-success">+ {stats.income.toLocaleString()}đ</div>
                    <div className="absolute right-[-10px] top-[-10px] text-[80px] opacity-5 text-success">↓</div>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="text-text-dim text-sm font-medium mb-2">Tổng Chi (Tháng)</div>
                    <div className="text-2xl font-extrabold text-danger">- {stats.expense.toLocaleString()}đ</div>
                    <div className="absolute right-[-10px] top-[-10px] text-[80px] opacity-5 text-danger">↑</div>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="text-text-dim text-sm font-medium mb-2">Lợi nhuận ròng</div>
                    <div className={`text-2xl font-extrabold ${stats.profit >= 0 ? 'text-accent' : 'text-danger'}`}>
                        {stats.profit >= 0 ? '+' : ''} {stats.profit.toLocaleString()}đ
                    </div>
                    <div className="absolute right-[-10px] top-[-10px] text-[80px] opacity-5 text-accent">$</div>
                </div>
            </div>

            {/* --- TOOLBAR --- */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_auto] gap-[15px] mb-5 bg-surface p-[15px] rounded-[15px]">
                <input 
                    type="text" placeholder="🔍 Tìm theo nội dung, danh mục..." 
                    className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none focus:border-accent"
                    value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                />
                <select className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none" onChange={e => setFilterType(e.target.value)}>
                    <option value="all">Tất cả giao dịch</option>
                    <option value="income">Chỉ khoản Thu (+)</option>
                    <option value="expense">Chỉ khoản Chi (-)</option>
                </select>
                <select className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none">
                    <option>Tháng này</option>
                    <option>Tháng trước</option>
                </select>
                <div className="flex gap-2">
                    <button 
                        onClick={() => { setModalType('expense'); setShowModal(true); }}
                        className="bg-danger/10 border border-danger/50 text-danger font-bold px-4 rounded-lg hover:bg-danger hover:text-white transition-all"
                    >
                        - Phiếu Chi
                    </button>
                    <button 
                        onClick={() => { setModalType('income'); setShowModal(true); }}
                        className="bg-success/10 border border-success/50 text-success font-bold px-4 rounded-lg hover:bg-success hover:text-white transition-all"
                    >
                        + Phiếu Thu
                    </button>
                </div>
            </div>

            {/* --- TABLE --- */}
            <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-[10px]">
                    <thead>
                        <tr>
                            {["Mã GD", "Thời gian", "Loại", "Số tiền", "Danh mục", "Nội dung", "Người tạo", "Thao tác"].map(h => (
                                <th key={h} className="text-left p-[15px] text-text-dim text-[13px]">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((t) => (
                            <tr key={t.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-[15px] bg-surface first:rounded-l-xl font-mono text-text-dim">{t.id}</td>
                                <td className="p-[15px] bg-surface text-sm">{t.date}</td>
                                <td className="p-[15px] bg-surface">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${t.type === 'income' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                                        {t.type === 'income' ? 'Phiếu Thu' : 'Phiếu Chi'}
                                    </span>
                                </td>
                                <td className={`p-[15px] bg-surface font-bold ${t.type === 'income' ? 'text-success' : 'text-danger'}`}>
                                    {t.type === 'income' ? '+' : '-'}{t.amount.toLocaleString()}đ
                                </td>
                                <td className="p-[15px] bg-surface"><span className="bg-white/5 px-2 py-1 rounded text-xs">{t.category}</span></td>
                                <td className="p-[15px] bg-surface text-sm max-w-[200px] truncate" title={t.desc}>{t.desc}</td>
                                <td className="p-[15px] bg-surface text-text-dim text-sm">{t.staff}</td>
                                <td className="p-[15px] bg-surface last:rounded-r-xl">
                                    <button className="text-text-dim hover:text-white">👁️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- MODAL TẠO PHIẾU --- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center backdrop-blur-sm animate-fadeIn">
                    <div className="bg-surface border border-white/10 p-6 rounded-2xl w-[500px] shadow-2xl">
                        <h3 className={`text-xl font-bold mb-6 border-b border-white/10 pb-3 ${modalType === 'income' ? 'text-success' : 'text-danger'}`}>
                            {modalType === 'income' ? '📥 Tạo Phiếu Thu Mới' : '📤 Tạo Phiếu Chi Mới'}
                        </h3>
                        <form onSubmit={handleSave} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm text-text-dim block mb-1">Số tiền (VNĐ)</label>
                                <input type="number" name="amount" required autoFocus className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white text-lg font-bold focus:border-accent outline-none" placeholder="0" />
                            </div>
                            <div>
                                <label className="text-sm text-text-dim block mb-1">Danh mục</label>
                                <select name="category" className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white outline-none">
                                    {modalType === 'income' ? (
                                        <>
                                            <option>Bán hàng</option>
                                            <option>Thu nợ</option>
                                            <option>Khác</option>
                                        </>
                                    ) : (
                                        <>
                                            <option>Nguyên liệu</option>
                                            <option>Điện nước / Internet</option>
                                            <option>Lương nhân viên</option>
                                            <option>Sửa chữa & Bảo trì</option>
                                            <option>Marketing</option>
                                            <option>Mặt bằng</option>
                                        </>
                                    )}
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-text-dim block mb-1">Nội dung / Ghi chú</label>
                                <textarea name="desc" required rows="3" className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white focus:border-accent outline-none" placeholder="Nhập lý do chi/thu..."></textarea>
                            </div>
                            
                            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold transition-colors">HỦY BỎ</button>
                                <button type="submit" className={`flex-1 py-3 rounded-xl text-white hover:brightness-110 font-bold shadow-lg ${modalType === 'income' ? 'bg-success' : 'bg-danger'}`}>
                                    LƯU PHIẾU
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Finance;