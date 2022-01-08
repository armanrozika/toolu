import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />}>
                <Route path="setting" element={<p>setting</p>} />
                <Route path="akun" element={<p>akun</p>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
