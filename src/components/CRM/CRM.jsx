// import React, { useState } from 'react';
// import { useCart } from '../../context/CartContext';

// const CRM = () => {
//     const { customers } = useCart();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [rankFilter, setRankFilter] = useState('');

//     // Logic lọc dữ liệu
//     const filteredCustomers = customers.filter(c => {
//         const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.phone.includes(searchTerm);
//         const matchRank = rankFilter === '' || c.rank === rankFilter;
//         return matchSearch && matchRank;
//     });

//     // Helper màu sắc cho Hạng thẻ
//     const getRankColor = (rank) => {
//         if(rank === 'Vàng') return 'text-warning bg-warning/10 border-warning/20';
//         if(rank === 'Bạc') return 'text-gray-300 bg-gray-500/20 border-gray-500/20';
//         return 'text-orange-700 bg-orange-900/20 border-orange-900/20'; // Đồng
//     };

//     return (
//         <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto">
//             <div className="text-lg font-bold mb-[15px] text-accent border-b border-white/10 pb-2">
//                 👥 Khách hàng thân thiết
//             </div>

//             {/* Filter Bar */}
//             <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-[15px] mb-5 bg-surface p-[15px] rounded-[15px]">
//                 <input 
//                     type="text" 
//                     placeholder="🔍 Tìm theo tên hoặc SĐT..." 
//                     className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none focus:border-accent"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <select 
//                     className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none"
//                     onChange={(e) => setRankFilter(e.target.value)}
//                 >
//                     <option value="">Tất cả Hạng thẻ</option>
//                     <option value="Đồng">Hạng Đồng</option>
//                     <option value="Bạc">Hạng Bạc</option>
//                     <option value="Vàng">Hạng Vàng</option>
//                 </select>
//                 <select className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none">
//                     <option>Sắp xếp: Ngày đăng ký</option>
//                     <option>Sắp xếp: Tổng chi tiêu</option>
//                 </select>
//                 <button className="bg-accent text-white font-bold px-5 rounded-lg hover:brightness-110 shadow-lg shadow-accent/20">
//                     + Thêm khách
//                 </button>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="w-full border-separate border-spacing-y-[10px]">
//                     <thead>
//                         <tr>
//                             {["Họ tên", "Số điện thoại", "Ngày ĐK", "Hạng thẻ", "Điểm", "Tổng chi tiêu", "Ghé thăm cuối", "Thao tác"].map((h, i) => (
//                                 <th key={i} className="text-left p-[15px] text-text-dim text-[13px] whitespace-nowrap">{h}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredCustomers.map((c) => (
//                             <tr key={c.id} className="group hover:translate-y-[-2px] transition-transform">
//                                 <td className="p-[15px] bg-surface first:rounded-l-xl font-bold text-white">{c.name}</td>
//                                 <td className="p-[15px] bg-surface text-text-dim">{c.phone}</td>
//                                 <td className="p-[15px] bg-surface text-sm">{c.regDate}</td>
//                                 <td className="p-[15px] bg-surface">
//                                     <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getRankColor(c.rank)}`}>
//                                         {c.rank}
//                                     </span>
//                                 </td>
//                                 <td className="p-[15px] bg-surface font-bold text-accent">{c.points}</td>
//                                 <td className="p-[15px] bg-surface">{c.totalSpent.toLocaleString()}đ</td>
//                                 <td className="p-[15px] bg-surface text-sm text-text-dim">{c.lastVisit}</td>
//                                 <td className="p-[15px] bg-surface last:rounded-r-xl">
//                                     <div className="flex gap-2">
//                                         <button className="p-2 rounded bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors" title="Sửa">✏️</button>
//                                         <button className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors" title="Lịch sử">📜</button>
//                                         <button className="p-2 rounded bg-white/5 hover:bg-danger/20 hover:text-danger transition-colors" title="Xóa">🗑️</button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Pagination UI */}
//             <div className="flex justify-center items-center gap-3 mt-8">
//                 <button className="px-4 py-2 bg-surface rounded-lg text-text-dim hover:text-white border border-[#333]">Trang trước</button>
//                 <button className="w-10 h-10 bg-accent text-white font-bold rounded-lg shadow-lg shadow-accent/20">1</button>
//                 <button className="w-10 h-10 bg-surface text-text-dim hover:text-white rounded-lg border border-[#333]">2</button>
//                 <button className="w-10 h-10 bg-surface text-text-dim hover:text-white rounded-lg border border-[#333]">3</button>
//                 <button className="px-4 py-2 bg-surface rounded-lg text-text-dim hover:text-white border border-[#333]">Trang sau</button>
//             </div>
//         </div>
//     );
// };

