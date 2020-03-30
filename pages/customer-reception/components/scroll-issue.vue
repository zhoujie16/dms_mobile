<template>
  <view>
    <view class="scroll-issue-label-wrap">
      <view class="scroll-issue-label">{{ label }}</view>
      <image
        class="close-btn"
        @click="deleteBtnHandleClick"
        src="/static/image/close-btn.svg"
        mode="scaleToFill"
      ></image>
    </view>
    <MCheckbox
      label="损伤情况"
      type="inner"
      v-model="issueStatus"
      :itemList="itemList_1"
      :border="false"
      single
    ></MCheckbox>
    <view class="image-warp" @click="uploadPhoto">
      <image class="uImage" mode="scaleToFill" :src="image" />
      <image
        class="choose-img"
        :src="
          photoText == '上传故障图片'
            ? '/static/image/camera-choose.svg'
            : '/static/image/camera-blue.svg'
        "
        mode="scaleToFill"
      ></image>
      <text :class="photoText == '上传故障图片' ? 'choose-txt' : 'choose-txt1'">
        {{ photoText }}
      </text>
    </view>
    <MTextArea label="故障描述" v-model="remark2"></MTextArea>
    <view class="m-break-space"></view>
  </view>
</template>

<script>
export default {
  props: {
    point: {
      type: Object
    }
  },
  computed: {
    label() {
      return `${this.point.num}. ${this.point.name}`;
    }
  },
  data() {
    return {
      issueStatus: [],
      remark2: '',
      image: '',
      photoText: '上传故障图片',
      itemList_1: [
        { text: '划痕', value: '1' },
        { text: '损伤', value: '2' },
        { text: '凹痕', value: '3' }
      ]
    };
  },
  methods: {
    async deleteBtnHandleClick() {
      this.$emit('deletePoint', this.point);
    },
    async uploadPhoto() {
      if (this.photoText == '上传故障图片') {
        const res = await this.SHOW_ACTION_SHEET({
          itemList: [{ text: '拍照', value: '1' }, { text: '从相册中选取', value: '2' }]
        });
        this.getPhotoWays(res.value);
      } else {
        const res = await this.SHOW_ACTION_SHEET({
          itemList: [{ text: '编辑', value: '1' }, { text: '删除', value: '2' }]
        });
        this.editPhotoWays(res.value);
      }
    },
    //上传
    async getPhotoWays(index) {
      console.log(index);
      if (index == 1) {
        // 拍照
        await this.takePhoto(['camera']);
      } else if (index == 2) {
        //从相册中选取
        await this.takePhoto(['album']);
      } else {
        return;
      }
    },
    //编辑
    async editPhotoWays(index) {
      if (index == 1) {
        //编辑
      } else if (index == 2) {
        //删除
        const res = await this.SHOW_MODAL({
          title: '确认删除？',
          content: '',
          showCancel: true, // 是否显示取消按钮，默认为 true
          cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
          confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
        });
        // 交互结果
        console.log('showModal_res', res);
        if (res == 'confirm') {
          this.image = '';
          this.photoText = '上传故障图片';
        }
      } else {
        return;
      }
    },
    // 拍照、从相册中选取
    takePhoto(array) {
      uni.chooseImage({
        count: 1,
        sourceType: array,
        success: res => {
          console.log(res.tempFilePaths[0]);
          this.image = res.tempFilePaths[0];
          // this.$emit('changeImage', res.tempFilePaths[0], this.index);
          this.getTempFilePath(res.tempFilePaths[0], 'imageTempPath');
          this.photoText = '编辑故障图片';
        },
        fail: err => {
          // #ifdef MP
          uni.getSetting({
            success: res => {
              let authStatus = res.authSetting['scope.camera'];
              if (!authStatus) {
                uni.showModal({
                  title: '授权失败',
                  content: 'Hello uni-app需要从您的相机获取图片，请在设置界面打开相关权限',
                  success: res => {
                    if (res.confirm) {
                      uni.openSetting();
                      this.close();
                    }
                  }
                });
              }
            }
          });
          // #endif
        }
      });
    },
    getTempFilePath(url, types) {
      // 如果已经下载本地路径，那么直接储存
      let obj = {
        filePath: url,
        success: () => {
          console.log('save success');
          uni.showModal({
            content: '保存成功',
            showCancel: false
          });
          uni.hideLoading();
        },
        fail: e => {
          uni.hideLoading();
          uni.showModal({
            content: '保存失败',
            showCancel: false
          });
        }
      };
      uni.showLoading({
        title: '保存中...'
      });
      if (types === 'videoTempPath') {
        uni.saveVideoToPhotosAlbum(obj);
      } else {
        uni.saveImageToPhotosAlbum(obj);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-issue-label-wrap {
  display: flex;
  height: 100rpx;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  font-size: 34rpx;
  padding: 0 30rpx;
  color: #17212e;
  font-weight: 500;
  .scroll-issue-label {
  }
  .close-btn {
    width: 48rpx;
    height: 48rpx;
  }
}
.image-warp {
  margin: 0 30rpx;
  background-color: $uni-m-color-c5;
  height: 420rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .uImage {
    position: absolute;
    top: 0;
    height: 420rpx;
    opacity: 0.4;
    filter: alpha(opacity=40);
  }
}
.choose-img {
  width: 96px;
  height: 96rpx;
}
.choose-txt {
  margin-top: 14rpx;
  font-size: 24rpx;
  color: #262626;
  z-index: 1;
}
.choose-txt1 {
  margin-top: 14rpx;
  font-size: 24rpx;
  color: #ffffff;
  z-index: 1;
}
</style>
