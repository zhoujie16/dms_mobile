/**
 * 数据校验
 */
import schema from 'async-validator';

class Validate {
  constructor(arg) {

  }

  validate(formData, descriptor) {
    return new Promise(reslove => {
      const options = {
        suppressWarning: true,
        first: true
      }
      const validator = new schema(descriptor);
      validator.validate(formData, options, (errors, fields) => {
        if (errors) {
          reslove([{
            errors,
            fields
          }]);
          return;
        }
        reslove([null]);
      });
    })

  }
}
export default new Validate();
