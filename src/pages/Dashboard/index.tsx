import React from 'react';
import { ResponsiveGrid } from '@ali/deep';
import Guide from './components/Guide';
import UtilsCase from '@/components/UtilsCase';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Guide />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
