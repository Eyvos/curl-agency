import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import ScrollLink from "../common/ScrollLink";

const Navbar = () => {
  return (
    <Card className="sticky top-3 mt-3 py-3.5 px-8 rounded-full flex justify-between items-center md:w-9/12 self-center">
      <Link href="/">
        <h3 className="text-xl font-bold">Curl</h3>
      </Link>
      <div className="gap-0 flex">
        <ScrollLink targetId={"Philosophy"}>
          <Button variant={"link"}>Notre philosophie</Button>
        </ScrollLink>
        <ScrollLink targetId={"MVP"}>
          <Button variant={"link"}>MVP</Button>
        </ScrollLink>

        <ScrollLink targetId={"Pricing"}>
          <Button variant={"link"}>Nos packs</Button>
        </ScrollLink>

        <ScrollLink targetId={"WhyUs"}>
          <Button variant={"link"}>Pourquoi nous ?</Button>
        </ScrollLink>

        <ScrollLink targetId={"FAQ"}>
          <Button variant={"link"}>FAQ</Button>
        </ScrollLink>
      </div>
      <div className="flex">
        <Link href={process.env.CONTACT_URL || "/"} target="_blank">
          <Button>Nous contacter</Button>
        </Link>
      </div>
    </Card>
  );
};

export default Navbar;
