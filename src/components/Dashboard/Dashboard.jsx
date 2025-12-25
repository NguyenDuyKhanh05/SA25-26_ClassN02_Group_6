// import React from 'react';
// import { 
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//     BarChart, Bar, Cell, PieChart, Pie, Legend 
// } from 'recharts';

// const Dashboard = () => {
//     // --- MOCK DATA ---
    
//     // 1. Dữ liệu Doanh thu 7 ngày gần nhất
//     const dataRevenue = [
//         { name: 'Thứ 2', dt: 4000000 },
//         { name: 'Thứ 3', dt: 3000000 },
//         { name: 'Thứ 4', dt: 2000000 },
//         { name: 'Thứ 5', dt: 2780000 },
//         { name: 'Thứ 6', dt: 1890000 },
//         { name: 'Thứ 7', dt: 6390000 },
//         { name: 'CN', dt: 8490000 },
//     ];

//     // 2. Dữ liệu Top món bán chạy
//     const dataBestSeller = [
//         { name: 'Bạc Xỉu', qty: 120 },
//         { name: 'Espresso', qty: 98 },
//         { name: 'Trà Đào', qty: 86 },
//         { name: 'Khô Gà', qty: 55 },
//         { name: 'Nước Cam', qty: 40 },
//     ];

//     // 3. Dữ liệu Tỷ trọng nhóm hàng
//     const dataCategory = [
//         { name: 'Đồ uống', value: 65, color: '#d4a373' }, // Màu accent
//         { name: 'Đồ ăn', value: 25, color: '#4ade80' },   // Màu success
//         { name: 'Khác', value: 10, color: '#fb7185' },    // Màu danger
//     ];

//     // Định dạng tiền tệ cho Tooltip
//     const formatCurrency = (value) => `${value.toLocaleString()}đ`;

//     return (
//         <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto relative bg-bg">
//             <div className="text-lg font-bold mb-[20px] text-accent border-b border-white/10 pb-2">
//                 📊 Thống kê & Báo cáo
//             </div>

//             {/* --- 1. OVERVIEW CARDS --- */}
//             <div className="grid grid-cols-3 gap-5 mb-8">
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
//                     <div className="text-text-dim text-sm font-bold uppercase tracking-wider mb-2">Doanh thu tháng</div>
//                     <div className="text-3xl font-extrabold text-success">45.000.000đ</div>
//                     <div className="text-xs text-text-dim mt-2">↗ 12% so với tháng trước</div>
//                     <div className="absolute right-[-10px] bottom-[-10px] text-[100px] opacity-5 text-white">💲</div>
//                 </div>
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
//                     <div className="text-text-dim text-sm font-bold uppercase tracking-wider mb-2">Tổng đơn hàng</div>
//                     <div className="text-3xl font-extrabold text-white">1,280 <span className="text-base font-normal text-text-dim">đơn</span></div>
//                     <div className="text-xs text-text-dim mt-2">Trung bình 42 đơn/ngày</div>
//                     <div className="absolute right-[-10px] bottom-[-10px] text-[100px] opacity-5 text-white">🧾</div>
//                 </div>
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
//                     <div className="text-text-dim text-sm font-bold uppercase tracking-wider mb-2">Lợi nhuận ước tính</div>
//                     <div className="text-3xl font-extrabold text-warning">18.500.000đ</div>
//                     <div className="text-xs text-text-dim mt-2">Tỷ suất ~41%</div>
//                     <div className="absolute right-[-10px] bottom-[-10px] text-[100px] opacity-5 text-white">📈</div>
//                 </div>
//             </div>

//             {/* --- 2. MAIN CHART SECTION --- */}
//             <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">
                
//                 {/* Biểu đồ Doanh thu (Area Chart) */}
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5">
//                     <h3 className="text-white font-bold mb-6 flex justify-between items-center">
//                         <span>📈 Xu hướng doanh thu (7 ngày)</span>
//                         <select className="bg-bg text-xs text-white p-2 rounded border border-white/10 outline-none">
//                             <option>7 ngày qua</option>
//                             <option>Tháng này</option>
//                         </select>
//                     </h3>
//                     <div className="h-[300px] w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <AreaChart data={dataRevenue}>
//                                 <defs>
//                                     <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                                         <stop offset="5%" stopColor="#d4a373" stopOpacity={0.8}/>
//                                         <stop offset="95%" stopColor="#d4a373" stopOpacity={0}/>
//                                     </linearGradient>
//                                 </defs>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
//                                 <XAxis dataKey="name" stroke="#666" tick={{fill: '#999', fontSize: 12}} />
//                                 <YAxis stroke="#666" tick={{fill: '#999', fontSize: 12}} tickFormatter={(value) => `${value/1000000}M`} />
//                                 <Tooltip 
//                                     contentStyle={{backgroundColor: '#1a1c1e', borderColor: '#333', borderRadius: '8px'}} 
//                                     itemStyle={{color: '#d4a373'}}
//                                     formatter={(value) => formatCurrency(value)}
//                                 />
//                                 <Area type="monotone" dataKey="dt" stroke="#d4a373" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
//                             </AreaChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>

