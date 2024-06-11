export function CartItem({ product }) {
    return (
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium text-telegram-black">{product.name}</div>
        <div className="text-sm font-medium text-telegram-black">{product.price} USD</div>
      </div>
    );
  }