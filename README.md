# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# ※ 과제주제
## - 아래 조건을 참고하여 안내드리는 주소(https://wiblebiz.kia.com/FAQ)의 화면을 본인이 작업한다는 가정 하에 최대한 비슷하게 제작
### 조건 1 : 필요한 이미지가 있다면 다운로드하여 사용 가능
### 조건 2 : 필요한 API 응답 결과는 개발자도구(크롬 기준) > 네트워크 탭 > Fetch/XHR 에서 참고 (프로젝트 내부에 목업데이터 형태로 가지고 시뮬레이션)
### 조건 3 : MSW(Mock Service Worker)나 JSON Server 같은 오픈소스 활용 가능
### 조건 4 : 개발 환경은 Vite를 활용해서 직접 구성 또는 Next.js를 세팅하여 진행
### 조건 5 : 스타일링은 CSS, SASS, CSS in JS 등 작업하기 편한 도구 활용
### 조건 6:  Fetch 관련 오픈소스도 React Query, SWR등을 활용 가능, 네이티브 Fetch를 사용 가능