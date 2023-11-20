import { useState } from 'react';

import './productTabs.scss';

interface Tab {
    name: string;
    content: React.ReactNode;
  }

interface ProductTabsProps {
    tabs: Tab[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabButtons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? 'btn active' : 'btn'}>
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tabContent">{tabs[activeTab].content}</div>
    </div>
  );
};

export default ProductTabs;
