import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing";
import AppPage from "@/pages/app";
import SubmitComplaintPage from "@/pages/submit-complaint";
import UnionFeedbackPage from "@/pages/union-feedback";
import SuggestIdeasPage from "@/pages/suggest-ideas";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/app" component={AppPage} />
      <Route path="/submit-a-complaint" component={SubmitComplaintPage} />
      <Route path="/union-feedback" component={UnionFeedbackPage} />
      <Route path="/suggest-ideas" component={SuggestIdeasPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;