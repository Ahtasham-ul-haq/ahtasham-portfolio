import React from 'react'

const items = ["home", "about", "work", "contact"];

const NavigationDots = ({ active }) => {
    return (
        <div className={`app__navigation dark:bg-dark-bg`}>
            {items.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className={`${active === item ? 'bg-[#313BAC] dark:bg-yellow-bg' : ''} app__navigation-dot`}
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots;