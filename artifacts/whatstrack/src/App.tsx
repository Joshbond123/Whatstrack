import { useState, useEffect } from "react";
import { Router, Switch, Route } from "wouter";
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
    <Router base={base}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/purchase" component={PurchasePage} />
        <Route path="/admin" component={AdminPanel} />
        <Route>
          <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#070C1A", color: "#fff" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#00FF88", fontSize: "64px", fontWeight: 700 }}>404</p>
              <p style={{ marginTop: "8px", color: "#9ca3af", fontSize: "14px" }}>Page not found</p>
            </div>
          </div>
        </Route>
      </Switch>

      <AdminLoginModal
        open={showAdminModal}
        onClose={() => setShowAdminModal(false)}
      />
    </Router>
  );
}

export default App;
