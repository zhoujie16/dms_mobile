<template>
  <!-- 选择 选项 切换组件 -->
  <view class="m-checkbox-inner">
    <view v-if="singleLine" class="m-checkbox-inner__inner">
      <view
        class="m-checkbox__row"
        :style="{ padding: '0 0 0 10rpx' }"
        v-for="(item, i) in itemList_1"
        :key="i"
      >
        <view
          class="m-checkbox__item"
          :class="{ active: item.isSelect }"
          @click="checkbosItemClick(item)"
        >
          {{ item.text }}
        </view>
      </view>
    </view>
    <view v-else class="m-checkbox-inner__inner">
      <view
        class="m-checkbox__row"
        :style="{ width: itemWrapWidth }"
        v-for="(item, i) in itemList_1"
        :key="i"
      >
        <view
          class="m-checkbox__item"
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
    singleLine: {
      type: Boolean,
      default: true
    },
    value: {
      type: Array
    },
    itemList: {
      type: Array
    },
    single: {
      type: Boolean
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    itemWrapWidth() {
      return 100 / this.cols + '%';
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
      if (this.readonly) {
        return;
      }
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
  .m-checkbox-inner__inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .m-checkbox__row {
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .m-checkbox__item {
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
    }
  }
}
</style>