//                 {/* Biểu đồ Tròn (Pie Chart) */}
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 flex flex-col">
//                     <h3 className="text-white font-bold mb-2">🍰 Tỷ trọng danh mục</h3>
//                     <div className="flex-1 min-h-[250px] relative">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <PieChart>
//                                 <Pie 
//                                     data={dataCategory} 
//                                     cx="50%" cy="50%" 
//                                     innerRadius={60} outerRadius={80} 
//                                     paddingAngle={5} 
//                                     dataKey="value"
//                                 >
//                                     {dataCategory.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} fill={entry.color} />
//                                     ))}
//                                 </Pie>
//                                 <Tooltip contentStyle={{backgroundColor: '#1a1c1e', borderColor: '#333', borderRadius: '8px'}} />
//                                 <Legend verticalAlign="bottom" height={36}/>
//                             </PieChart>
//                         </ResponsiveContainer>
//                         {/* Center Text */}
//                         <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none pb-8">
//                             <span className="text-3xl font-bold text-white">100%</span>
//                             <span className="text-xs text-text-dim">Tổng quan</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* --- 3. TOP PRODUCTS (Bar Chart) --- */}
//             <div className="bg-surface p-6 rounded-2xl border border-white/5">
//                 <h3 className="text-white font-bold mb-6">🏆 Top 5 Món Bán Chạy Nhất</h3>
//                 <div className="h-[250px] w-full">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <BarChart data={dataBestSeller} layout="vertical" barSize={20}>
//                             <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
//                             <XAxis type="number" stroke="#666" hide />
//                             <YAxis dataKey="name" type="category" width={100} stroke="#999" tick={{fill: '#eee', fontSize: 13, fontWeight: 'bold'}} />
//                             <Tooltip 
//                                 cursor={{fill: '#ffffff10'}}
//                                 contentStyle={{backgroundColor: '#1a1c1e', borderColor: '#333', borderRadius: '8px'}}
//                             />
//                             <Bar dataKey="qty" fill="#4ade80" radius={[0, 4, 4, 0]}>
//                                 {dataBestSeller.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={index === 0 ? '#facc15' : '#4ade80'} />
//                                 ))}
//                             </Bar>
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashboard;











// import React from 'react';
// import { 
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//     BarChart, Bar, Cell, PieChart, Pie, Legend 
// } from 'recharts';

// const Dashboard = () => {
//     // --- MOCK DATA BIỂU ĐỒ ---
//     const dataRevenue = [
//         { name: 'T2', dt: 4000000 }, { name: 'T3', dt: 3000000 },
//         { name: 'T4', dt: 2000000 }, { name: 'T5', dt: 2780000 },
//         { name: 'T6', dt: 1890000 }, { name: 'T7', dt: 6390000 }, { name: 'CN', dt: 8490000 },
//     ];
//     const dataCategory = [
//         { name: 'Đồ uống', value: 65, color: '#d4a373' },
//         { name: 'Đồ ăn', value: 25, color: '#4ade80' },
//         { name: 'Khác', value: 10, color: '#fb7185' },
//     ];

//     // --- MOCK DATA: ĐƠN HÀNG MỚI NHẤT (Mới bổ sung) ---
//     const recentOrders = [
//         { id: '#10234', time: '10:32', total: 125000, status: 'Success', items: '2 Cafe, 1 Bánh' },
//         { id: '#10233', time: '10:15', total: 45000, status: 'Success', items: '1 Trà đào' },
//         { id: '#10232', time: '09:50', total: 320000, status: 'Pending', items: 'Combo Nhóm 4' },
//         { id: '#10231', time: '09:45', total: 85000, status: 'Success', items: '2 Bạc xỉu' },
//     ];

//     // --- MOCK DATA: CẢNH BÁO TỒN KHO (Mới bổ sung) ---
//     const lowStockItems = [
//         { name: 'Sữa tươi TH True', remain: 2, min: 5, unit: 'thùng' },
//         { name: 'Ly nhựa 500ml', remain: 45, min: 100, unit: 'cái' },
//         { name: 'Đường cát biên hòa', remain: 1, min: 3, unit: 'kg' },
//     ];

