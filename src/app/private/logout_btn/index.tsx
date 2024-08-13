"use client";

import { createSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const db = createSupabaseClient();
  const router = useRouter();

  db.auth.getUser().then(({ data }) => console.log(data));

  const logOut = () => {
    db.auth.signOut();
    router.refresh();

    // revalidate path
  };

  return <button onClick={logOut}>Logout</button>;
};

export default LogoutBtn;
