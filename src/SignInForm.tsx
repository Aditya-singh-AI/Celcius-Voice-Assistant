import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";
import { LoaderCircle } from "lucide-react";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl shadow-brand-blue/10">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          {flow === "signIn" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {flow === "signIn"
            ? "Sign in to continue your conversation."
            : "Get started with your intelligent assistant."}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            const formData = new FormData(e.target as HTMLFormElement);
            formData.set("flow", flow);
            void signIn("password", formData)
              .catch((error) => {
                let toastTitle = "";
                if (error.message.includes("Invalid password")) {
                  toastTitle = "Invalid password. Please try again.";
                } else {
                  toastTitle =
                    flow === "signIn"
                      ? "Could not sign in, did you mean to sign up?"
                      : "Could not sign up, did you mean to sign in?";
                }
                toast.error(toastTitle);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          <div className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              disabled={submitting}
              className="bg-white/5 border-white/10"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              disabled={submitting}
              className="bg-white/5 border-white/10"
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <Button type="submit" className="w-full h-12 text-base font-semibold bg-brand-blue hover:bg-brand-blue/90 text-white" disabled={submitting}>
              {submitting ? <LoaderCircle className="animate-spin" /> : (flow === "signIn" ? "Sign In" : "Sign Up")}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              {flow === "signIn"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-brand-blue hover:text-brand-blue/80"
                onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
              >
                {flow === "signIn" ? "Sign up" : "Sign in"}
              </Button>
            </p>
            <div className="flex items-center w-full">
              <Separator className="bg-white/10" />
              <span className="mx-4 text-xs text-muted-foreground">OR</span>
              <Separator className="bg-white/10" />
            </div>
            <Button variant="secondary" className="w-full h-12 text-base bg-white/10 hover:bg-white/20 border-white/10" onClick={() => void signIn("anonymous")} disabled={submitting}>
              Continue as Guest
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
