import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/developer/ui/home/Home";
import Single from "./components/pages/developer/ui/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext";
import PageNotFound from "./components/pages/developer/ui/partials/PageNotFound copy";
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute";
import Post from "./components/pages/developer/dashboard/post/Post";
import ForgotPassword from "./components/pages/developer/access/ForgotPassword";
import CreatePassword from "./components/pages/developer/access/CreatePassword";
import Login from "./components/pages/developer/access/Login";

function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
          <Router>
            <Routes>
              {/* DASHBOARD */}
              <Route path="/*" element={<PageNotFound/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/create-password" element={<CreatePassword/>}/>
              
              {/* error here import post */}
              <Route path="/post" element={<ProtectedRoute><Post/></ProtectedRoute>}/>


              {/* UI */}
              <Route path="/home" element={<Home/>} />
              <Route path="/single" element={<Single/>} />
            </Routes>
          </Router>
    </StoreProvider>
    </QueryClientProvider>

    </>
  );
}
export default App;