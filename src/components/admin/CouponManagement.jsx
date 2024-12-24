// New component src/components/admin/CouponManagement.jsx
const CouponManagement = () => {
    const [coupons, setCoupons] = useState([]);
    
    const addCoupon = async (couponData) => {
      const response = await fetch('https://ecommercebackend-8gx8.onrender.com/coupon/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(couponData)
      });
      // Handle response
    };
  
    return (
      <div>
        {/* Coupon management UI */}
      </div>
    );
  };