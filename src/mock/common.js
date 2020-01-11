import { mockRequest as request } from "@/api/request";

export const mockGetUserPEGrade = (semester = "1") => {
  return request.get("/5a5d9300f21ec320660ff3d4", {
    params: {
      semester
    }
  });
};

export const mockGetExercise = () => {
  return request.get("/5d294b3ce640c81fad72a058");
};

export const mockGetRunHistory = () => {
  return request.get("/5d29524fa992181fb4f64ec1");
};

export const mockOwnGraduateGrade = () => {
  return request.get("/5d31678103cf111fb9ed623a");
};

export const getUpdateLog = () => request.get("/5de23e43db66aa1fb0609cc3");

export const getSchoolBus = () => request.get("/5de66a21db66aa1fb0609e1e");
