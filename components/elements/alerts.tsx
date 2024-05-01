import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertProps {
  title: string;
  description: string;
}

export const AlertDestructive = ({ title, description }: AlertProps) => {
  return (
    <div className="p-2 mt-2 -mb-4">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export const AlertDefault = ({ title, description }: AlertProps) => {
  return (
    <div className="p-2 mt-2 -mb-4">
      <Alert variant="default">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};
