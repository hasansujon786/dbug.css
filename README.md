# Debug your css layout with ease

# Setup

## Simple JS project

```js
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <h1>debug.css</h1>
    <script src="useDbugCss.js"></script>
  </body>
</html>
```

## React project

```ts
import { useDebugCss } from '@/lib/useDbugCss'
export default function App() {
  useDebugCss()

  return (
    <div>
      <h1>debug.css</h1>
    </div>
  )
}
```
