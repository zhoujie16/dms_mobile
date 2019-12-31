import Http from "@/common/http.js";

export const AjaxScrollData = params =>
  Http.get("/testScrollData", params, {
    isLoading: false
  });
