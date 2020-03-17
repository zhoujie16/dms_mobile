import Http from "@/common/http.js";
import SERVER from '../server.js';

//查询字典
export const queryDict = () => Http.get(`${SERVER.DMSCLOUD_BASEDATA}/dicts`, {isLoading: true});
