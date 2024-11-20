import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <h2>Helo</h2>
      <UserButton />
    </div>
  );
}
