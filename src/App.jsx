// import React from 'react';
// import { CartProvider, useCart } from './context/CartContext';
// import Sidebar from './components/Layout/Sidebar';
// import POS from './components/POS/POS';
// import Inventory from './components/Inventory/Inventory';
// import Dashboard from './components/Dashboard/Dashboard';
// import Settings from './components/Config/Settings';

// // Placeholder cho các trang chưa làm
// const Placeholder = ({t}) => <div className="flex-1 p-[30px] animate-fadeIn text-accent font-bold text-xl">{t} - Đang cập nhật...</div>;

// const MainContent = () => {
//     const { activePage } = useCart();
//     return (
//         // <main className="flex-1 overflow-hidden flex bg-bg">
//         <main className="flex-1 overflow-hidden relative bg-bg">
//             {activePage === 'pos' && <POS />}
//             {activePage === 'inventory' && <Inventory />}
//             {activePage === 'stats' && <Dashboard />}
//             {activePage === 'settings' && <Settings />}
//             {activePage === 'crm' && <Placeholder t="👥 Khách hàng" />}
//             {activePage === 'finance' && <Placeholder t="💰 Thu Chi" />}
//             {activePage === 'marketing' && <Placeholder t="🎁 Khuyến mãi" />}
//             {activePage === 'staff' && <Placeholder t="👔 Nhân viên" />}
//         </main>
//     );
// };

// function App() {
//   return (
//     <CartProvider>
//       <div className="flex h-screen bg-bg text-text font-sans">
//         <Sidebar />
//         <MainContent />
//       </div>
//     </CartProvider>
//   );
// }

// export default App;













import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Sidebar from './components/Layout/Sidebar';
import POS from './components/POS/POS';
import Inventory from './components/Inventory/Inventory';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Config/Settings';
import CRM from './components/CRM/CRM'; // <--- 1. Import CRM
import Finance from './components/Finance/Finance';
import Staff from './components/Staff/Staff';
import Marketing from './components/Marketing/Marketing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Statistics from './pages/Statistics';
import SystemSettings from './pages/SystemSettings';
// Placeholder cho các trang chưa làm
const Placeholder = ({t}) => (
    <div className="w-full h-full p-[30px] animate-fadeIn text-accent font-bold text-xl">
        {t} - Đang cập nhật...
    </div>
);

const MainContent = () => {
    const { activePage } = useCart();
    
    // Lưu ý: class "flex-1" ở đây rất quan trọng để đẩy nội dung ra full màn hình
    return (
        <main className="flex-1 h-full overflow-hidden relative bg-bg">
            {activePage === 'pos' && <POS />}
            {activePage === 'inventory' && <Inventory />}
            {activePage === 'stats' && <Dashboard />}
            {activePage === 'settings' && <Settings />}
            {activePage === 'crm' && <CRM />}
            {/* {activePage === 'crm' && <Placeholder t="👥 Khách hàng" />} */}
            {/* {activePage === 'finance' && <Placeholder t="💰 Thu Chi" />} */}
            {/* {activePage === 'marketing' && <Placeholder t="🎁 Khuyến mãi" />}
            {activePage === 'staff' && <Placeholder t="👔 Nhân viên" />} */}
            {activePage === 'finance' && <Finance />}
            {activePage === 'marketing' && <Marketing />}
            {activePage === 'staff' && <Staff />}
        </main>
    );
};

function App() {
  return (
    <CartProvider>
      {/* Container chính: Flex Row (Ngang) */}
      <div className="flex h-screen w-screen bg-bg text-text font-sans overflow-hidden">
        {/* Sidebar có width cố định (đã set trong component Sidebar) */}
        <Sidebar />
        
        {/* MainContent sẽ tự động giãn lấp đầy khoảng trống còn lại */}
        <MainContent />
      </div>
    </CartProvider>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        {/* Các route khác của bạn */}
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/system" element={<SystemSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