//     const formatCurrency = (value) => `${value.toLocaleString()}đ`;

//     return (
//         <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto relative bg-bg">
//             <div className="text-lg font-bold mb-[20px] text-accent border-b border-white/10 pb-2 flex justify-between items-center">
//                 <span>📊 Trung tâm điều hành</span>
//                 <div className="text-xs text-text-dim font-normal">Cập nhật: Vừa xong</div>
//             </div>

//             {/* 1. OVERVIEW CARDS */}
//             <div className="grid grid-cols-4 gap-5 mb-6">
//                 <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
//                     <div className="text-text-dim text-xs font-bold uppercase mb-2">Doanh thu ngày</div>
//                     <div className="text-2xl font-extrabold text-success">4.200.000đ</div>
//                     <div className="text-xs text-text-dim mt-1">↗ 12% hôm qua</div>
//                 </div>
//                 <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
//                     <div className="text-text-dim text-xs font-bold uppercase mb-2">Đơn hàng</div>
//                     <div className="text-2xl font-extrabold text-white">85 <span className="text-sm font-normal">đơn</span></div>
//                     <div className="text-xs text-text-dim mt-1">Trung bình 50k/đơn</div>
//                 </div>
//                 <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
//                     <div className="text-text-dim text-xs font-bold uppercase mb-2">Khách hàng</div>
//                     <div className="text-2xl font-extrabold text-accent">32 <span className="text-sm font-normal">mới</span></div>
//                     <div className="text-xs text-text-dim mt-1">12 khách quay lại</div>
//                 </div>
//                 <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
//                     <div className="text-text-dim text-xs font-bold uppercase mb-2">Nhân sự online</div>
//                     <div className="text-2xl font-extrabold text-blue-400">03 <span className="text-sm font-normal">người</span></div>
//                     <div className="text-xs text-text-dim mt-1">Ca Sáng (7h-15h)</div>
//                 </div>
//             </div>

//             {/* 2. CHARTS AREA */}
//             <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 h-[300px]">
//                     <h3 className="text-white font-bold mb-4 text-sm flex justify-between">
//                         📈 Biểu đồ doanh thu tuần này
//                         <span className="text-xs text-accent cursor-pointer">Chi tiết &rarr;</span>
//                     </h3>
//                     <ResponsiveContainer width="100%" height="90%">
//                         <AreaChart data={dataRevenue}>
//                             <defs>
//                                 <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="5%" stopColor="#d4a373" stopOpacity={0.8}/>
//                                     <stop offset="95%" stopColor="#d4a373" stopOpacity={0}/>
//                                 </linearGradient>
//                             </defs>
//                             <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
//                             <XAxis dataKey="name" stroke="#666" tick={{fill: '#999', fontSize: 10}} />
//                             <YAxis stroke="#666" tick={{fill: '#999', fontSize: 10}} tickFormatter={(val)=>`${val/1000000}M`} />
//                             <Tooltip contentStyle={{backgroundColor:'#1a1c1e', borderColor:'#333'}} itemStyle={{color:'#d4a373'}} formatter={formatCurrency} />
//                             <Area type="monotone" dataKey="dt" stroke="#d4a373" strokeWidth={2} fill="url(#colorRev)" />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>

//                 <div className="bg-surface p-6 rounded-2xl border border-white/5 h-[300px] flex flex-col">
//                     <h3 className="text-white font-bold mb-2 text-sm">🍰 Tỷ trọng bán hàng</h3>
//                     <div className="flex-1 relative">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <PieChart>
//                                 <Pie data={dataCategory} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
//                                     {dataCategory.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
//                                 </Pie>
//                                 <Tooltip contentStyle={{backgroundColor:'#1a1c1e', borderColor:'#333'}} />
//                                 <Legend verticalAlign="bottom" height={36} iconSize={10} />
//                             </PieChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>
//             </div>

//             {/* 3. BOTTOM SECTION: Recent Orders & Stock Alerts */}
//             <div className="grid grid-cols-[2fr_1fr] gap-6">
                
