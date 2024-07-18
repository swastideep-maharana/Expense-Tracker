"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-center items-center border shadow-sm">
      <div>
        {/* logo */}
        <span>finance smart</span>
      </div>
      <div>
        <button>button 1</button>
        <button>button 2</button>
      </div>
    </div>
  );
}

export default Header;
