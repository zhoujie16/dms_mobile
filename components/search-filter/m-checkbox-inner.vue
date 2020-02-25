<template>
  <view class="">
    <view v-if="isCell" class="m-checkbox-inner">
      <view class="m-col" :style="{ padding: '0 0 0 20rpx' }" v-for="(item, i) in itemList_1" :key="i">
        <view
          class="m-checkbox-item"
          :class="{ active: item.isSelect }"
          @click="checkbosItemClick(item)"
        >
          {{ item.text }}
        </view>
      </view>
    </view>
    <view v-else class="m-checkbox-inner">
      <view
        class="m-col"
        :style="{ width: itemWrapWidth }"
        v-for="(item, i) in itemList_1"
        :key="i"
      >
        <view
          class="m-checkbox-item"
          :class="{ active: item.isSelect }"
          @click="checkbosItemClick(item)"
        >
          {{ item.text }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-checkbox-inner',
  components: {},
  props: {
    cols: {
      type: Number,
      default: 4
    },
    value: {
      type: Array
    },
    itemList: {
      type: Array
    },
    single: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    itemWrapWidth() {
      return 750 / this.cols + 'upx';
    },
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
    },
    // 是否 和 标题并排
    isCell() {
      return this.itemList_1.length < 3 ? true : false;
    }
  },
  methods: {
    checkbosItemClick(item) {
      console.log('选项点击', item);
      if (this.single) {
        let _val = this.value;
        const index = _val.indexOf(item.value);
        this.$emit('input', [item.value]);
        if (index !== -1) {
          _val = [];
        } else {
          _val = [item.value];
        }
        this.$emit('input', _val);
      } else {
        const _val = this.value;
        const index = _val.indexOf(item.value);
        if (index !== -1) {
          _val.splice(index, 1);
        } else {
          _val.push(item.value);
        }
        this.$emit('input', _val);
      }
    }
  }
};
</script>

<style lang="scss">
.m-checkbox-inner {
  display: flex;
  flex-wrap: wrap;
}
.m-col {
  height: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.m-checkbox-item {
  color: $uni-color-primary;
  font-size: 22rpx;
  height: 60rpx;
  line-height: 60rpx;
  padding: 0 40rpx;
  border-radius: 8rpx;
  background-color: #f9f9f9;
  color: $uni-text-color-info;
  &.active {
    background-color: #f0f3ff;
    color: #1371f7;
  }
}
</style>
