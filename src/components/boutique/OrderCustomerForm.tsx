
import { useState } from "react";

export interface CustomerInfo {
  nom: string;
  telephone: string;
  adresse: string;
  note: string;
}

interface OrderCustomerFormProps {
  onSubmit: (customer: CustomerInfo) => void;
  onCancel: () => void;
}

const OrderCustomerForm = ({
  onSubmit,
  onCancel,
}: OrderCustomerFormProps) => {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] =
    useState("");
  const [adresse, setAdresse] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!nom.trim() || !telephone.trim() || !adresse.trim()) {
      return;
    }

    onSubmit({
      nom: nom.trim(),
      telephone: telephone.trim(),
      adresse: adresse.trim(),
      note: note.trim(),
    });
  };

  return (
    <div className="border-t border-gray-100 bg-white p-5">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
          Livraison
        </p>

        <h3 className="mt-1 text-lg font-black text-black">
          Vos informations
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Ces informations seront ajoutées à votre
          message WhatsApp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Nom */}
        <div>
          <label
            htmlFor="customer-name"
            className="mb-1.5 block text-sm font-semibold text-black"
          >
            Nom complet
          </label>

          <input
            id="customer-name"
            type="text"
            value={nom}
            onChange={(event) =>
              setNom(event.target.value)
            }
            placeholder="Votre nom complet"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label
            htmlFor="customer-phone"
            className="mb-1.5 block text-sm font-semibold text-black"
          >
            Numéro de téléphone
          </label>

          <input
            id="customer-phone"
            type="tel"
            value={telephone}
            onChange={(event) =>
              setTelephone(event.target.value)
            }
            placeholder="Ex. 034 12 345 67"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Adresse */}
        <div>
          <label
            htmlFor="customer-address"
            className="mb-1.5 block text-sm font-semibold text-black"
          >
            Lieu de livraison
          </label>

          <textarea
            id="customer-address"
            value={adresse}
            onChange={(event) =>
              setAdresse(event.target.value)
            }
            placeholder="Quartier, commune, adresse..."
            rows={3}
            required
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Note */}
        <div>
          <label
            htmlFor="customer-note"
            className="mb-1.5 block text-sm font-semibold text-black"
          >
            Note
            <span className="ml-1 font-normal text-gray-400">
              (facultatif)
            </span>
          </label>

          <textarea
            id="customer-note"
            value={note}
            onChange={(event) =>
              setNote(event.target.value)
            }
            placeholder="Une précision pour votre commande..."
            rows={2}
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Continuer vers WhatsApp
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 hover:text-black"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderCustomerForm;

