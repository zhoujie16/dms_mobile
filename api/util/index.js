import Http from "@/common/http.js";
import SERVER from '../server.js';
//查询字典
export const queryDict = () => Http.get(`${SERVER.DMSCLOUD_BASEDATA}/dicts`, {}, {
  isLoading: true
});


//查询服务顾问
export const searchRoleByCode = params => Http.get(`${SERVER.DMSCLOUD_BASEDATA}/basedata/users/getUserListByRole`,
  params
);
