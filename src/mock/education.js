import { mockRequest as request } from "@/api/request";

export const mockClassSchedule = () => {
  return request.get("/5a7b2324011d2a20712177ae");
};

export const mockGetAddCourses = (type = "type") => {
  return request.post(`/5c054f50b2e9fd1d1feef378?type=${type}`);
};

export const mockGetUserGrade = () => {
  return request.get("/5a7b2641011d2a20712177bb");
};

export const mockRankingSelf = () => {
  return request.get("/5ab9b7ae22017f206f8bf4cc");
};

export const mockGetUserGradeTest = () => {
  return request.get("/5a7b237cf21ec320661009ac");
};

export const mockGetSupplyment = () => {
  return request.get("/5a6194a797c1292065e240dc");
};

export const mockGetYourOwnExam = (type = 1) => {
  return request.get(`/5a617d38f21ec320660ff3d9?type=${type}`);
};
