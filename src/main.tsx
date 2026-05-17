import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme/theme'
import GlobalStyle from '@/styles/GlobalStyle'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)

// React.StrictMode === StrictMode  機能・挙動は完全一致
// ReactDOM.createRoot ＝＝＝ createRoot(