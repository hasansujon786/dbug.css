# Debug your css layout with ease

---

### Setup with Vanila JS project

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

### Setup with React project

```js
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

---

## How to use

Press: <kbd>Ctrl</kbd> + <kbd>I</kbd>