//                 {/* Bảng đơn hàng gần đây */}
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5">
//                     <h3 className="text-white font-bold mb-4 text-sm flex justify-between items-center">
//                         🧾 Đơn hàng mới nhất
//                         <button className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-text-dim">Xem tất cả</button>
//                     </h3>
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-sm text-left">
//                             <thead className="text-xs text-text-dim uppercase bg-white/5">
//                                 <tr>
//                                     <th className="px-3 py-2 rounded-l-lg">Mã đơn</th>
//                                     <th className="px-3 py-2">Thời gian</th>
//                                     <th className="px-3 py-2">Món</th>
//                                     <th className="px-3 py-2">Tổng tiền</th>
//                                     <th className="px-3 py-2 rounded-r-lg">Trạng thái</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {recentOrders.map((order, i) => (
//                                     <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
//                                         <td className="px-3 py-3 font-bold text-accent">{order.id}</td>
//                                         <td className="px-3 py-3 text-text-dim">{order.time}</td>
//                                         <td className="px-3 py-3 truncate max-w-[150px] text-white">{order.items}</td>
//                                         <td className="px-3 py-3 font-bold">{order.total.toLocaleString()}đ</td>
//                                         <td className="px-3 py-3">
//                                             <span className={`px-2 py-1 rounded text-[10px] font-bold ${order.status === 'Success' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
//                                                 {order.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//                 {/* Cảnh báo tồn kho */}
//                 <div className="bg-surface p-6 rounded-2xl border border-white/5">
//                     <h3 className="text-danger font-bold mb-4 text-sm flex items-center gap-2">
//                         ⚠️ Cảnh báo tồn kho
//                         <span className="bg-danger text-white text-[10px] px-2 py-0.5 rounded-full">{lowStockItems.length}</span>
//                     </h3>
//                     <div className="space-y-3">
//                         {lowStockItems.map((item, i) => (
//                             <div key={i} className="flex justify-between items-center p-3 bg-danger/5 border border-danger/10 rounded-xl hover:bg-danger/10 transition-colors cursor-pointer">
//                                 <div>
//                                     <div className="text-white text-sm font-bold">{item.name}</div>
//                                     <div className="text-text-dim text-xs">Còn lại: <span className="text-danger font-bold">{item.remain} {item.unit}</span></div>
//                                 </div>
//                                 <button className="text-xs bg-danger text-white px-3 py-1 rounded font-bold hover:brightness-110">Nhập</button>
//                             </div>
//                         ))}
//                         {lowStockItems.length === 0 && <div className="text-center text-text-dim text-sm py-5">Kho hàng ổn định ✅</div>}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;










import React from 'react';
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, PieChart, Pie, Legend 
} from 'recharts';

