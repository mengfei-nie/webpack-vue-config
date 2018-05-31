import Vue from 'vue';
import App from './App.vue'
import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys()
	.forEach(fileName => {
		// 获取组件配置
		const componentConfig = requireComponent(fileName)

		// 取得组件的 Pascal 式命名
		const componentName = upperFirst(
			camelCase(
				// 将文件名前面的 `'./` 和扩展名剥离
				fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
			)
		)

		// 以全局方式注册组件
		Vue.component(
			componentName,
			// 如果组件是通过 `export default` 导出，
			// 则在 `.default` 中，查找组件选项，
			// 否则回退至模块根对象中，查找组件选项
			componentConfig.default || componentConfig
		)
	})

    new Vue({
		render: f => f(App)
	})
	.$mount('#app')
