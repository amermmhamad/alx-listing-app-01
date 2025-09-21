import type { PropertyProps } from "@/interfaces";

type Props = {
  item: PropertyProps;
};

const PropertyCard: React.FC<Props> = ({ item }) => {
  const { name, rating, price, image, discount, address } = item;

  const showDiscount = discount && discount.trim().length > 0;
  const discountInt = showDiscount ? parseInt(discount, 10) : null;

  return (
    <article className="group overflow-hidden rounded-2xl transition hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {showDiscount && (
          <img
            src="/assets/imgs/detail/discount-indicator.png"
            alt={`${discountInt}% off`}
            className="absolute left-0 top-2 h-10 w-20 select-none pointer-events-none"
            draggable={false}
          />
        )}
      </div>
      <div className="space-y-1 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">
          {address.city}, {address.state}, {address.country}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
              ★ {rating.toFixed(2)}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">per night</div>
            <div className="text-base font-semibold">
              ${price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
