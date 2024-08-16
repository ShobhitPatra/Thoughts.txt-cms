"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const AppBar = () => {
  return (
    <div
      className="p-3 min-h-16 flex justify-between items-center 
      bg-gradient-to-r from-indigo-950 from-10% via-sky-950 via-30% to-emerald-950 to-90%
    border-b border-slate-400 "
    >
      <Link href="/" className="md:px-6">
        <p className="text-3xl font-semibold text-slate-200">Thoughts.txt</p>
      </Link>
      <Link href="/signin" className="md:px-6">
        <Button
          variant="ghost"
          className="md:text-lg text-slate-200 outline outline-1"
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default AppBar;
