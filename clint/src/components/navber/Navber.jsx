import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import DropdownListMenu from "./DropdownListMenu";

const Navber = () => {
  return (
    <nav>
      <div className="flex flex-col item-center py-4 justify-between sm:flex-row gap-4">
        <Logo/>
        <Searchbar/>
        <DropdownListMenu/>
      </div>
    </nav>
  );
};

export default Navber;
