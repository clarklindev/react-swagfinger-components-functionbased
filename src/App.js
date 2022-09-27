import { ThemeProvider } from 'styled-components';
//theme
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>

      <button
        style={{ margin: '0 16px 24px', padding: '8px', background: 'none' }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>

      <div
        className="App"
        style={{
          background: useDarkTheme
            ? darkTheme.backgroundColor
            : defaultTheme.backgroundColor,
          color: useDarkTheme ? darkTheme.textColor : defaultTheme.textColor,
          width: '100vw',
          height: '100vh'
        }}
      ></div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
