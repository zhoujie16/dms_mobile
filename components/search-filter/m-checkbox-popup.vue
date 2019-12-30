<template>
  <!-- 单选 多选  弹窗选择 组件 -->
  <view class="">
    <uni-popup ref="popup" type="bottom">
      <view v-if="isSHowPopup" class="select-popup-wrap">
        <view class="select-header">
          <view class="s-h-item btn" @click="cancelBtnClick"> 取消 </view>
          <view class="s-h-item title"> {{ title }} </view>
          <view class="s-h-item btn" @click="confirmBtnClick"> 确定 </view>
        </view>
        <view class="select-popup-inner">
          <uni-tag class="checkbox-item" :text="item.text" :type="item.isSelect ? 'primary' : 'default'" @click="checkbosItemClick(item)"
            v-for="(item, i) in itemList_1" :key="i"></uni-tag>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  export default {
    name: 'm-checkbox-popup',
    components: {},
    props: {},
    data() {
      return {
        isSHowPopup: false,
        title: '',
        single: false,
        itemList: [],
        value: [],
      };
    },
    computed: {
      itemList_1() {
        const itemList_1 = this.itemList.map(item => {
          const isSelect = this.value.indexOf(item.value) !== -1;
          return {
            text: item.text,
            value: item.value,
            isSelect
          };
        });
        return itemList_1;
      }
    },
    methods: {
      showPicker({ title = "标题", single = false, itemList = [], value = [] }) {
        return new Promise(reslove => {
          this.title = title;
          this.single = single;
          this.itemList = itemList;
          this.value = value
          this.isSHowPopup = true;
          this.confirm = () => {
            reslove(this.value)
          }
          this.$refs.popup.open();
        })
      },
      cancelBtnClick() {
        this.$refs.popup.close();
      },
      confirmBtnClick() {
        this.confirm(this.value);
        this.$refs.popup.close();
      },
      checkbosItemClick(item) {
        console.log("选项点击", item);
        if (this.single) {
          let _val = this.value;
          const index = _val.indexOf(item.value);
          this.$emit("input", [item.value]);
          if (index !== -1) {
            _val = [];
          } else {
            _val = [item.value];
          }
          this.value = _val;
        } else {
          const _val = this.value;
          const index = _val.indexOf(item.value);
          if (index !== -1) {
            _val.splice(index, 1);
          } else {
            _val.push(item.value);
          }
          this.value = _val;
        }
        console.log("选择", this.value);
      }
    }
  };
</script>

<style lang="scss">
  .select-popup-wrap {
    height: 600rpx;
    background-color: #FFFFFF;
    padding: 0 30rpx 30rpx 30rpx;
  }

  .select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80rpx;
    border-bottom: solid 1px #888888;
    margin-bottom: 20rpx;

    .s-h-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 10rpx;

    }

    .title {
      font-size: 30rpx;
    }
  }

  .select-popup-inner {
    display: flex;
    flex-wrap: wrap;

    .checkbox-item {
      margin: 0 30rpx 30rpx 0;
    }
  }
</style>
