import './scss/main.scss'

import HeadTag from './components/Head'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import {ThemeProvider} from './contexts/theme'
import { PageTypeProvider } from './contexts/viewType'
const App = ({Component, pageProps}) => 
  {
    
    return(
    <>
      <HeadTag />
      <ThemeProvider>
        <Header />
        <Nav />
        <div id='backdrop' />
        <div id='userModal' />
        <PageTypeProvider>
          <Component {...pageProps}/>
        </PageTypeProvider>
      </ThemeProvider>
    </>
    
  )
  }

App.getInitialProps = async ({ctx, Component}) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return {pageProps}
}

export default App;