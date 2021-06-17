
## no problems now, just build directly

_app.js set up:

```bash
import App from "next/app";
import 'antd/dist/antd.css';
export default App
```

## build

build:

```bash
$ yarn build
```
start and custom a new port:

```bash
"start": "next start -p 80"
```

custom build dir:

```bash
module.exports = {
  distDir: 'build',
}

```

