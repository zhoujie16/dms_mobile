import Http from "@/common/http.js";
import SERVER from '../server.js';

//登录
export const loginHttp = params =>Http.post(`${SERVER.DMSCLOUD_BASEDATA}/login`, params, {isLoading: true});

export const editPasswordHttp = params => Http.post("/api/sysManage/editPassword", params, {isLoading: true});
