import { AdminHeader } from "@/app/admin/_components/admin-header";
import { AdminShell } from "@/app/admin/_components/admin-shell";
import { Button } from "@/components/ui/button";

export const runtime = "edge";

export default async function AdminPage() {
  return (
    <AdminShell>
      <AdminHeader heading="Dashboard" text="Admin overview">
        <Button>Click</Button>
      </AdminHeader>
      <div>Admin dashboard</div>
    </AdminShell>
  );
}
