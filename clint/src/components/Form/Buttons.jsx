import { Button } from "../ui/button";
import { Loader } from "lucide-react";

const Buttons = ({ text, isPending, type }) => {
  return (
    <Button className="capitalize mt-2" type={type} disabled={isPending}>
      {isPending ? (
        <>
          <Loader className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export default Buttons;
