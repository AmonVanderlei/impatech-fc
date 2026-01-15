"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { PiRanking, PiSoccerBallFill } from "react-icons/pi";
import { TbSoccerField } from "react-icons/tb";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer className="flex w-full min-h-24 bg-black/40 justify-between items-center p-4 fixed bottom-0 border-t-2 border-white/20 rounded-t-md md:h-screen md:top-0 md:left-0 md:w-auto md:rounded-l-none md:flex-col md:rounded-r-md md:border-t-0 md:border-r-2">
      <Link
        href="/"
        className={clsx(
          "flex flex-col justify-center items-center transition-all duration-500",
          isActive("/") && "text-lime-600"
        )}
      >
        <AiOutlineHome
          className={clsx(
            "text-2xl text-lime-600 transition-all duration-500",
            isActive("/") && "text-4xl md:text-5xl"
          )}
        />
        Home
      </Link>

      <Link
        href="/matches"
        className={clsx(
          "flex flex-col justify-center items-center transition-all duration-500",
          isActive("/matches") && "text-lime-600"
        )}
      >
        <PiSoccerBallFill
          className={clsx(
            "text-2xl text-lime-600 transition-all duration-500",
            isActive("/matches") && "text-4xl md:text-5xl"
          )}
        />
        Matches
      </Link>
      <Link
        href="/team"
        className={clsx(
          "flex flex-col justify-center items-center transition-all duration-500",
          isActive("/team") && "text-lime-600"
        )}
      >
        <TbSoccerField
          className={clsx(
            "text-2xl text-lime-600 transition-all duration-500",
            isActive("/team") && "text-4xl md:text-5xl"
          )}
        />
        Team
      </Link>
      <Link
        href="/ranking"
        className={clsx(
          "flex flex-col justify-center items-center transition-all duration-500",
          isActive("/ranking") && "text-lime-600"
        )}
      >
        <PiRanking
          className={clsx(
            "text-2xl text-lime-600 transition-all duration-500",
            isActive("/ranking") && "text-4xl md:text-5xl"
          )}
        />
        Ranking
      </Link>
      <Link
        href="/profile"
        className={clsx(
          "flex flex-col justify-center items-center transition-all duration-500",
          isActive("/profile") && "text-lime-600"
        )}
      >
        <CgProfile
          className={clsx(
            "text-2xl text-lime-600 transition-all duration-500",
            isActive("/profile") && "text-4xl md:text-5xl"
          )}
        />
        Profile
      </Link>
    </footer>
  );
}
