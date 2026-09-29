import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
}

const QuantitySelector = ({
  quantity,
  onDecrease,
  onIncrease,
  min = 1,
}: QuantitySelectorProps) => {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Diminuer la quantité"
        className="flex h-9 w-9 items-center justify-center text-black transition hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={16} />
      </button>

      <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold text-black">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Augmenter la quantité"
        className="flex h-9 w-9 items-center justify-center text-black transition hover:bg-violet-50 hover:text-violet-700"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;