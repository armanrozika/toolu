import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PasswordReset from "./Login/PasswordReset";
import NotFound from "./NotFound/NotFound";
import Overview from "./Overview/Overview";
import Result from "./Result/Result";
import Team from "./Team/Team";
import Akun from "./Akun/Akun";
import Info from "./Info/Info";

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
                <Route path="/" element={<Overview />} />
                <Route path="/result" element={<Result />} />
                <Route path="/team" element={<Team />} />
                <Route path="/akun" element={<Akun />} />
                <Route path="/info" element={<Info />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
