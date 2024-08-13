import { redirect } from "next/navigation";
import LogoutBtn from "./logout_btn";
import { createSupabaseServer } from "@/lib/supabase/server";

export default async function PrivatePage() {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <LogoutBtn />
      <p>Hello {data.user.email}</p>
    </div>
  );
}
