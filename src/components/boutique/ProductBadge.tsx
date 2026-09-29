interface ProductBadgeProps {
  badge?: "Nouveau" | "Populaire";
}

const ProductBadge = ({ badge }: ProductBadgeProps) => {
  if (!badge) {
    return null;
  }

  const isNew = badge === "Nouveau";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        isNew
          ? "bg-yellow-400 text-black"
          : "bg-violet-600 text-white"
      }`}
    >
      {badge}
    </span>
  );
};

export default ProductBadge;