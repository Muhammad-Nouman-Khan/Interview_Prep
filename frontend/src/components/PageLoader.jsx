import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-theme="forest"
    >
      <LoaderIcon className="size-10 animate-spin text-primary" />
    </div>
  );
};

export default PageLoader;
