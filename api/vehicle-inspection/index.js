/**
 * 车辆检查
 */
import Http from "@/common/http.js";
import SERVER from '../server.js';

//查询列表
export const queryVehicleCheckList  = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehicleCheckController/getVehicleCheckList`,params);

//查询车辆检查明细
export const queryVehicleCheckDetail = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehicleCheckController/getVehicleCheckDetail`,params);


//保存车辆检查明细
export const saveVehicleCheckDetail = params =>Http.post(`${SERVER.DMSCLOUD_REPAIR}/VehicleCheckController/saveVehicleCheckDetail`,params);


//增修查询接口
export const queryAdditionalTraining = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/VehicleCheckController/getAdditionalTraining`,params);


