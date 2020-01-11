import { mockRequest as request } from "@/api/request";
import qs from "qs";

export const mockCampusCardRequestInfo = () => {
  return request.post("/5a6e75c9011d2a207121663d");
};

export const mockSevenDayTurnOver = () => {
  return request.post("/5ab7aee122017f206f8bf382");
};

export const mockYearTurnOver = () => {
  const year = new Date().getFullYear();
  return request.post(
    `/5a6ea8ef97c1292065e2452c`,
    qs.stringify({
      year: year
    })
  );
};

export const mockInternetRemain = (tran = "1", password = "1") => {
  return request.post(
    `/5ab86e5df21ec32066101d81`,
    qs.stringify({
      tran: tran,
      password: password
    })
  );
};

export const mockOneDayTurnOver = (page = "1") => {
  return request.post(
    "/5a6fd895011d2a20712167ab",
    qs.stringify({
      page: page
    })
  );
};

export const mockGetMoneyLog = () => {
  return request.get("/5c11c210cc00a21d11d2b7f9");
};
