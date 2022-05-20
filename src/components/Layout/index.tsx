import { useRouter } from "next/router";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 h-full w-full  ">
      <div className="bg-white h-20 w-full p-4 flex items-center fixed">
        <nav className="container mx-auto flex justify-between ">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            Events App
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
            <button
              className="font-black text-purple-800"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
      <main className=" pt-20">{children}</main>
    </div>
  );
};
