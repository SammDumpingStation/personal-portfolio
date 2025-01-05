import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = { href: string; title: string };

const NavLink = ({ href, title }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "min-[1200px]:hover:text-lg min-[1200px]:hover:font-bold [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)] transition-all duration-300",
        pathname === href
          ? "text-ugray-600 dark:text-ugray-200 font-bold text-base"
          : "text-ugray-600 dark:text-ugray-300 font-medium text-base"
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
