import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState } from "react";
import { cn } from '../../lib/util'; // Ensure you have classnames installed or adjust accordingly
export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link} // Using 'to' prop instead of 'href'
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className="absolute inset-0 h-full w-full block rounded-3xl"
              style={{ backgroundColor: "#11D9C5", opacity: 0.2 }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="font-sans text-[20px]"  >{item.title}</CardTitle>
            <CardDescription className="font-sans text-[15px]">{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-[#11D9C5]", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
