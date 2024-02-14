import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center hover:text-primary"
      >
        User Profile
      </Link>
      <Button onClick={() => logout()} className="flex items-center font-bold">
        Log Out
      </Button>
    </>
  );
}
