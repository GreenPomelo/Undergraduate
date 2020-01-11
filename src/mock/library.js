import { mockRequest as request } from "@/api/request";

export const mockCheckBookHistory = () => {
  return request.get("/5c4476be1382fc1d1917dccc");
};
export const mockHotBooks = () => {
  return request.get("/5a9662d7011d2a2071218137");
};

export const mockRemainSeats = () => {
  return request.get("/5a9639d1f21ec3206610131f");
};

export const mockLibrarySearch = (content, page) => {
  return request.post("/5a9639fb97c1292065e25fed", {
    content,
    page
  });
};

export const mockAlreadyBorrowBooksSum = () => {
  return request.post("/5a9639ee22017f206f8bea5e");
};
export const mockHistoricalBorrow = () => {
  return request.post("/5a9635a4011d2a207121812c");
};
export const mockBookArrears = () => {
  return request.post("/5a966239011d2a2071218134");
};
export const mockBookStore = () => {
  return request.get("/5c4476be1382fc1d1917dccc");
};
export const mockBookStoreAgain = () => {
  return request.post("/5a96a283f21ec320661013b3");
};
export const mockBookStoreContent = (marc_no = "123") => {
  return request.post("/5a963dcc97c1292065e25ff1", {
    marc_no
  });
};
