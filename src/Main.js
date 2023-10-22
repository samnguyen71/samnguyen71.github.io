import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import MergesortVisualizer from './Pages/MergeSort';

const Aside = ({toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <Router>
      <ProSidebar
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {intl.formatMessage({ id: 'sidebarTitle' })}
          </div>
        </SidebarHeader>
          
        <SidebarContent>
          <Menu>
            <MenuItem>Intro
            <Link to="/intro" />
            </MenuItem>
          
            {/* Sorting */}
          
            <SubMenu title='Sorting'>
              <MenuItem>Merge Sort 
              <Link to="/mergesort" /> 
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>

      <Routes>
        <Route exact path="/intro" element={<Home />} />
        <Route path="/mergesort" element={<MergesortVisualizer />} />
      </Routes>
    </Router>
  );
};

export default Aside;
