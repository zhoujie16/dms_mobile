import Http from "@/common/http.js";

export const testHttp = params =>
  Http.get("/api/ssvpn/query_flow_info?port=700", params, {
    isLoading: true
  });
