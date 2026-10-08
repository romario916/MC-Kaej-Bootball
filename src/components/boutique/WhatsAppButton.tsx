import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "261385857955";

  const message = encodeURIComponent(
    "Bonjour, je souhaite avoir des informations sur les produits de ROSA Boutique."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter ROSA Boutique sur WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
    >
      <MessageCircle size={25} />
    </a>
  );
};

export default WhatsAppButton;