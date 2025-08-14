interface RetroContainerProps {
  children: React.ReactNode;
  className?: string;
  isCircle?: boolean;
}

const RetroContainer = ({ children, className = "", isCircle }: RetroContainerProps) => {
  return (
    <div className={`
      relative
      border-4
      border-black
      dark:border-[#e3ede0]
      bg-[#e3ede0]
      dark:bg-gray-900
      rounded-sm
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
      transition-all
      hover:translate-x-[2px]
      hover:translate-y-[2px]
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
      ${className}
    `} style={{ borderRadius: isCircle ? '50%' : '0' }}>
      {children}
    </div>
  );
};

export default RetroContainer;