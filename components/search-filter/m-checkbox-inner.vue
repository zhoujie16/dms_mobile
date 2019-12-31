<template>
  <view class="">
    <view class="y-checkbox-inner">
      <uni-tag
        class="y-checkbox-item"
        size="small"
        :text="item.text"
        :type="item.isSelect ? 'primary' : 'default'"
        @click="checkbosItemClick(item)"
        v-for="(item, i) in itemList_1"
        :key="i"
      ></uni-tag>
    </view>
  </view>
</template>

<script>
export default {
  name: 'm-checkbox-inner',
  components: {},
  props: {
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

<style>
.y-checkbox-inner {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
}

.y-checkbox-item {
  margin: 0 30rpx 30rpx 0;
}
</style>
