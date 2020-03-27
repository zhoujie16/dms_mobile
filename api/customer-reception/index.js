/**
 * 车辆预检
 */
import Http from "@/common/http.js";
import SERVER from '../server.js';

//新增预检单
export const savePreview = params =>Http.post(`${SERVER.DMSCLOUD_REPAIR}/VehiclePreviewController/savePreview`,params);


//查询预检单明细
export const queryPreviewDetail  = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehiclePreviewController/queryPreviewDetail`,params);


//查询所有预检单
export const queryAllPreview  = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehiclePreviewController/queryAllPreview`,params);


//删除预检单
export const deletePreview  = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehiclePreviewController/deletePreview`,params);


//根据车牌号查询客户信息  flag=1  查唯一  ;flag = 2 模糊查询
export const queryCusInfoByLicense = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehiclePreviewController/queryCusInfoByLicense`,params)  
