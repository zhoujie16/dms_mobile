import Http from "@/common/http.js";

export const loginHttp = params =>
  Http.get("/api/sysManage/login", params, { isLoading: true });
