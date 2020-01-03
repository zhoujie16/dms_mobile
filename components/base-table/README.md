# t-table
表格父组件，仅包含tr组件

###属性说明
border         string     边框粗细
border-color   Color      边框颜色
is-check       Boolean    是否开启列多选
@change        function   开启多选生效
 
 
# t-tr
表格行组件 仅包含 th,td 组件
 
###属性说明
font-size      string     行字体大小
color          Color      行字体颜色
align          string     对齐方式


# t-th
表格内的表头单元格组件
 
###属性说明
align          string     对齐方式


 # t-td
表格中的标准单元格组件
 
###属性说明
align          string     对齐方式

###调用方式
<template>
    <view class="warp">
        <view class="box">
            <view class="title">默认效果</view>
            <t-table @change="change">
                <t-tr>
                    <t-th>序号</t-th>
                    <t-th>姓名</t-th>
                    <t-th>年龄</t-th>
                    <t-th>爱好</t-th>
                </t-tr>
                <t-tr v-for="item in tableList" :key="item.id">
                    <t-td>{{ item.id + 1 }}</t-td>
                    <t-td>{{ item.name }}</t-td>
                    <t-td>{{ item.age }}</t-td>
                    <t-td>{{ item.hobby }}</t-td>
                </t-tr>
            </t-table>
        </view>
        <view class="box">
            <view class="title">自定义样式</view>
            <t-table border="2" border-color="#95b99e" :is-check="true" @change="change">
                <t-tr font-size="14" color="#95b99e" align="left">
                    <t-th align="left">姓名</t-th>
                    <t-th align="left">年龄</t-th>
                    <t-th align="left">爱好</t-th>
                    <t-th align="center">操作</t-th>
                </t-tr>
                <t-tr font-size="12" color="#5d6f61" align="right" v-for="item in tableList" :key="item.id">
                    <t-td align="left">{{ item.name }}</t-td>
                    <t-td align="left">{{ item.age }}</t-td>
                    <t-td align="left">{{ item.hobby }}</t-td>
                    <t-td align="left"><button @click="edit(item)">编辑</button></t-td>
                </t-tr>
            </t-table>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                tableList: [{
                        id: 0,
                        name: '张三',
                        age: '19',
                        hobby: '游泳'
                    },
                    {
                        id: 1,
                        name: '李四',
                        age: '21',
                        hobby: '绘画'
                    },
                    {
                        id: 2,
                        name: '王二',
                        age: '29',
                        hobby: '滑板'
                    },
                    {
                        id: 3,
                        name: '码字',
                        age: '20',
                        hobby: '蹦极'
                    }
                ]
            };
        },
        methods: {
            change(e) {
                console.log(e.detail);
            },
            edit(item) {
                uni.showToast({
                    title: item.name,
                    icon: 'none'
                });
            }
        }
    };
</script>


