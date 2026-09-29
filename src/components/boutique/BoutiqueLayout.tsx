
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import BoutiqueNavbar from "./BoutiqueNavbar";
import BoutiqueFooter from "./BoutiqueFooter";
import CartDrawer from "./CartDrawer";
import WhatsAppButton from "./WhatsAppButton";

interface BoutiqueOutletContext {
  openCart: () => void;
}

export const useBoutiqueLayout =
  (): BoutiqueOutletContext => {
    return useOutletContext<BoutiqueOutletContext>();
  };

const BoutiqueLayout = () => {
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <BoutiqueNavbar
        onCartClick={openCart}
      />

      <Outlet
        context={{
          openCart,
        }}
      />

      <BoutiqueFooter />

      <WhatsAppButton />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
      />
    </div>
  );
};

export default BoutiqueLayout;

