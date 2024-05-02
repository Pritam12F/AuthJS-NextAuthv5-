import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertProps {
  description?: string;
}

export const AlertDestructive = ({ description }: AlertProps) => {
  if (description) {
    return (
      <div className="p-2 mt-2 -mb-4">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </Alert>
      </div>
    );
  }
  return null;
};

export const AlertDefault = ({ description }: AlertProps) => {
  if (description) {
    return (
      <div className="p-2 mt-2 -mb-4">
        <Alert variant="default">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </Alert>
      </div>
    );
  }
  return null;
};
