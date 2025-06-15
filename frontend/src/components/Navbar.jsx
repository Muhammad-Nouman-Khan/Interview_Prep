import { Link } from "react-router";
import { Bot } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="flex items-center gap-2">
        <Bot className="w-12 h-12 text-primary " />
        <h2 className="text-primary text-2xl font-bold">TalkHire</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
