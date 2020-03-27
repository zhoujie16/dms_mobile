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

// 维修类型 - 下拉框
export const getWxlxSelect = params =>
  Http.get(`${SERVER.DMSCLOUD_REPAIR}/basedataRepairtypes/findAllRepairType`, params, {
    isLoading: true
  });


// 查询全部车系
export const getSeries = params => Http.get(`${SERVER.DMSCLOUD_REPAIR}/baseData/basicData/series`, { params });

// 获取全部车型
export const getModel = params => Http.get(`${SERVER.DMSCLOUD_REPAIR}/baseData/basicData/model`, { params });
