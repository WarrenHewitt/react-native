---
name: init-page
description: '在此 React Native 项目中脚手架创建新的 Expo Router 页面。适用场景：创建新页面、添加新屏幕、新 tab、新 modal、新路由、初始化页面。支持 tab 页面（自动注册到 tabs 布局）、modal 页面和普通 stack 路由。'
argument-hint: '<页面名> [tab|modal|route]'
---

# 初始化页面

按本项目约定快速创建一个新的 Expo Router 页面。

## 适用场景
- 创建新页面或新屏幕
- 在底部标签栏新增 tab
- 新增 modal 或普通 stack 路由
- 用户提到“新建页面”“新增屏幕”“创建 tab”“初始化页面”等诉求

## 页面类型

| Type | File location | Extra step |
|------|--------------|------------|
| **tab** | `app/(tabs)/<name>.tsx` | 在 `app/(tabs)/_layout.tsx` 中注册 `<Tabs.Screen>` |
| **modal** | `app/<name>.tsx` | 在 `app/_layout.tsx` 中注册 `<Stack.Screen presentation="modal">` |
| **route** | `app/<name>.tsx` | 在 `app/_layout.tsx` 中注册 `<Stack.Screen>` |

## 操作步骤

### 1. 确定页面名称与类型

如果用户已在参数中同时提供（例如 `settings tab`），直接使用。  
否则询问：
- **页面名**：用于文件名（kebab-case）和组件名（PascalCase + "Screen"）
- **页面类型**：`tab`、`modal` 或 `route`（默认 `route`）

### 2. 创建页面文件

以 [page-template.tsx](./assets/page-template.tsx) 为基础模板，替换：
- `%%SCREEN_NAME%%` → PascalCase 组件名，例如 `SettingsScreen`
- `%%TITLE%%` → 可读标题，例如 `Settings`
- 对于 **tab** 与 **modal** 页面，仅当用户需要视觉头图（hero header）时才保留 `ParallaxScrollView`；否则使用模板里的平铺 `ThemedView` 版本。

文件命名使用 kebab-case（如 `my-page.tsx`）。

### 3. 在布局文件中注册页面

**Tab**：编辑 `app/(tabs)/_layout.tsx`：
```tsx
<Tabs.Screen
  name="<filename-without-extension>"
  options={{
    title: '<Title>',
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="<sf-symbol-name>" color={color} />,
  }}
/>
```
将新的 `<Tabs.Screen>` 添加在现有最后一个 `<Tabs.Screen>` 之后。

**Modal**：编辑 `app/_layout.tsx`：
```tsx
<Stack.Screen name="<filename-without-extension>" options={{ presentation: 'modal', title: '<Title>' }} />
```

**Route**：编辑 `app/_layout.tsx`：
```tsx
<Stack.Screen name="<filename-without-extension>" options={{ title: '<Title>' }} />
```

### 4. 校验

- 对新文件和已修改的布局文件运行 `get_errors`。
- 确认页面组件为默认导出（default export）。
- 确认布局文件中的 import 无需变更（注册步骤通常不需要新增 import）。

## 项目约定

- import 使用 `@/` 别名（见 `tsconfig.json` 配置）。
- 主题组件优先使用 `@/components/` 下的 `ThemedText`、`ThemedView`。
- 颜色与字体从 `@/constants/theme` 引入。
- 使用 `@/hooks/use-color-scheme` 中的 `useColorScheme`。
- 文件名采用 kebab-case；组件名采用 PascalCase。
- `StyleSheet.create` 放在文件底部并置于组件外部。
