import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
interface Alert {
  title: string;
  description: string;
}
export function AlertComponent({ title, description }: Alert) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
