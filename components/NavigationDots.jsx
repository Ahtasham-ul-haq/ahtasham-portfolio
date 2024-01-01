import React from "react";

const items = ["home", "about", "work"];

const NavigationDots = ({ active }) => {
  return (
    <div className={`app__navigation`}>
      {items.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`${
            active === item ? "bg-[#313BAC] dark:bg-yellow-bg" : 'bg-[#cbcbcb]'
          } app__navigation-dot `}
          // style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
