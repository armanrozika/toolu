import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PasswordReset from "./Login/PasswordReset";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />}>
                <Route path="setting" element={<p>setting</p>} />
                <Route path="akun" element={<p>akun</p>} />
              </Route>
            </Route>
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
