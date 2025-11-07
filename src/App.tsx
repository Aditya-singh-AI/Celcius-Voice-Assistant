import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import VoiceAssistant from "./VoiceAssistant";
import { Bot, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground aurora-background">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-lg">
        <div className="container h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight">Celcius : AI Voice Assistant </h2>
          </motion.div>
          <SignOutButton />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 lg:p-6">
        <Content />
      </main>
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <LoaderCircle className="animate-spin" size={32} />
        <p>Connecting to server...</p>
      </div>
    );
  }

  return (
    <>
      <Unauthenticated>
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SignInForm />
        </motion.div>
      </Unauthenticated>

      <Authenticated>
        <motion.div
          className="w-full h-full flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <VoiceAssistant userEmail={loggedInUser?.email} />
        </motion.div>
      </Authenticated>
    </>
  );
}
