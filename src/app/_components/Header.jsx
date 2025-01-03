"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { db } from "../../../utlis/dbConfig";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard"); // Correct redirect to /dashboard
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <Image
          src="/chart-donut.svg"
          alt="Finance Smart Logo"
          width={40}
          height={25}
        />
        <span className="text-blue-800 font-bold text-xl">FinanceSmart</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href={isSignedIn ? "/dashbord" : "/sign-in"}>
            {" "}
            {/* Keeping the spelling "dashbord" as is */}
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
