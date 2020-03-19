## 服务顾问的使用
```
import dictCode from '@/common/dictCode.js';
let consultant = { role: dictCode.SERVICE_CONSULTANT , companyId: this.$auth.getCompanyId()}; // 服务顾问
let technician = { role: dictCode.TECHNICIAN , companyId: this.$auth.getCompanyId()}; // 指定技师

await searchRoleByCode(consultant);
await searchRoleByCode(technician)

```
