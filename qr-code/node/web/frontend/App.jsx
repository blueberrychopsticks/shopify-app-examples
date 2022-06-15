import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

import {
  AppBridgeProvider,
  GraphQLProvider,
  PolarisProvider,
  PermissionCheck,
} from './components'

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')

  return (
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <GraphQLProvider>
              <PermissionCheck />
              <Routes pages={pages} />
            </GraphQLProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    );
}
