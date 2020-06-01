let instance = null;

class Upload {
  constructor() {
    console.log('Upload constructor');
    if (!instance) {
      instance = this;
      this.baseUrl = `https://newbie-test-api.digitalvolvo.com/mid-end-digital-estate-center/file/upload`
      // this.baseUrl = `https://unidemo.dcloud.net.cn/upload`;
    }
    return instance;
  }

  // 批量上传
  async uploadMultiple() {
    const [err_choose, tempFiles] = await this.chooseFiles();
    if (err_choose) {
      return [err_choose]
    }
    const fileUrl = [];
    // await uni.showLoading({
    //   title: '上传中...',
    //   mask: true
    // });
    for (let file of tempFiles) {
      const [err_upload, res_upload] = await this.uploadFile(file);
      if(err_upload){
        // await uni.hideLoading()
        return [err_upload]
      }
      fileUrl.push(res_upload.url);
    }
    // await uni.hideLoading()
    console.log('上传的图', fileUrl);
    return [null, fileUrl];
  }
  // 选择文件
  async chooseFiles() {
    const [err_choose, res_choose] = await uni.chooseImage({});
    if (err_choose) {
      console.log('err_choose', err_choose);
      return [err_choose];
    }
    console.log('res_choose', res_choose);
    const {
      tempFilePaths,
      tempFiles
    } = res_choose;
    return [null, tempFiles];
  }
  // 上传单个文件
  async uploadFile(file) {
    console.log('uploadFile 1')
    const [err_upload, res_upload] = await uni.uploadFile({
      url: this.baseUrl,
      // file: file,
      filePath: file.path,
      name: 'file'
    });
    console.log('uploadFile 2')
    if (err_upload) {
      console.log('err_upload', err_upload);
      return [err_upload];
    }
    console.log('res_upload', res_upload);
    const {
      statusCode,
      data
    } = res_upload;
    console.log({
      statusCode,
      data
    })
    if(statusCode != 200){
      return [new Error(500)];
    }
    const _data = JSON.parse(data);
    const {
      returnCode,
      returnMessage,
      name,
      response,
      uid,
      url
    } = _data
    if (returnCode === "ERROR") {
      return [new Error(returnMessage)];
    }
    return [null, _data];
  }
}

export default new Upload();