// export default CRM;









import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const CRM = () => {
    const { customers } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [rankFilter, setRankFilter] = useState('');
    
    // --- STATE QUẢN LÝ MODAL ---
    const [showModal, setShowModal] = useState(false); // Modal Thêm/Sửa
    const [editingCustomer, setEditingCustomer] = useState(null);
    
    // State cho Modal Lịch sử
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [selectedHistory, setSelectedHistory] = useState({ name: '', orders: [] });

    // --- DỮ LIỆU GIẢ LẬP LỊCH SỬ MUA HÀNG ---
    // (Trong thực tế, dữ liệu này sẽ lấy từ API dựa vào ID khách hàng)
    const MOCK_HISTORY = [
        { id: 'DH001', date: '25/12/2024', items: 'Espresso (x1), Bánh gấu (x1)', total: 70000, staff: 'Lan Anh' },
        { id: 'DH002', date: '20/12/2024', items: 'Bạc Xỉu (x2)', total: 70000, staff: 'Minh Tâm' },
        { id: 'DH003', date: '15/12/2024', items: 'Trà Đào (x1), Hướng dương (x1)', total: 65000, staff: 'Lan Anh' },
    ];

    // Logic lọc khách hàng
    const filteredCustomers = customers.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.phone.includes(searchTerm);
        const matchRank = rankFilter === '' || c.rank === rankFilter;
        return matchSearch && matchRank;
    });

    const getRankColor = (rank) => {
        if(rank === 'Vàng') return 'text-warning bg-warning/10 border-warning/20';
        if(rank === 'Bạc') return 'text-gray-300 bg-gray-500/20 border-gray-500/20';
        return 'text-orange-700 bg-orange-900/20 border-orange-900/20';
    };

    // --- CÁC HÀM XỬ LÝ ---
    const handleAdd = () => { setEditingCustomer(null); setShowModal(true); };
    const handleEdit = (customer) => { setEditingCustomer(customer); setShowModal(true); };

    // Hàm mở xem lịch sử
    const handleViewHistory = (customer) => {
        // Random dữ liệu lịch sử để demo (để mỗi khách trông hơi khác nhau một chút)
        const randomHistory = Math.random() > 0.5 ? MOCK_HISTORY : MOCK_HISTORY.slice(0, 2);
        
        setSelectedHistory({
            name: customer.name,
            orders: randomHistory
        });
        setShowHistoryModal(true);
    };

    const handleDelete = (name) => {
        if(window.confirm(`Bạn có chắc muốn xóa khách hàng: ${name}?`)) {
            alert("Đã xóa thành công (Giả lập)");
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        setShowModal(false);
        alert("Đã lưu thông tin thành công!");
    };

    return (
        <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto relative">
            <div className="text-lg font-bold mb-[15px] text-accent border-b border-white/10 pb-2">
                👥 Khách hàng thân thiết
            </div>

            {/* Filter Bar */}
            <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-[15px] mb-5 bg-surface p-[15px] rounded-[15px]">
                <input type="text" placeholder="🔍 Tìm theo tên hoặc SĐT..." 
                    className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none focus:border-accent"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none" onChange={(e) => setRankFilter(e.target.value)}>
                    <option value="">Tất cả Hạng thẻ</option>
                    <option value="Đồng">Hạng Đồng</option>
                    <option value="Bạc">Hạng Bạc</option>
                    <option value="Vàng">Hạng Vàng</option>
                </select>
                <select className="bg-bg border border-[#333] text-white p-3 rounded-lg outline-none">
                    <option>Sắp xếp: Tổng chi tiêu</option>
                </select>
                <button onClick={handleAdd} className="bg-accent text-white font-bold px-5 rounded-lg hover:brightness-110 shadow-lg shadow-accent/20">
                    + Thêm khách
                </button>
            </div>

            {/* Table Khách hàng */}
            <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-[10px]">
                    <thead>
                        <tr>
                            {["Họ tên", "Số điện thoại", "Ngày ĐK", "Hạng thẻ", "Điểm", "Tổng chi tiêu", "Ghé thăm cuối", "Thao tác"].map((h, i) => (
                                <th key={i} className="text-left p-[15px] text-text-dim text-[13px] whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.map((c) => (
                            <tr key={c.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-[15px] bg-surface first:rounded-l-xl font-bold text-white">{c.name}</td>
                                <td className="p-[15px] bg-surface text-text-dim">{c.phone}</td>
                                <td className="p-[15px] bg-surface text-sm">{c.regDate}</td>
                                <td className="p-[15px] bg-surface">
                                    <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getRankColor(c.rank)}`}>{c.rank}</span>
                                </td>
                                <td className="p-[15px] bg-surface font-bold text-accent">{c.points}</td>
                                <td className="p-[15px] bg-surface">{c.totalSpent.toLocaleString()}đ</td>
                                <td className="p-[15px] bg-surface text-sm text-text-dim">{c.lastVisit}</td>
                                <td className="p-[15px] bg-surface last:rounded-r-xl">
                                    <div className="flex gap-2">
                                        <button onClick={() => handleEdit(c)} className="p-2 rounded bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors" title="Sửa thông tin">✏️</button>
                                        
                                        {/* Nút Xem Lịch Sử */}
                                        <button onClick={() => handleViewHistory(c)} className="p-2 rounded bg-white/5 hover:bg-warning/20 hover:text-warning transition-colors" title="Xem lịch sử mua hàng">📜</button>
                                        
                                        <button onClick={() => handleDelete(c.name)} className="p-2 rounded bg-white/5 hover:bg-danger/20 hover:text-danger transition-colors" title="Xóa khách hàng">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* --- MODAL 1: THÊM/SỬA KHÁCH HÀNG --- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center backdrop-blur-sm animate-fadeIn">
                    <div className="bg-surface border border-white/10 p-6 rounded-2xl w-[500px] shadow-2xl">
                        <h3 className="text-xl font-bold text-accent mb-6 border-b border-white/10 pb-3">
                            {editingCustomer ? '✏️ Cập nhật thông tin' : '👤 Thêm khách hàng mới'}
                        </h3>
                        <form onSubmit={handleSave} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm text-text-dim block mb-1">Họ và tên</label>
                                <input name="name" defaultValue={editingCustomer?.name} required className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white focus:border-accent outline-none" placeholder="Nhập tên khách..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-text-dim block mb-1">Số điện thoại</label>
                                    <input name="phone" defaultValue={editingCustomer?.phone} required className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white focus:border-accent outline-none" placeholder="09xxxxxxxx" />
                                </div>
                                <div>
                                    <label className="text-sm text-text-dim block mb-1">Hạng thẻ</label>
                                    <select name="rank" defaultValue={editingCustomer?.rank || "Đồng"} className="w-full bg-bg border border-[#444] rounded-lg p-3 text-white outline-none">
                                        <option value="Đồng">Hạng Đồng</option>
                                        <option value="Bạc">Hạng Bạc</option>
                                        <option value="Vàng">Hạng Vàng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold transition-colors">ĐÓNG</button>
                                <button type="submit" className="flex-1 py-3 rounded-xl bg-accent text-white hover:brightness-110 font-bold">LƯU LẠI</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* --- MODAL 2: LỊCH SỬ MUA HÀNG --- */}
            {showHistoryModal && (
                <div className="fixed inset-0 bg-black/80 z-[60] flex justify-center items-center backdrop-blur-sm animate-fadeIn">
                    <div className="bg-surface border border-white/10 p-0 rounded-2xl w-[700px] shadow-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-accent">📜 Lịch sử mua hàng: {selectedHistory.name}</h3>
                            <button onClick={() => setShowHistoryModal(false)} className="text-text-dim hover:text-white text-2xl">&times;</button>
                        </div>
                        
                        <div className="p-5 max-h-[400px] overflow-y-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-text-dim border-b border-white/10">
                                        <th className="text-left pb-3 font-medium">Mã ĐH</th>
                                        <th className="text-left pb-3 font-medium">Thời gian</th>
                                        <th className="text-left pb-3 font-medium">Món đã gọi</th>
                                        <th className="text-right pb-3 font-medium">Tổng tiền</th>
                                        <th className="text-right pb-3 font-medium">Nhân viên</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedHistory.orders.map((order, idx) => (
                                        <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                                            <td className="py-4 font-mono text-accent">{order.id}</td>
                                            <td className="py-4 text-text-dim">{order.date}</td>
                                            <td className="py-4 pr-4">{order.items}</td>
                                            <td className="py-4 text-right font-bold">{order.total.toLocaleString()}đ</td>
                                            <td className="py-4 text-right text-text-dim">{order.staff}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 border-t border-white/10 bg-bg/50 text-right">
                            <button onClick={() => setShowHistoryModal(false)} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-bold text-sm transition-colors">
                                ĐÓNG
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CRM;