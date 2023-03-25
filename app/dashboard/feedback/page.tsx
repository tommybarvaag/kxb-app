import { UserFeedbackForm } from "@/components/user/user-feedback-form";
import { getEdgeFriendlyToken } from "@/lib/token";
import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";

export const runtime = "experimental-edge";

export const metadata = {
  title: "Feedback"
};

export default async function FeedbackPage() {
  const token = await getEdgeFriendlyToken();
  const user = await getUser(token.id);

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="">
      <div className="prose prose-neutral mb-8 dark:prose-invert prose-p:text-neutral-50">
        <h1>We appreciate all feedback</h1>
        <p>Good or bad, small or big.</p>
        <p>Help us make this app better for you.</p>
        <p>Thank you!</p>
      </div>
      <div className="w-full max-w-[320px]">
        <UserFeedbackForm user={user} />
      </div>
    </div>
  );
}