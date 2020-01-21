<template>
  <view>
    <view v-for="item in rowData" :key="item.text">
      <view class="uni-flex uni-row margin-bottom" v-if="item.type === 'checkbox'">
        <view class="flex-item1 label-pad">{{ item.text }}：</view>
        <view class="flex-item2 label-pad">
          <text class="verticalMiddle">{{ item.flag ? '*' : '' }}</text>
        </view>
        <view class="flex-item3 label-pad">
         <uni-tag :inverted="true" text="正常" :type="item.data === 'primary' ? 'primary' : 'default'" class="tag-pad verticalMiddle" @click="rowClick(item.text, 'primary')" />
        </view>
        <view :class="item.isLook ? 'flex-item3 label-pad' : 'flex-item3 label-pad v-hidden'">
          <uni-tag :inverted="true" text="观察" :type="item.data === 'warning' ? 'warning' : 'default'" class="tag-pad verticalMiddle" @click="rowClick(item.text, 'warning')" />
        </view>
        <view class="flex-item3 label-pad">
          <uni-tag :inverted="true" text="异常" :type="item.data === 'error' ? 'error' : 'default'" class="tag-pad verticalMiddle" @click="rowClick(item.text, 'error')" />
        </view>
        <view class="flex-item4"><uni-icons class="verticalMiddle" type="camera" size="30" color="#CCCCCC"></uni-icons></view>
      </view>
      <view class="uni-flex uni-row margin-bottom" v-else-if="item.type === 'percent'">
        <view class="flex-item1 label-pad">{{ item.text }}：</view>
        <view class="flex-item2 label-pad">
          <text class="verticalMiddle">{{ item.flag ? '*' : '' }}</text>
        </view>
        <view class="flex-item5 label-pad">
          <input class="verticalMiddle sub-input" type="number" :placeholder="item.placeholder" :value="item.data" />
          <text class="location verticalMiddle">%</text>
        </view>
        <view class="flex-item4"><uni-icons class="verticalMiddle" type="camera" size="30" color="#CCCCCC"></uni-icons></view>
      </view>
      <view class="uni-flex uni-row margin-bottom" v-else-if="item.type === 'millimeter'">
        <view class="flex-item1 label-pad">{{ item.text }}：</view>
        <view class="flex-item2 label-pad">
          <text class="verticalMiddle">{{ item.flag ? '*' : '' }}</text>
        </view>
        <view class="flex-item5 label-pad">
          <input class="verticalMiddle sub-input" type="number" :placeholder="item.placeholder" :value="item.data" />
          <text class="location verticalMiddle">mm</text>
        </view>
        <view class="flex-item4"><uni-icons class="verticalMiddle" type="camera" size="30" color="#CCCCCC"></uni-icons></view>
      </view>
      <view class="uni-flex uni-row margin-bottom" v-else-if="item.type === 'dateType'">
        <view class="flex-item1 label-pad">{{ item.text }}：</view>
        <view class="flex-item2 label-pad">
          <text class="verticalMiddle">{{ item.flag ? '*' : '' }}</text>
        </view>
        <view class="flex-item5 label-pad">
          <!-- <view  class="sub-input" @click="showPopup3(item.text)" >{{item.data}}</view> -->
          <input class="verticalMiddle sub-input" disabled="true" @click="showPopup3(item.text)" :placeholder="item.placeholder" :value="item.data" />
          
          <!-- <button @click="showPopup3" type="primary">MPicker 日期</button> -->
        </view>
        <view class="flex-item4"><uni-icons class="verticalMiddle" type="camera" size="30" color="#CCCCCC"></uni-icons></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['rowData'],
  data() {
    return {
      
    };
  },
  computed: {
   startDateInfo() {
     return this.startDate || '开始时间';
   },
  },
  methods: {
    rowClick(key, el) {
      this.rowData.forEach(x => {
        if (x.text == key) {
          x.data = el;
        } else {
          return;
        }
      });
      this.$emit('change',this.rowData)
    },
   async showPopup3(el) {
     //  日期选择
     const res_p = await this.$root.$refs.MPage.MPickerPopup.showPicker({
       mode: 'date',
       startYear: '2016',
       endYear: '2020'
     });
     console.log('res_p', res_p[0]);
     this.rowData.forEach(x => {
       if (x.text == el) {
         x.data = res_p[0];
       } else {
         return;
       }
     });
     this.$emit('change',this.rowData)
   },
    
  }
};
</script>

<style lang="scss" scoped>
.flex-item1 {
  flex: 0 0 140rpx;
  text-align: center;
  line-height: 60rpx;
}
.flex-item2 {
  flex: 0 0 40rpx;
  color: #ff0000;
  display: flex;
}
.flex-item3 {
  flex: 1;
  display: flex;
  padding: 0 4rpx;
}
.flex-item4 {
  flex: 0 0 10rpx;
  text-align: center;
  display: flex;
}
.flex-item5 {
  flex: 1;
  display: flex;
  position: relative;
}
.label-pad {
  // margin-right: 2%;
}
.sub-input {
  width: 100%;
  border: 2rpx solid #cccccc;
  height: 60rpx;
  border-radius: 10rpx;
  padding: 0 60rpx 0 10rpx;
}
.location {
  position: absolute;
  // top: 0;
  right: 30rpx;
  line-height: 60rpx;
  color: #cccccc;
}
.tag-pad {
  // padding: 0;
  width: 100%;
}
.verticalMiddle {
  align-self: center;
}
.margin-bottom {
  margin-bottom: 10rpx;
}
.v-hidden {
  visibility: hidden;
}
</style>
