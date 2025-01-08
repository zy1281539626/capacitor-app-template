# capacitor-app-template

## TODO

- [ ] Persist Data Storage
- [ ] layout

This template should help get you started developing with Vue 3 in Cross-Platform App development.

## 1.Dependencies
- vite: ^5.3.1
- vue: ^3.4.29
- typescript: ~5.4.0
- @capacitor/core: 5.7.7 
- @capacitor/cli: 5.7.7 
- @capacitor/android: 5.7.7
- @capacitor/ios: 5.7.7
- @capacitor-community/safe-area: 6.0.0-alpha.4
- @capacitor/preferences": "^5.0.8"
- @ionic/vue: 8.2.6  (layout safe-area)
- @ionic/vue-router: 8.2.6 (多页面路由)
- vue-router 4.4.0
- unplugin-auto-import: 0.18.2 (自动导入)
- unplugin-vue-components: 0.27.3 (组件按需加载)
- crypto-js 4.2.0

- capacitor v5: iOS 13+ is supported. Xcode 14.1+ is required (可根据xcode版本选择capacitor版本)
https://capacitorjs.com/docs/v5/ios
- ionic 用于layout



## 2.Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev --host
```

### Init Capacitor

```sh
npx cap init
```

### Update Capacitor Config file

```typescript
// capacitor.config.ts
import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'carl.demo.app',
  appName: 'demo-app',
  webDir: 'dist',
  server: {
    url: 'http://192.168.xxx.xxx:5173',
    cleartext: true
  },
  plugins: {
  }
}
```

### Add iOS and Android Platform

```sh
npx cap add android
npx cap add ios
```

### Run App on simulator

```sh
pnpm run build
npx cap sync
npx cap run android
npx cap run ios
```

## 3. Components Usage

### 3.1 Layout
```html
<layout>
    <template #header>Header Slot</template>

    <div>Home</div>

    <template #footer>Footer Slot</template>
</layout>
```

### 3.2 Icon

```html
<icon name="close"></icon>
```
常用属性：
- name: 图标名称
- size: 图标大小

### 3.3 Request
基于capacitor/core的CapacitorHttp封装到@/utils/request.ts

```typescript
import http from '@/utils/request'

const url = 'https://example.com'
const data = {
  iGid: 0,
  iPageNo: 4,
  iPageSize: 3
}
const res = await http.get(url, data)

// ... http.post(url, data, options)
// ... http.request(method, url, data, options)
```

### 3.4 Data Cache (Persist)
基于@capacitor/preferences封装数据缓存插件到@/utils/cache.ts

```typescript
// stores/user.ts 初始化用户模块缓存
import { DataCache } from '@/utils/cache'

// 参数：模块[string] 数据是否加密[boolean]，默认false
const userCache = new DataCache('user', true)
export default userCache
```
业务使用：
```typescript
// vue script
import userCache from '@/stores/user'

// get data
await userCache.getData('info')

// set data
await userCache.setData('info', { username: 'mike', age: 24 })

// remove data
await userCache.removeData('info')
```

## 4. Native API

```typescript
// Camera

// Scan

// Location

// Share

// Notification


```

## 5. Important

### 5.1 html页面
- viewport-fit 带有凹槽的屏幕
- user-scalable 禁止双击缩放

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover,maximum-scale=1.0, user-scalable=0" />
```

### 5.2 safe-area插件

```typescript
// 如果在capacitor配置文件中配置也需要import
import '@capacitor-community/safe-area'

// 若使用api enable则直接import对应的api即可
```