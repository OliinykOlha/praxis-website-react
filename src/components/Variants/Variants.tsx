import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";


export default function Variant() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <div style={container}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={nav}
        >
          <motion.div style={background} variants={sidebarVariants} />
          <Navigation />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </div>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul style={list} variants={navVariants}>
    {practices.map((practice, i) => (
      <MenuItem practice={practice} color={colors[i]} key={i} />
    ))}
  </motion.ul>
);

interface Practice {
  name: string;
  schedule: string;
  url: string;
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#4379DC", "#4651DC", "#2736DC", "#4379DC"];
const practices = [
  { name: "Physio Yoga", schedule: "Mo/Mi 18:00-19:00", url: "#yoga" },
  { name: "Krankengymnastik", schedule: "Di/Do 18:00-19:00", url: "#krankengym"},
  { name: "Pilates", schedule: "Di/Do 13:00-14:00", url: "#pilates" },
  { name: "Power Plate Training", schedule: "nach Vereinbarung", url: "#powerplate"},
];

const MenuItem = ({
  practice,
  color,
}: {
  practice: Practice;
  color: string;
}) => {
  const border = `2px solid ${color}`;
  return (
     <a
  href={practice.url}
  onClick={(e) => {
    e.preventDefault();
    const targetId = practice.url.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}
  style={{ textDecoration: 'none' }}
>
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={{ ...iconPlaceholder, border }} />
      <div>
        <div style={practiceTitle}>{practice.name}</div>
        <div style={practiceTime}>{practice.schedule}</div>
      </div>
    </motion.li>
     </a>
  );
};

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#0a4b96"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
    Praktiken für den Körper
  </button>
);

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  minHeight: 300,
  backgroundColor: "var(--accent)",
  borderRadius: '24%',
  overflow: "visible",
};

const nav: React.CSSProperties = {
  width: 300,
};

const background: React.CSSProperties = {
  backgroundColor: "#f5f5f5",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 500,
};

const toggleContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  left: 20,
  width: 200,
  height: 50,
  borderRadius: "24%",
  background: "transparent",
  fontSize: 13,
  fontWeight: "bold",
  color: "#0a4b96",
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 60,
  width: 400,
};

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 10,
  cursor: "pointer",
};

const iconPlaceholder: React.CSSProperties = {
  width: 100,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
};

const practiceTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  marginBottom: 4,
  color: "#0a4b96",
};

const practiceTime: React.CSSProperties = {
  fontSize: 14,
  color: "#555",
}


/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
