import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import HomePage from "./pages/HomePage";
import PurchasePage from "./pages/PurchasePage";
import AdminPanel from "./pages/AdminPanel";
import AdminLoginModal from "./components/AdminLoginModal";

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [showAdminModal, setShowAdminModal] = useState(false);

  useEffect(() => {
    const handler = () => setShowAdminModal(true);
    window.addEventListener("openAdminLogin", handler);
    return () => window.removeEventListener("openAdminLogin", handler);
  }, []);

  return (
    <>
      <Switch base={base}>
        <Route path="/" component={HomePage} />
        <Route path="/purchase" component={PurchasePage} />
        <Route path="/admin" component={AdminPanel} />
        <Route>
          <div className="min-h-screen flex items-center justify-center bg-[#070C1A] text-white font-mono">
            <div className="text-center">
              <p className="text-[#00FF88] text-6xl font-bold">404</p>
              <p className="mt-2 text-gray-400 text-sm">Page not found</p>
            </div>
          </div>
        </Route>
      </Switch>

      <AdminLoginModal
        open={showAdminModal}
        onClose={() => setShowAdminModal(false)}
      />
    </>
  );
}

export default App;
