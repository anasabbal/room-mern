import * as React from 'react';
import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';


export default function NavBar() {
  const [mainItems, setMainItems] = React.useState([
    {label: 'Home', info: {id: 1}},
    {label: 'Service', info: {id: 2}},
    {label: 'Carrers', info: {id: 3}},
    {label: 'Contact', info: {id: 4}},
  ]);
  function getUniqueIdentifier(item) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }
  function handleMainItemSelect(item) {
    setMainItems(prev =>
      setItemActive(prev, item, getUniqueIdentifier),
    );
  }
  return (
    <AppNavBar
      title="NasSoft"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}