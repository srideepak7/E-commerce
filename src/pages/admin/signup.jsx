import React from "react";
import AdminSignup from "../../components/admin/signup";

const SellerPage = () => {
  return <AdminSignup />;
};

const sendVerificationEmail = async (email) => {
  const response = await fetch('https://ecommercebackend-8gx8.onrender.com/seller/send-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  // Handle verification flow
};

export default SellerPage;

