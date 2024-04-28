import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";
import { Input } from "postcss";

export const runtime = "edge";

export default function ProfileForm() {
  return (
    <main className="container max-w-screen-xl mx-auto px-4">
      <h1>Profile</h1>
      <p>This is the profile page</p>
      <p>You can update your profile here</p>
    </main>
  );
}
