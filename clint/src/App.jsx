import "./App.css";

import AppRoutes from "@/roustes/AppRoutes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
