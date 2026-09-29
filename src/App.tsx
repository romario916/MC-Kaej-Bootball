
import { Navigate, Route, Routes } from "react-router-dom";

import BoutiqueLayout from "./components/boutique/BoutiqueLayout";
import Boutique from "./pages/Boutique";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      
      <Route
        path="/"
        element={<Navigate to="/boutique" replace />}
      />

      <Route element={<BoutiqueLayout />}>
        <Route
          path="/boutique"
          element={<Boutique />}
        />

        <Route
          path="/boutique/:id"
          element={<ProductDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;

