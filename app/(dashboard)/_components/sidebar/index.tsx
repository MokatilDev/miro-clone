import { NewButton } from "./new-button";
import { List } from "./list";

export const SideBar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex flex-col gap-y-4 p-3 text-white">
      <List/>
      <NewButton/>
    </aside>
  );
};
