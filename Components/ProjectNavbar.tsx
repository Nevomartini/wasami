import { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-[#01d293] capitalize";
  if (active === value) className += " text-[#01d293]";
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
    </div>
  );
};

export default ProjectNavbar;
function handleFilterCategory(): void {
  throw new Error("Function not implemented.");
}
