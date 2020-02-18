import Http from "@/common/http.js";

export const AjaxScrollData = params =>
  Http.get("/testScrollData", params, {
    isLoading: false
  });

//https://mock.yonyoucloud.com/mock/3597/commonDict

export const commonDict = params =>
  Http.get("/commonDict", params, {
    isLoading: false
  });