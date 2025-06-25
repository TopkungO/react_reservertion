import { SignOutButton } from "@clerk/clerk-react"
import { toast } from "sonner";

const Signoutlink = () => {
    const time = Date.now()
    const handleLogout = ()=>{
        toast("Event has been created", { description: time });
    }
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
}

export default Signoutlink