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


//根据车牌号查询客户信息
export const queryCusInfoByLicense = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR/VehiclePreviewController/queryCusInfoByLicense}`,params)