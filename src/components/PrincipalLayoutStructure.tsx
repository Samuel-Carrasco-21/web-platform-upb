"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { NavbarOptions } from "../data/navbarOptions";
import LinkNavBar from "./LinkNavBar";
import { StoreContext } from "../store/StoreProvider";
import loguito from "../assets/loguito.png";
interface Props {
  children: React.ReactNode;
}

const PrincipalLayoutStructure = ({ children }: Props) => {
  const context: any = useContext(StoreContext);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav className="bg-[#42457A] border-gray-200 w-full p-4 flex flex-row">
        <Image
          src={loguito}
          alt="Aqui va una imagen chida :D"
          className="w-1/6"
        />
        <div
          className="flex flex-row w-full items-center justify-between"
          id="navbar-multi-level"
        >
          <ul className="flex flex-row font-medium p-4  border-gray-100 rounded-lg ">
            {NavbarOptions.map((item, index) => (
              <LinkNavBar key={index} refLink={item.ref} text={item.text} />
            ))}
          </ul>
        </div>
      </nav>
      <main className="w-full h-full bg-[#F4F0ED]">{children}</main>
    </div>
  );
};

export default PrincipalLayoutStructure;
