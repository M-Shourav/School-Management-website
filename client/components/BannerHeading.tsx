import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import React from "react";

interface Props {
  title?: string;
  currentLabel?: string;
  currentLink: string;
}

const BannerHeading: React.FC<Props> = ({
  title,
  currentLabel,
  currentLink,
}) => {
  return (
    <div className="w-full min-h-48 mx-auto flex items-center justify-center">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <div className="flex items-center justify-center">
          <Link
            href={"/"}
            className="flex items-center gap-x-1 text-base text-muted-foreground font-medium"
          >
            {" "}
            <House className="w-5 h-5" /> মূলপাতা
          </Link>
          <ChevronRight />
          <Link href={currentLink} className="text-green-700 font-bold">
            {currentLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerHeading;
