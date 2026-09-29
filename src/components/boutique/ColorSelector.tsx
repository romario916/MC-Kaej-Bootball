interface ProductColor {
  nom: string;
  valeur: string;
}

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor | null;
  onSelect: (color: ProductColor) => void;
}

const ColorSelector = ({
  colors,
  selectedColor,
  onSelect,
}: ColorSelectorProps) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-bold text-black">
          Couleur
        </p>

        {selectedColor && (
          <span className="text-sm font-medium text-gray-500">
            {selectedColor.nom}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isSelected =
            selectedColor?.nom === color.nom;

          return (
            <button
              key={color.nom}
              type="button"
              onClick={() => onSelect(color)}
              aria-label={`Choisir la couleur ${color.nom}`}
              aria-pressed={isSelected}
              className={`group flex items-center gap-2 rounded-xl border px-3 py-2 transition ${
                isSelected
                  ? "border-violet-600 bg-violet-50 ring-2 ring-violet-200"
                  : "border-gray-200 bg-white hover:border-violet-400"
              }`}
            >
              <span
                className="h-6 w-6 rounded-full border border-black/10 shadow-sm"
                style={{
                  backgroundColor: color.valeur,
                }}
              />

              <span
                className={`text-sm font-semibold ${
                  isSelected
                    ? "text-violet-700"
                    : "text-gray-700"
                }`}
              >
                {color.nom}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;