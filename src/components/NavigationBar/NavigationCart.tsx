import { Link } from "@tanstack/react-router";

interface NavigationCartProps {
  count: number;
}

export default function NavigationCart({ count }: NavigationCartProps) {
  return (
    <Link
      to="/cart"
      aria-label={`View cart — ${count} item${count !== 1 ? "s" : ""}`}
      className={`
        flex items-center justify-center w-8 h-8 rounded-full
        bg-primary text-white font-medium text-sm hover:opacity-70 active:scale-95 transition duration-150`}
    >
      <p>{count}</p>
    </Link>
  );
}
