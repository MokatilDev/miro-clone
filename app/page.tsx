import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>
        This is a screen for authenticated users only
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  );
}
