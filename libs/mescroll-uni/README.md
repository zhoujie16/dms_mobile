# mescroll-uni

[https://github.com/mescroll/mescroll](https://github.com/mescroll/mescroll)

简单介绍 :

\1. mescroll-uni 是专门用在uni-app的下拉刷新和上拉加载的组件, 支持一套代码编译到iOS、Android、H5、小程序等多个平台

\2. mescroll-uni 采用的是uni官方推荐的[新框架编译模式 : 自定义组件模式](https://ask.dcloud.net.cn/article/35843), 实现了更高的性能及更多的 Vue 语法支持

\3. mescroll-uni 继承了mescroll.js的实用功能: 自动处理分页, 自动控制无数据, 空布局提示, 回到顶部按钮 ..

\4. mescroll-uni 丰富的案例, 自由灵活的api, 超详细的注释, 可让您快速自定义真正属于自己的下拉上拉组件

快速开始 :

\1. 配置 manifest.json 的编译模式为 自定义组件模式 [(uni官方配置说明)](https://ask.dcloud.net.cn/article/35843) :

```
	// manifest.json (在您uni项目的根目录) 
	{    
		// true表示新的`自定义组件模式`，否则为`template模板模式`
		"app-plus": {    
			"usingComponents" : true
		}    
		"mp-weixin": {    
			"usingComponents" : true
		},
		"mp-alipay" : {
			"usingComponents" : true
		},
		"mp-baidu" : {
			"usingComponents" : true
		},
		"mp-toutiao" : {
			"usingComponents" : true
		}
	}   
				
```

\2. 进入[插件市场](http://ext.dcloud.net.cn/plugin?id=343), 使用HBuilderX导入mescroll-uni插件

\3. 配置 pages.json :

```
	{
	   "path" : "pages/xxx/xxx", // 只配置使用mescroll-uni的页面
	   "style" : {
			"navigationBarTitleText" : "xxx",
			"enablePullDownRefresh" : false, // 不开启下拉刷新, 默认就是false
			"disableScroll": true, // 禁止滚动, 解决scroll-view在Android小程序卡顿的问题
			"app-plus" : {
				"bounce" : "none" // 取消APP端iOS回弹,避免和下拉刷新冲突
			}
		}
	}
				
```

\4. 在具体页面中的示例 :

```
	<template>
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
			<!-- <view> @down, @up 必须配置 </view> -->
			<!-- <view> :down, :up 可省略 </view> -->
			<!-- <view v-for="data in dataList"> 数据列表... </view> -->
		</mescroll-uni>
	</template>

	<script>
		// 引入mescroll-uni组件
		import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"; // 注意.vue后缀不能省
		import MescrollUni from "mescroll-uni"; // npm安装的引入方式 ( npm安装命令: npm install --save mescroll-uni )
		
		export default {
			components: {
				MescrollUni
			},
			data() {
				return {
					// 下拉刷新的常用配置
					downOption: { 
						use: true, // 是否启用下拉刷新; 默认true
						auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					},
					// 上拉加载的常用配置
					upOption: {
						use: true, // 是否启用上拉加载; 默认true
						auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
						page: {
							num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
							size: 10 // 每页数据的数量,默认10
						},
						noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
						empty: {
							tip: '暂无相关数据'
						}
					},
					// 列表数据
					dataList: []
				}
			},
			methods: {
				/*下拉刷新的回调, 有三种处理方式: */
				downCallback(mescroll){
					// 第1种: 请求具体接口
					uni.request({
						url: 'xxxx',
						success: () => {
							// 成功隐藏下拉加载状态
							mescroll.endSuccess()
						},
						fail: () => {
							// 失败隐藏下拉加载状态
							mescroll.endErr()
						}
					})
					// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
					mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
					// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
					mescroll.endSuccess()
				},
				/*上拉加载的回调*/
				upCallback(mescroll) {
					// 此时mescroll会携带page的参数:
					let pageNum = mescroll.num; // 页码, 默认从1开始
					let pageSize = mescroll.size; // 页长, 默认每页10条
					uni.request({
						url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
						success: (data) => {
							// 接口返回的当前页数据列表 (数组)
							let curPageData = data.xxx; 
							// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
							let totalPage = data.xxx; 
							// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
							let totalSize = data.xxx; 
							// 接口返回的是否有下一页 (true/false)
							let hasNext = data.xxx; 
							
							//设置列表数据
							if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
							this.dataList = this.dataList.concat(curPageData); //追加新数据
							
							// 成功隐藏下拉加载状态
							//方法一(推荐): 后台接口有返回列表的总页数 totalPage
							mescroll.endByPage(curPageData.length, totalPage); 
							
							//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
							//mescroll.endBySize(curPageData.length, totalSize); 
							
							//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
							//mescroll.endSuccess(curPageData.length, hasNext); 
							
							//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
							//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
							//如果传了hasNext,则翻到第二页即可显示无更多数据.
							//mescroll.endSuccess(curPageData.length);
							
							// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
							this.$nextTick(()=>{
								mescroll.endSuccess(curPageData.length)
							})
							
							//curPageData.length必传的原因:
							1. 使配置的noMoreSize 和 empty生效
							2. 判断是否有下一页的首要依据: 
							   当传的值小于page.size时(说明不满页了),则一定会认为无更多数据;
							   比传入的totalPage, totalSize, hasNext具有更高的判断优先级;
							3. 当传的值等于page.size时,才会取totalPage, totalSize, hasNext判断是否有下一页
							传totalPage, totalSize, hasNext目的是避免方法四描述的小问题
							
							// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
							// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
						},
						fail: () => {
							// 失败隐藏下拉加载状态
							mescroll.endErr()
						}
					})
				}
			}
		}
	</script>

	<style>
	</style>
	   	
		       	
```

下载mescroll-uni:

```
	所有基础案例和中级案例,进入插件市场下载 >>
	

	所有高级案例,点此获取 >> 
				
```

自定义mescroll-uni :

快速的自定义是mescroll-uni的优势, 您可以随心所欲的进行全局配置 和 在具体界面的自定义

\1. 可以直接修改 /components/mescroll-uni/mescroll-uni-option.js 进行全局配置

\2. 在具体的页面中,您可以配置downOption 和 upOption 实现具体界面的自定义, 建议参考[mescroll-options.vue](http://www.mescroll.com/preview.html?name=mescroll-options)

\3. 深度定制化, 请下载和参考mescroll-uni的中高级案例

\4. 自定义loading动画推荐: [https://loading.io](https://loading.io/) 和 https://icons8.com/preloaders/

mescroll-empty:

1.2.0版本独立出空布局的组件<mescroll-empty>, 以便在不使用mescroll的界面也能统一管理空布局:



```
	<template>
		<view>
			// 基本用法
			<mescroll-empty v-if="list.length==0"></mescroll-empty>
			// 所有配置项 (option同up.empty的配置一致)
			<mescroll-empty v-if="isShowEmpty" :option="optEmpty" @emptyclick="emptyClick"></mescroll-empty>
		</view>
	</template>
	
	<script>
		import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
		export default {
			components: {
				MescrollEmpty
			},
			...
		}
				
```

参数说明 :

| <mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit" :fixed="true" height="100%" top="0" :topbar="false" bottom="0" :safearea="false" @emptyclick="emptyClick" @topclick="topClick" @scroll="scroll" ></mescroll-uni> |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| :down                                                        | { }                                                          | 下拉刷新的配置参数                                           |
| @down                                                        | function(mescroll) {}                                        | 下拉刷新的回调 (返回mescroll实例对象)                        |
| :up                                                          | { }                                                          | 上拉加载的配置参数                                           |
| @up                                                          | function(mescroll){}                                         | 上拉加载的回调 (返回mescroll实例对象) 此时mescroll会携带page的参数 其中mescroll.num:当前页 从1开始, mescroll.size:每页数据条数,默认10 |
| @init                                                        | function(mescroll) {}                                        | mescroll组件初始化完成的回调 (返回mescroll实例对象)          |
| :fixed                                                       | true                                                         | 是否通过fixed定位来固定mescroll-uni的高度,默认true (1.1.0新增) 当配置:fixed="false"时,则mescroll-uni高度跟随父元素, 此时父元素必须有高度,否则列表滚动异常 所以不想使用fixed, 建议通过[flex固定高度](http://www.mescroll.com/qa.html#q27) 或 配置height来固定mescroll-uni的高度,详见下一行: |
| height                                                       | ""                                                           | 简单快捷设置mescroll的高度, 此项有值,则不使用fixed (1.2.0新增) 支持100, "100rpx", "100px", "100%"格式的值 其中纯数字则默认单位rpx, 百分比则相对于windowHeight |
| top                                                          | 0                                                            | 下拉刷新区域往下偏移的距离 比如希望偏移100rpx, 则top="100", 传的值是rpx的数值 当:fixed="true", 此时top为fixed的top (已自动加上window-top的值) 当:fixed="false"则为padding-top 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值 |
| :topbar                                                      | false                                                        | top的偏移量是否加上状态栏高度 (当fixed为false时不生效) 1.1.9新增 使用场景: 取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量 |
| bottom                                                       | 0                                                            | 上拉加载区域往上偏移的距离 比如希望偏移100rpx, 则bottom="100", 传的值是rpx的数值 当:fixed="true", 此时bottom为fixed的bottom (已自动加上window-bottom的值) 当:fixed="false"则为padding-bottom 1.2.0版本开始支持"100rpx", "100px", "100%"格式的值 |
| :safearea                                                    | false                                                        | bottom的偏移量是否加上底部安全区的距离 (1.2.0新增) 适配iPhoneX时使用, 此项值对回到顶部按钮生效 |
| @emptyclick                                                  | function(mescroll) {}                                        | 点击empty配置的btnText按钮回调 (返回mescroll实例对象)        |
| @topclick                                                    | function(mescroll) {}                                        | 点击回到顶部的按钮回调 (返回mescroll实例对象)                |
| @scroll                                                      | function(mescroll) {}                                        | 监听滚动事件 (需在up配置onScroll:true才生效, 1.1.0新增) console.log('当前滚动条的位置:' + mescroll.scrollTop + ', 是否向上滑:'+mescroll.isScrollUp) |
| **[down](http://www.mescroll.com/uni.html?v=20200107#options) 下拉刷新的配置参数 (可通过 mescroll.optDown 动态调整)** |                                                              |                                                              |
| 参数名                                                       | 默认值                                                       | 说明                                                         |
| use                                                          | true                                                         | 是否启用下拉刷新 如果配置false,则不会初始化下拉刷新的布局    |
| auto                                                         | true                                                         | 是否在初始化完毕之后自动执行一次下拉刷新的回调 [callback](http://www.mescroll.com/uni.html?v=20200107#tagCallback) |
| autoShowLoading                                              | false                                                        | 如果设置[auto](http://www.mescroll.com/uni.html?v=20200107#tagAuto)=true ( 在初始化完毕之后自动执行下拉刷新的回调 ) , 那么是否显示下拉刷新的进度 需配置down的callback才生效 |
| isLock                                                       | false                                                        | 是否锁定下拉刷新 如果配置true,则会锁定不可下拉,可通过调用mescroll.lockDownScroll(false)解锁 |
| offset                                                       | 80                                                           | 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调           |
| fps                                                          | 80                                                           | 下拉的节流配置 (值越大每秒更新下拉状态的频率越高, 当您发觉下拉卡顿时可尝试调高/低此值) |
| inOffsetRate                                                 | 1                                                            | 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉 |
| outOffsetRate                                                | 0.2                                                          | 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例; 值越接近0,高度变化越小,表现为越往下越难拉 |
| bottomOffset                                                 | 20                                                           | 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行 |
| minAngle                                                     | 45                                                           | 触发下拉最少要偏移的角度(滑动的轨迹与水平线的锐角值),取值区间 [0,90]; 默认45度,即向下滑动的角度大于45度(方位角为45°~145°及225°~315°)则触发下拉; 而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突 |
| textInOffset                                                 | '下拉刷新'                                                   | 下拉的距离在offset范围内的提示文本                           |
| textOutOffset                                                | '释放更新'                                                   | 下拉的距离大于offset范围的提示文本                           |
| textLoading                                                  | '加载中 ...'                                                 | 加载中的提示文本                                             |
| **up 上拉加载的配置参数 (可通过 mescroll.optUp 动态调整)**   |                                                              |                                                              |
| 参数名                                                       | 默认值                                                       | 说明                                                         |
| use                                                          | true                                                         | 是否启用上拉加载 如果配置false,则不会初始化上拉加载的布局    |
| auto                                                         | true                                                         | 是否在初始化完毕之后自动执行一次上拉加载的回调               |
| isLock                                                       | false                                                        | 是否锁定上拉加载 如果配置true,则会锁定不可上拉,可通过调用mescroll.lockUpScroll(false)解锁 |
| isBounce                                                     | false                                                        | 是否允许橡皮筋回弹效果, 默认不允许; 1.1.5新增 [点此查看必读的注意事项](http://www.mescroll.com/qa.html?v=20200107#q25) |
| isBoth                                                       | false                                                        | 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新        |
| offset                                                       | 80                                                           | 距底部多远时,触发upCallback ; 1.1.0新增                      |
| onScroll                                                     | false                                                        | 是否监听滚动事件, 默认false ; 1.1.0新增 监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项 |
| page                                                         | {  num : 0 ,  size : 10 ,  time : null }                     | num : 当前页码,默认0,回调之前加1,即[callback](http://www.mescroll.com/uni.html?v=20200107#tagCallback)(page)从1开始; size : 每页数据的数量; 默认10 time : 加载第一页数据服务器返回的时间 (可空); 防止用户翻页时,后台新增了数据从而导致下一页数据重复; |
| noMoreSize                                                   | 5                                                            | 如果列表已无数据,可设置列表的总数量要大于5条才显示无更多数据; 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看 这就是为什么无更多数据 有时候不显示的原因了 |
| toTop                                                        | {  src : null ,  offset : 1000 ,  duration : 300,  zIndex: 9990,  right: 20,  bottom: 120,  safearea: false,  width: 72,  radius: "50%",  left: null } | 回到顶部按钮的配置: src : 图片路径,必须配置src才会显示; (若想禁用,则src为空串即可) offset : 列表滚动1000px显示回到顶部按钮 duration : 回到顶部的动画时长, 默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过js模拟,比较耗性能; 所以非特殊情况不建议修改) zIndex : fixed定位z-index值 (1.2.0新增) right: 到右边的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增) bottom: 到底部的距离 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增) safearea: bottom的偏移量是否加上底部安全区的距离, 默认false. 适配iPhoneX时使用 (具体页面如不配此项,则取mescroll-uni.vue的safearea值. 1.2.0新增) width: 回到顶部图标的宽度 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增) radius: 圆角 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增) left: 到左边的距离. 此项有值时,right不生效. (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx. 1.2.0新增) |
| empty                                                        | {  use : true ,  icon : null ,  tip : "暂无相关数据",  btnText : "",  fixed: false,  top: "35%",  zIndex: 99 } | 列表第一页无任何数据时,显示的空布局 use : 是否启用 icon : 空布局的图标路径 (支持网络路径) tip : 提示文本 btnText : 按钮文本 fixed : 是否使用fixed定位,默认false (1.0.2新增) top : fixed定位的top值 (完整的单位值,如 "300rpx") zIndex : fixed定位z-index值 |
| textLoading                                                  | '加载中 ...'                                                 | 上拉加载中的文本                                             |
| textNoMore                                                   | '-- END --'                                                  | 没有更多数据的提示文本                                       |

常用方法 :

| 方法名                                           | 说明                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| mescroll.endByPage(dataSize, totalPage, systime) | 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用 dataSize : 当前页获取的数据总数(注意是当前页) totalPage : 列表的总页数 [systime : 加载第一页数据的服务器时间 (点击查看详情);](http://www.mescroll.com/qa.html#q9) |
| mescroll.endBySize(dataSize, totalSize, systime) | 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用 dataSize : 当前页获取的数据总数(注意是当前页) totalSize : 列表的总数据量 systime : 加载第一页数据的服务器时间 (可空); |
| mescroll.endSuccess(dataSize, hasNext, systime)  | 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用 dataSize : 当前页获取的数据量(注意是当前页) hasNext : 是否有下一页数据true/false systime : 加载第一页数据的服务器时间 (可空); |
| mescroll.endErr()                                | 隐藏下拉刷新和上拉加载的状态, 在联网获取数据失败后调用; mescroll内部会自动恢复原来的页码,时间等变量 |
| mescroll.resetUpScroll( isShowLoading )          | 重置列表为第一页 (常用于列表筛选条件变化或切换菜单时重新刷新列表数据) 内部实现: 把page.num=1,再主动触发up.callback isShowLoading 是否显示进度布局; 1.默认null,不传参,则显示上拉加载的进度布局 2.传参true, 则显示下拉刷新的进度布局 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据) |
| mescroll.triggerDownScroll()                     | 主动触发下拉刷新                                             |
| mescroll.triggerUpScroll()                       | 主动触发上拉加载                                             |
| mescroll.setPageNum(num)                         | 设置当前page.num的值                                         |
| mescroll.setPageSize(size)                       | 设置当前page.size的值                                        |
| mescroll.optDown                                 | 获取下拉刷新的配置 (可直接动态修改配置的值)                  |
| mescroll.optUp                                   | 获取上拉加载的配置 (可直接动态修改配置的值)                  |
| mescroll.lockDownScroll( isLock )                | 锁定下拉刷新 ( isLock=ture,null 锁定 ; isLock=false 解锁 )   |
| mescroll.lockUpScroll( isLock )                  | 锁定上拉加载 ( isLock=ture,null 锁定 ; isLock=false 解锁 )   |
| mescroll.scrollTo( y, t ) 1.0.3新增              | 滚动列表到指定位置 y=0,则回到列表顶部; 如需滚动到列表底部,可设置y很大的值,比如y=99999 t时长,单位ms,默认300; 如果不需要动画缓冲效果,则传0 |

其他方法 :

| 以下方法不常用,您可灵活运用于更复杂的场景 |                                                              |
| ----------------------------------------- | ------------------------------------------------------------ |
| 方法名                                    | 说明                                                         |
| mescroll.showDownScroll()                 | 显示下拉刷新的进度布局                                       |
| mescroll.endDownScroll()                  | 隐藏下拉刷新的进度布局                                       |
| mescroll.endUpScroll(isShowNoMore)        | 结束上拉加载的状态 isShowNoMore=true, 显示无更多数据; isShowNoMore=false, 隐藏上拉加载; isShowNoMore=null, 保持当前状态 |
| mescroll.showUpScroll()                   | 显示上拉加载的进度布局                                       |
| mescroll.showNoMore()                     | 显示上拉无更多数据的布局                                     |
| mescroll.hideUpScroll()                   | 隐藏上拉加载的布局                                           |
| mescroll.showEmpty()                      | 显示无任何数据的空布局                                       |
| mescroll.removeEmpty()                    | 移除无任何数据的空布局                                       |
| mescroll.showTopBtn()                     | 显示回到顶部的按钮                                           |
| mescroll.hideTopBtn()                     | 隐藏回到顶部的按钮                                           |
| mescroll.getScrollTop()                   | 获取滚动条的位置y; 也可以在up配置onScroll监听滚动条的位置    |
| mescroll.getBodyHeight()                  | 获取body的高度                                               |
| mescroll.getScrollHeight()                | 获取滚动内容的高度 1.1.2新增                                 |
| mescroll.getClientHeight()                | 获取mescroll的高度 1.1.2新增                                 |
| mescroll.getScrollBottom()                | 获取到底部的距离 1.1.2新增                                   |
| mescroll.viewId                           | 获取mescroll的唯一元素id (可通过uni.createSelectorQuery进一步获取更多信息 1.1.2新增) |
| mescroll.isScrollUp                       | 获取滚动的方向 (true向上滑 / false向下滑 1.1.2新增)          |
| mescroll.version                          | mescroll的版本号                                             |

注意事项 :

\1. mescroll-uni支持npm安装: npm install --save mescroll-uni
但不推荐, 因为设置mescroll为全局组件, 编译到APP可能会失效 (如果APP端不注册全局组件, 可使用npm安装)
这是HBuilderX编辑器的问题, 详见: http://ask.dcloud.net.cn/question/73950

\2. 部分小程序平台无法调用mescroll的方法, 建议使用ref. [点此查看详情 >](http://www.mescroll.com/qa.html?v=20200107#q26)

\3. mescroll-uni本质是scroll-view的滚动, 所以scroll-view存在的局限性mescroll-uni同样存在. [点此查看scroll-view文档 >](https://uniapp.dcloud.io/component/scroll-view)
为了修补scroll-view的短板, 已在内测mescroll-page.vue, 未正式发布, 敬请期待~

\4. mescroll-uni卡顿 ? 除了scroll-view本身的性能之外, 建议通过以下步骤排查:
  (1). 确保在page.json使用mescroll的页面配置了"disableScroll": true
  (2). 微信开发工具的真机调试（小虫子）下还是会卡的，改成预览（小眼睛）然后真机扫描调试就不卡了
  (3). 排查是否加载了过多过大的图片, 可以注释图片看看
  (4). 排查是否加载了过多的视频资源, 建议视频在列表中显示image封面, 点击封面的时候才创建video标签播放
  (5). 一部分一部分代码注释排查
  (6). 对比官方示例或文档

\5. 其他: [点此查看常见问题 >](http://www.mescroll.com/qa.html?v=20200107#q20)