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
