import BrandIcon from "./icon/Brand";

export const AppLogo = () => {
  return (
    <div className="py-4 flex items-center space-x-1">
      <BrandIcon/>
      <span className="font-bold xl:inline hidden text-lg select-none">
        <span className="text-primary-500">Bee</span>
        <span>Tweet</span>
      </span>
    </div>
  );
};
