---
description: "在本项目中编写 React Native 页面与组件时使用。涵盖组件、样式、导入、命名和 Expo Router 约定。"
applyTo: ["app/**/*.tsx", "components/**/*.tsx"]
---

# React Native 项目约定

## 主题组件优先级：优先使用而非原生 RN 基础组件

| Use this | Instead of |
|----------|-----------|
| `ThemedView` from `@/components/themed-view` | `View` |
| `ThemedText` from `@/components/themed-text` | `Text` |

`ThemedView` 和 `ThemedText` 会通过 `useThemeColor` 自动处理明暗主题。  
仅在确实需要主题封装不支持的属性时，才使用原生 `View`/`Text`。

## 颜色与字体

- 从 `@/constants/theme` 引入 `Colors` 与 `Fonts`，禁止硬编码十六进制颜色值。
- 使用 `@/hooks/use-color-scheme` 中的 `useColorScheme()` 获取 `'light' | 'dark'`。
- `Fonts` 基于 `Platform.select`；字体家族请使用 `Fonts.rounded`、`Fonts.mono` 等。

## 图标

- 使用 `@/components/ui/icon-symbol` 的 `IconSymbol`，它在 iOS 上封装 SF Symbols，并在其他平台提供回退。
- 给 `name` 传入 SF Symbol 名称（如 `"house.fill"`、`"gear"`）。

## 路径别名

- 统一使用 `@/` 别名（映射到项目根目录，配置见 `tsconfig.json`）。
- 只要 `@/` 可用，就不要写 `../../` 这类相对路径。

## 文件与组件命名

- 文件名：**kebab-case**（如 `my-settings.tsx`）
- 组件/函数名：**PascalCase**，建议带 `Screen` 或语义后缀（如 `MySettingsScreen`、`UserCard`）
- 页面/主组件使用默认导出；次要导出使用具名导出。

## 样式规范

- 使用 `StyleSheet.create({})` 定义样式，并放在**组件外部**、文件底部。
- 除一次性覆盖外，不要大量使用内联样式对象（如 `style={{ marginTop: 10 }}`）。
- 不要使用 `px` 单位，React Native 使用无单位数字。

## ThemedText 的 `type` 变体

标准文本语义优先使用 `type` 属性，而不是手写字号：

| `type` | Role |
|--------|------|
| `title` | Page/screen title |
| `subtitle` | Section heading |
| `defaultSemiBold` | Emphasis within body text |
| `link` | Tappable links |
| `default` | Body text (default) |

## Expo Router 约定

- Tab 页面放在 `app/(tabs)/`，并在 `app/(tabs)/_layout.tsx` 注册为 `<Tabs.Screen>`。
- Modal 页面放在 `app/`，并在 `app/_layout.tsx` 以 `presentation: 'modal'` 注册。
- 普通路由在 `app/_layout.tsx` 中作为 `<Stack.Screen>` 注册。
