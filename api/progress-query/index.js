import Http from "@/common/http.js";
import SERVER from '../server.js';

// 查询所有交车
export const progressQueryAll = params =>
  Http.get(`${SERVER.DMSCLOUD_REPAIR}/assistant/repair/order/findAll`, params, {
    isLoading: true
  });
  
// 查询交车状态数量
export const findSubmitCarStatus = params =>
  Http.get(`${SERVER.DMSCLOUD_REPAIR}/assistant/repair/progress/findSubmitCarStatus`, params, {
    isLoading: true
  });

// 根据工单编号查询交车详情
export const findRepairOrderInfoByRoNo = orderNum =>
  Http.get(`${SERVER.DMSCLOUD_REPAIR}/assistant/repair/progress/findRepairOrderInfoByRoNo/${orderNum}`, {
    isLoading: true
  });
  // /assistant/repair/progress/findRepairOrderInfoByRoNo/{orderNum}
