_app.tsx  ` <Providers store={store}>`

Providers.tsx 

```
import { dark, light } from '@uikit/theme'
<UIKitProvider theme={resolvedTheme === 'dark' ? dark : light} {...props}>
```

uikit\theme\index.ts `colors.ts`

```js
import { DefaultTheme } from "styled-components";
import { darkColors } from './colors';

const darkTheme: DefaultTheme = {
  colors: darkColors,
};
```
