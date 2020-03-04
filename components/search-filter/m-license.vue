<!-- 车牌号 -->
<template>
  <view class="m-license-wrap">
    <view class="m-license-inner">
      <MLabel label="车牌号" :border="false"></MLabel>
      <view class="m-license-content">
        <view
          v-for="(item, i) in itemList"
          :key="item.id"
          class="m-license-item"
          :class="{ active: item.isActive }"
          @click="itemClick(item)"
        >
          {{ item.value }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-license',
  data() {
    return {
      itemList: [
        { id: 0, value: '', isActive: false },
        { id: 1, value: '', isActive: false },
        { id: 2, value: '', isActive: false },
        { id: 3, value: '', isActive: false },
        { id: 4, value: '', isActive: false },
        { id: 5, value: '', isActive: false },
        { id: 6, value: '', isActive: false },
        { id: 7, value: '', isActive: false }
      ]
    };
  },
  computed: {
    activeIndex() {
      const index = this.itemList.findIndex(item => item.isActive === true);
      return index;
    }
  },
  watch: {
    activeIndex(index) {
      console.log('watch activeIndex', index);
      if (index === 0) {
        this.$root.$refs.MPage.MKeyboard.setKeyboardType('provice');
      } else {
        this.$root.$refs.MPage.MKeyboard.setKeyboardType('letter');
      }
    }
  },
  methods: {
    itemClick(item) {
      this.setItemActive(item.id);
      this.$root.$refs.MPage.MKeyboard.open({
        keyDown: key => {
          console.log('接收到按键', key);
          if (key === -1) {
            console.log('删除');
            // 删除 当前焦点有值就删 否侧删上一个
            const index = this.itemList.findIndex(item => item.isActive === true);
            if (this.itemList[index].value !== '') {
              this.itemList[index].value = '';
              // 删掉 在去上个焦点
              this.setPreItemActive();
              return;
            }
            // 删上个焦点
            if (index - 1 !== -1) {
              this.itemList[index - 1].value = '';
              this.setPreItemActive();
            } else {
              this.itemList[0].value = '';
            }
            return;
          }
          // 设置焦点的值
          const index = this.itemList.findIndex(item => item.isActive === true);
          this.itemList[index].value = key;
          this.setNextItemActive();
        }
      });
    },
    setItemActive(i) {
      this.itemList.forEach(item => {
        item.isActive = false;
      });
      this.itemList[i].isActive = true;
    },
    // 设置下个框框为焦点
    setNextItemActive() {
      const activeIndex = this.itemList.findIndex(item => item.isActive === true);
      if (activeIndex === -1) {
        // 没有处在焦点状态的框框 设置第一个为焦点
        this.setItemActive(0);
        return;
      }
      // 有焦点的下一个框框 是否存在
      const nextItem = this.itemList[activeIndex + 1];
      if (nextItem) {
        this.setItemActive(activeIndex + 1);
        return;
      }
    },
    // 设置上个框框为焦点
    setPreItemActive() {
      // 能做走到这  说明肯定有框框有焦点
      const activeIndex = this.itemList.findIndex(item => item.isActive === true);
      if (activeIndex === -1) {
        // 没有处在焦点状态的框框 这不可能发生
        return;
      }
      // 有焦点的上一个框框 是否存在
      if (activeIndex - 1 !== -1) {
        this.setItemActive(activeIndex - 1);
      } else {
        this.setItemActive(0);
      }
    }
  }
};
</script>

<style lang="scss">
.m-license-content {
  display: flex;
  height: 100rpx;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  .m-license-item {
    width: 86rpx;
    height: 86rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1rpx #e1e1e1;
    &.active {
      border: solid 1rpx #1371f7;
    }
  }
}
</style>
