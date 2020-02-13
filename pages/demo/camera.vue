<template>
  <view>
    <view>
      <button @click="open">打开弹窗</button>
      <UniPopup ref="popup" type="center">
        <view class="container-wrap">
          <view class="container-item" @click="saveImage">拍照</view>
          <view class="container-item" @click="getImage">从手机里选取照片</view>

          <view class="container-item" @click="saveVideo">拍摄视频</view>
        </view>
      </UniPopup>
     
    </view>
    <view class="uni-padding-wrap">
      <view v-if="imagePath !== ''" class="media-box image">
        <image class="image" mode="widthFix" :src="imagePath" />
      </view>
      <button type="primary" class="uni-button" @click="saveImage">拍摄图片并保存到本地</button>
      <view v-if="videoPath !== ''" class="media-box">
        <video
          id="myVideo"
          :src="videoPath"
          @error="videoErrorCallback"
          enable-danmu
          danmu-btn
          controls
        ></video>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      imagePath: '',
      videoPath: '',
    };
  },
  onLoad() {},
  methods: {
    videoErrorCallback: function(e) {
      uni.showModal({
        content: e.target.errMsg,
        showCancel: false
      });
    },
    saveImage() {
      uni.chooseImage({
        count: 1,
        sourceType: ['camera'],
        success: res => {
          this.imagePath = res.tempFilePaths[0];
          this.getTempFilePath(res.tempFilePaths[0], 'imageTempPath');
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
    saveVideo() {
      let _this = this;
      uni.chooseVideo({
        count: 1,
        sourceType: ['camera'],
        success: res => {
          console.log(res.tempFilePath);
          this.videoPath = res.tempFilePath;
          this.getTempFilePath(res.tempFilePath, 'videoTempPath');
        },
        fail: err => {
          // #ifdef MP
          uni.getSetting({
            success: res => {
              let authStatus = res.authSetting['scope.camera'];
              if (!authStatus) {
                uni.showModal({
                  title: '授权失败',
                  content: 'Hello uni-app需要从您的相机获取视频，请在设置界面打开相关权限',
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
    },

    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    getImage() {
      let _self = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择、摄像头
        success: function(res) {
          console.log(res);
          _self.imagePath = res.tempFilePaths[0];
          console.log(_self.imagePath)
          // uni.getImageInfo({
          //   src: res.tempFilePaths[0],

          //   success: function(image) {
          //     console.log('图片路径:' + image.path);
          //     this.imagePath2 = image.path;
          //   }
          // });
        }
      });
      this.close();
    }
  }
};
</script>

<style lang="scss">
.container-wrap {
  color: #333;
  width: 400rpx;
  background-color: #ffffff;
  border-radius: 30rpx;
  overflow: hidden;
  padding: 0 40rpx 40rpx 40rpx;
  .container-item {
    height: 100rpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #cccccc;
    font-weight: 600;
  }
}
.media-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30upx 0;
  width: 100%;
}
.image {
  height: 400upx;
  overflow: hidden;
}
.image image {
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
}
.uni-button {
  margin: 30upx 0;
}
</style>
