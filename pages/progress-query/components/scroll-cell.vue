<template>
  <view class="list-cell-wrap">
    <!-- 工单状态、车主名称、开单时间、工单编号、车牌号、服务顾问、服务技师、手机 -->
      <view class="list-cell-wrap-inner">
        <view class="list-cell-title">
          <view class="left">
            <text class="state">{{this.createDictText(cell.roStatus)}}</text> 
            <text class="vin">{{cell.ownerName}}</text>
          </view>
          <view class="right">{{cell.roCreateDate}}</view>
        </view>
        <view class="list-cell-content">
          <view class="box">
            <view class="label">工单号</view>
            <view >{{cell.roNo}}</view>
          </view>
          <view class="box">
            <view class="label">车牌号</view>
            <view >{{cell.license}}</view>
          </view>
          <view class="box">
            <view class="label">服务顾问</view>
            <view>{{$auth.getRoleName(cell.serviceAdvisor,serviceAdvisorList)}}</view>
          </view>
          <view class="box">
            <view class="label">服务技师</view>
            <view>{{$auth.getRoleName(cell.chiefTechnician,serviceAdvisorList)}}</view>
          </view>
        </view>
        <view class="phone" @click.native="phoneClick">
          <image src="../../../../../static/image/dianhua2.svg" class="img"></image>
        </view>
      </view>
    </view>
</template>

<script>
export default {
  components: {},
  name: 'list-cell-vehicle-inspection',
  props: {
    cell: Object,
    index: Number,
    serviceAdvisorList: Array
  },
  mounted() {
    // this.createDictText()
  },
  data() {
    return {
      isShowDetail: false,
      telphoneNumber: '18583285531',
      roStatus: ''
    };
  },
  methods: {
    createDictText(val) {
      let text = '';
      if(val) { 
        let roStatus = val.toString();
        let str = roStatus.substring(0,4);
            // console.log(text,'text-----')
        text = this.$dict.createDictText(roStatus, str);
      } else {
        text = '未知'
      }
      return text;
    },
    
    change() {
      // console.log(await f(ff));
    },
    cellTitleClick() {
      this.isShowDetail = !this.isShowDetail;
    },
    phoneClick(){
     // this.$refs.phone.open();
     uni.makePhoneCall({
         // 手机号
             phoneNumber: this.telphoneNumber, 
         	// 成功回调
         	success: (res) => {
         		console.log('调用成功!');
         	},
         	// 失败回调
         	fail: (res) => {
         		console.log('调用失败!')
         	}
     });
    },
  }
};
</script>

<style lang="scss" scoped>
.list-cell-wrap {
  position: relative;
  .phone {
    position: absolute;
    // bottom: 40px;
    // right: 40px;
    bottom: 32px;
    right: 40px;
    .img {  
      width: 70rpx;
      height: 70rpx;
    }
  }
}

.list-cell-wrap-inner {
  // width: 100%;
  border-radius: $uni-m-border-radius-b2;
  overflow: hidden;
  background-color: #ffffff;
  padding:26rpx 30rpx;
  margin: 20rpx;
  
}
.list-cell-title {
  display: flex;
  border-bottom: 1rpx solid $uni-m-color-c4-2;
  .left {
    flex: 1;
    margin-bottom: 20rpx;
    .state{
      display: inline-block;
      margin-right: 20rpx;
      border: 2rpx dashed $uni-m-color-c12;
      background-color: $uni-m-color-c11;
      color: $uni-m-color-cwhite;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
    .complate {
      display: inline-block;
      margin-right: 20rpx;
      border: 2rpx dashed $uni-m-color-c12;
      background-color: #74737D;
      color: $uni-m-color-cwhite;
      padding: 0 20rpx;
      font-size: $uni-m-font-size-f4;
    }
    .vin{
      font-weight: 800;
      font-size: $uni-m-font-size-f2;
    }
  }
  .right{
    color: $uni-m-color-c12;
    margin-bottom: 20rpx;
  }
}
.list-cell-content{
  margin-top: 10rpx;
  position: relative;
  .box{
    display: flex;
    height: 60rpx;
    line-height: 60rpx;
    .label{
      flex:0 0 130rpx;
      color:$uni-m-color-c2;
    }
  }
  
}
</style>
