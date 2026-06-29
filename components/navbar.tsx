import { COMPONENTS } from "@/data/components";

interface NavbarProps {
  selectedComponent: string;
  setSelectedComponent: (name: string) => void;
}

const Navbar = ({ selectedComponent, setSelectedComponent }: NavbarProps) => {
  return (
    <div
      className={`absolute top-8 flex items-center border-b border-l border-neutral-800 w-4xl`}
    >
      {COMPONENTS.map((component) => {
        const isActive = selectedComponent === component.name;
        return (
          <button
            key={component.name}
            onClick={() => setSelectedComponent(component.name)}
            className={`uppercase text-[10px] text-shadow-md tracking-widest transition-colors duration-300 px-4 py-2 border-t border-r border-neutral-800 cursor-pointer ${
              isActive
                ? "text-neutral-900 bg-neutral-300"
                : "text-neutral-400 bg-neutral-900 hover:text-neutral-900 hover:bg-neutral-300"
            }`}
          >
            {component.name}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
