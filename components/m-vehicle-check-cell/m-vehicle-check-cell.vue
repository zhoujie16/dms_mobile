<!-- 检查项 cell -->
<template>
  <view class="m-check-cell-wrap">
    <view class="m-check-cell-inner">
      <view class="m-check-label">{{ label }}</view>
      <view class="m-check-body">
        <!-- 按钮组 -->
        <view v-if="type === 'select'" class="m-check-btn-group">
          <view
            v-for="(item, i) in itemList"
            :key="item.value"
            class="check-btn"
            :class="{ active: item.value === value }"
            @click="mCheckBtnClick(item)"
          >
            {{ item.text }}
          </view>
        </view>
        <!-- 文本框 -->
        <view v-if="type === 'input'" class="m-check-text-input">
          <input
            class="m-check-txt"
            type="text"
            :value="value"
            @input="checkTxtInput"
            :placeholder="placeholder"
            placeholder-style="font-size: 30rpx;color: #c3c3c3;"
          />
          <text v-if="unit" class="m-check-unit">{{ unit }}</text>
        </view>
        <!-- 日期选择 -->
        <view v-if="type === 'date'" class="m-check-date-select" @click="checkDateClick">
          <text v-if="value" class="m-check-date-value m-iconfont">{{ value }} &#xe71a;</text>
          <text v-else class="m-iconfont">请选择 &#xe71a;</text>
        </view>
      </view>
      <view v-if="hasPhoto" class="m-check-camera" @click="cameraBtnClick">
        <image class="camera-img" src="/static/image/camera.svg" mode="scaleToFill"></image>
      </view>
    </view>
    <uni-popup ref="popup">
      <view class="choose-photo-popup-wrap">
        <image @click="colseChoosePanel" class="popup-close-btn" src="/static/image/close.svg" mode="scaleToFill"></image>
        <view class="choose-photo-title">图片/视频</view>
        <view class="choose-photo-panel">
          <view class="choose-photo" @click="uploadPhoto">
             <image class="uImage" mode="scaleToFill" :src="image" />
            <image
              class="choose-img"
              :src="photoText=='上传图片'?'/static/image/camera-choose.svg':'/static/image/camera-blue.svg'"
              mode="scaleToFill"
            ></image>
            <text :class="photoText=='上传图片'?'choose-txt':'choose-txt1'">{{photoText}}</text>
          </view>
          <view class="choose-photo" @click="uploadVideo">
            <!-- <video
              id="myVideo"
              class="uImage"
              :src="vedio"
              :poster="vedio + '?vframe/jpg/offset/1'" preload="auto" controls
            ></video> -->
            <image class="uImage" mode="scaleToFill" :src="vedioImage" />
            <image
              class="choose-img"
              src="/static/image/video-choose.svg"
              mode="scaleToFill"
            ></image>
            <text :class="vedioText=='上传视频'?'choose-txt':'choose-txt1'">{{vedioText}}</text>
            <!-- <text class="choose-txt">上传视频</text> -->
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  props: {
    /**
     * 参数:
     * type: 类型 select / input / date / customer
     * fieldName: 字段名称
     * label
     * itemList
     * value
     * placeholder
     * unit: 单位 string
     * hasPhoto: true / false
     * @change: 值改变,修改数据源的value
     */
    index: {
      type: Number
    },
    label: {
      type: String
    },
    value: {
      type: String
    },
    itemList: {
      type: Array
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    unit: {
      type: String,
      default: ''
    },
    hasPhoto: {
      type: Boolean,
      default: true
    },
    photoPath:{
      type: String,
      default: ''
    },
    videoPath:{
      type: String,
      default: ''
    }
  },
  computed: {},
  data() {
    return {
      image:'',
      photoText:'上传图片',
      vedio:'',
      vedioText:'上传视频',
      vedioImage:''
    };
  },
  methods: {
    mCheckBtnClick(item) {
      this.$emit('change', item.value, this.index);
    },
    checkTxtInput(e) {
      console.log(e.target.value);
      this.$emit('change', e.target.value, this.index);
    },
    async checkDateClick() {
      const res = await this.SHOW_TIME_PICKER({
        mode: 'yearMonth',
        startYear: '2015',
        endYear: '2021',
        defaultVal: ''
      });
      console.log(res);
      if (res !== 'cancel') {
        this.$emit('change', res[0], this.index);
      }
    },
    //
    async cameraBtnClick() {
      this.$refs.popup.open();
    },
    async colseChoosePanel() {
      this.$refs.popup.close();
    },
	// 上传图片
	async uploadPhoto(){
    if(this.photoText=='上传图片'){
      uni.chooseImage({
      	  count: 1,
      	  sourceType: ['camera'],
      	  success: res => {
      	   console.log(res.tempFilePaths[0]);
            this.image = res.tempFilePaths[0];
            // this.$emit('changeImage', res.tempFilePaths[0], this.index);
      	    this.getTempFilePath(res.tempFilePaths[0], 'imageTempPath');
            this.photoText="编辑图片";
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
    }else{
      const res = await this.SHOW_ACTION_SHEET({
        itemList: [
          { text: '查看', value: '1' },
          { text: '编辑', value: '2' },
          { text: '删除', value: '3' },
        ]
      });
      console.log('showActionSheet', res);
      // this.SHOW_TOAST(JSON.stringify(res));
      this.getPhotoWays(res.value)
    }
	},
  //图片处理方式
  async getPhotoWays(index){
    if(index==1){
      //查看图片
    }else if(index==2){
      //编辑图片
    }else if (index == 3){
      //删掉图片
      const res = await this.SHOW_MODAL({
        title: '确认删除？',
        content: '',
        showCancel: true, // 是否显示取消按钮，默认为 true
        cancelText: '取消', // 取消按钮的文字，默认为"取消"，最多 4 个字符
        confirmText: '确定' // 确定按钮的文字，默认为"确定"，最多 4 个字符
      });
      // 交互结果
      console.log('showModal_res', res);
      if(res=='confirm'){
        this.image="";
        this.photoText="上传图片"
      }
    }else{
      return;
    }
  },
	//上传视频
	async uploadVideo(){
		let _this = this;
		uni.chooseVideo({
		  count: 1,
		  sourceType: ['camera'],
		  success: res => {
		    console.log(res.tempFilePath);
		    this.vedio = res.tempFilePath;
        this.vedioImage= res.tempFilePath + '?vframe/jpg/offset/1'
        console.log(this.vedioImage,'image图片')
		    this.getTempFilePath(res.tempFilePath, 'videoTempPath');
        this.vedioText="编辑视频";
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
  }
};
</script>

<style lang="scss">
.m-check-cell-wrap {
  background-color: #ffffff;
  padding: 0 30rpx;
  font-size: 30rpx;
  .m-check-cell-inner {
    display: flex;
    border-bottom: solid 1rpx #e1e1e1;
    .m-check-label {
      flex: 0 0 220rpx;
      display: flex;
      align-items: center;
      min-height: 100rpx;
      color: #17212e;
    }
    .m-check-body {
      flex: 1;
      .m-check-btn-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 100rpx;
        .check-btn {
          width: 120rpx;
          height: 52rpx;
          border-radius: 26rpx;
          color: #17212e;
          background-color: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            color: #1371f7;
            background-color: #f0f3ff;
          }
        }
      }
      .m-check-text-input {
        display: flex;
        align-items: center;
        min-height: 100rpx;
        .m-check-txt {
          flex: 1;
          text-align: right;
          color: #70767f;
        }
        .m-check-unit {
          flex: 0 0 auto;
          margin: 0 10rpx;
          color: #70767f;
        }
      }
      .m-check-date-select {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-height: 100rpx;
        .m-iconfont {
          color: #c3c3c3;
        }
        .m-check-date-value {
          color: #70767f;
        }
      }
    }
    .m-check-camera {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100rpx;
      flex: 0 0 60rpx;
      .camera-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48rpx;
        height: 48rpx;
      }
    }
  }
}
.choose-photo-popup-wrap {
  width: 690rpx;
  height: 480rpx;
  padding-top: 40rpx;
  background-color: #ffffff;
  border-radius: 16rpx;
  position: relative;
  top: -100rpx;
  .popup-close-btn {
    position: absolute;
    width: 52rpx;
    height: 52rpx;
    top: 20rpx;
    right: 20rpx;
  }
  // .choose-photo-popup-inner {
  .choose-photo-title {
    font-size: 34rpx;
    color: #17212e;
    display: flex;
    height: 120rpx;
    justify-content: center;
    align-items: center;
  }
  .choose-photo-panel {
    display: flex;
    justify-content: space-around;
    padding: 0 20rpx;
    // height: 530rpx;
    .choose-photo {
      width: 286rpx;
      height: 286rpx;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      .uImage{
        position: absolute;
        top: 0;
        width: 286rpx;
        height: 286rpx;
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
        color: #FFFFFF;
        z-index: 1;
      }
    }
  }
  // }
}
</style>