const Dashboard = () => {
    // --- MOCK DATA BIỂU ĐỒ ---
    const dataRevenue = [
        { name: 'T2', dt: 4000000 }, { name: 'T3', dt: 3000000 },
        { name: 'T4', dt: 2000000 }, { name: 'T5', dt: 2780000 },
        { name: 'T6', dt: 1890000 }, { name: 'T7', dt: 6390000 }, { name: 'CN', dt: 8490000 },
    ];
    const dataCategory = [
        { name: 'Đồ uống', value: 65, color: '#d4a373' },
        { name: 'Đồ ăn', value: 25, color: '#4ade80' },
        { name: 'Khác', value: 10, color: '#fb7185' },
    ];

    // --- MOCK DATA: ĐƠN HÀNG MỚI (Real-time) ---
    const recentOrders = [
        { id: '#10234', time: '10:32', total: 125000, status: 'Success', items: '2 Cafe, 1 Bánh' },
        { id: '#10233', time: '10:15', total: 45000, status: 'Success', items: '1 Trà đào' },
        { id: '#10232', time: '09:50', total: 320000, status: 'Pending', items: 'Combo Nhóm 4' },
        { id: '#10231', time: '09:45', total: 85000, status: 'Success', items: '2 Bạc xỉu' },
    ];

    // --- MOCK DATA: CẢNH BÁO KHO ---
    const lowStockItems = [
        { name: 'Sữa tươi TH True', remain: 2, min: 5, unit: 'thùng' },
        { name: 'Ly nhựa 500ml', remain: 45, min: 100, unit: 'cái' },
        { name: 'Đường cát biên hòa', remain: 1, min: 3, unit: 'kg' },
    ];

    const formatCurrency = (value) => `${value.toLocaleString()}đ`;

    return (
        <div className="w-full h-full p-[30px] animate-fadeIn overflow-y-auto relative bg-bg">
            <div className="text-lg font-bold mb-[20px] text-accent border-b border-white/10 pb-2 flex justify-between items-center">
                <span>📊 Trung tâm điều hành</span>
                <div className="text-xs text-text-dim font-normal">Cập nhật: Vừa xong</div>
            </div>

            {/* 1. OVERVIEW CARDS */}
            <div className="grid grid-cols-4 gap-5 mb-6">
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="text-text-dim text-xs font-bold uppercase mb-2">Doanh thu ngày</div>
                    <div className="text-2xl font-extrabold text-success">4.200.000đ</div>
                    <div className="text-xs text-text-dim mt-1">↗ 12% hôm qua</div>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="text-text-dim text-xs font-bold uppercase mb-2">Đơn hàng</div>
                    <div className="text-2xl font-extrabold text-white">85 <span className="text-sm font-normal">đơn</span></div>
                    <div className="text-xs text-text-dim mt-1">Trung bình 50k/đơn</div>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="text-text-dim text-xs font-bold uppercase mb-2">Khách hàng</div>
                    <div className="text-2xl font-extrabold text-accent">32 <span className="text-sm font-normal">mới</span></div>
                    <div className="text-xs text-text-dim mt-1">12 khách quay lại</div>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="text-text-dim text-xs font-bold uppercase mb-2">Nhân sự online</div>
                    <div className="text-2xl font-extrabold text-blue-400">03 <span className="text-sm font-normal">người</span></div>
                    <div className="text-xs text-text-dim mt-1">Ca Sáng (7h-15h)</div>
                </div>
            </div>

            {/* 2. CHARTS AREA */}
            <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">
                <div className="bg-surface p-6 rounded-2xl border border-white/5 h-[300px]">
                    <h3 className="text-white font-bold mb-4 text-sm flex justify-between">
                        📈 Biểu đồ doanh thu tuần này
                        <span className="text-xs text-accent cursor-pointer">Chi tiết &rarr;</span>
                    </h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <AreaChart data={dataRevenue}>
                            <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d4a373" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#d4a373" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="name" stroke="#666" tick={{fill: '#999', fontSize: 10}} />
                            <YAxis stroke="#666" tick={{fill: '#999', fontSize: 10}} tickFormatter={(val)=>`${val/1000000}M`} />
                            <Tooltip contentStyle={{backgroundColor:'#1a1c1e', borderColor:'#333'}} itemStyle={{color:'#d4a373'}} formatter={formatCurrency} />
                            <Area type="monotone" dataKey="dt" stroke="#d4a373" strokeWidth={2} fill="url(#colorRev)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-surface p-6 rounded-2xl border border-white/5 h-[300px] flex flex-col">
                    <h3 className="text-white font-bold mb-2 text-sm">🍰 Tỷ trọng bán hàng</h3>
                    <div className="flex-1 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={dataCategory} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                                    {dataCategory.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                </Pie>
                                <Tooltip contentStyle={{backgroundColor:'#1a1c1e', borderColor:'#333'}} />
                                <Legend verticalAlign="bottom" height={36} iconSize={10} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM SECTION: Recent Orders & Stock Alerts */}
            <div className="grid grid-cols-[2fr_1fr] gap-6">
                
                {/* Bảng đơn hàng gần đây */}
                <div className="bg-surface p-6 rounded-2xl border border-white/5">
                    <h3 className="text-white font-bold mb-4 text-sm flex justify-between items-center">
                        🧾 Đơn hàng mới nhất
                        <button className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-text-dim">Xem tất cả</button>
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-text-dim uppercase bg-white/5">
                                <tr>
                                    <th className="px-3 py-2 rounded-l-lg">Mã đơn</th>
                                    <th className="px-3 py-2">Thời gian</th>
                                    <th className="px-3 py-2">Món</th>
                                    <th className="px-3 py-2">Tổng tiền</th>
                                    <th className="px-3 py-2 rounded-r-lg">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map((order, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="px-3 py-3 font-bold text-accent">{order.id}</td>
                                        <td className="px-3 py-3 text-text-dim">{order.time}</td>
                                        <td className="px-3 py-3 truncate max-w-[150px] text-white">{order.items}</td>
                                        <td className="px-3 py-3 font-bold">{order.total.toLocaleString()}đ</td>
                                        <td className="px-3 py-3">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${order.status === 'Success' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cảnh báo tồn kho */}
                <div className="bg-surface p-6 rounded-2xl border border-white/5">
                    <h3 className="text-danger font-bold mb-4 text-sm flex items-center gap-2">
                        ⚠️ Cảnh báo tồn kho
                        <span className="bg-danger text-white text-[10px] px-2 py-0.5 rounded-full">{lowStockItems.length}</span>
                    </h3>
                    <div className="space-y-3">
                        {lowStockItems.map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-3 bg-danger/5 border border-danger/10 rounded-xl hover:bg-danger/10 transition-colors cursor-pointer">
                                <div>
                                    <div className="text-white text-sm font-bold">{item.name}</div>
                                    <div className="text-text-dim text-xs">Còn lại: <span className="text-danger font-bold">{item.remain} {item.unit}</span></div>
                                </div>
                                <button className="text-xs bg-danger text-white px-3 py-1 rounded font-bold hover:brightness-110">Nhập</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;