/**
 * 预约检查
 */
import Http from "@/common/http.js";
import SERVER from '../server.js';

//查询预约检查列表
export const queryAllAppointment = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/AppointmentCheck/queryAllAppointment`,params);

//统计状态数量
export const queryStatusNum = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/AppointmentCheck/queryStatusNum`,params);


//根据预约单号查询详情
export const queryAppointmentDetail = bookingOrderNo =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/AppointmentCheck/queryAppointmentDetail?bookingOrderNo=${bookingOrderNo}`);

//修改预约时间
export const editAppointment = params =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/AppointmentCheck/updateAppointmentDate`,params);

//取消预约
export const deleteAppointment = bookingOrderNo =>Http.get(`${SERVER.DMSCLOUD_REPAIR}/AppointmentCheck/deleteAppointment?bookingOrderNo=${bookingOrderNo}`);
