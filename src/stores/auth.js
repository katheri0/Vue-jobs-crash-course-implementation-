import api from "@/services/api";
// Login

// Login (query users)
export const loginUser = async (email, password) => {
  return api.get(`/users?email=${email}&password=${password}`);
};

// Get single authenticated user (later can use token/session)
export const getAuthenticatedUser = (id) => {
  return api.get(`/users/${id}`);
};


// Register
export const registerUser = async (formData) => {
  return api.post('/users', formData); // إرسال بيانات التسجيل إلى السيرفر
};


// تسجيل الخروج
export const logoutUser = () => {
  return api.post('/logout'); // إرسال طلب خروج إلى السيرفر
};
