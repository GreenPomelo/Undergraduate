import { mockRequest as request } from "@/api/request";

export const mockGetNotification = () => {
  return request.get("/5abccaa0011d2a2071218d43");
};

export const mockMarkAllAsRead = () => {
  return request.put("/5abccb7a22017f206f8bf68e");
};

export const mockDeleteAll = () => {
  return request.put("/5abccba497c1292065e26c0c");
};
