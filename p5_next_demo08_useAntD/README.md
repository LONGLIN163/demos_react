
## how to make next can use css

_app.js set up:

```bash
    import '../styles/test.css'
    export default function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />
    }
```

## how to set up antd 

set global css directly in _app.js

```bash
import 'antd/dist/antd.css';
```

## about on demand loading

**...???**
