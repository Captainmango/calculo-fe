import { NextPage } from 'next';
import React from 'react';
import TwoColumn from '../../components/Layout/TwoColumn';
import ReportsPage from '../../components/Reports/ReportsPage';

const Reports: NextPage = () => {
  return (
      <TwoColumn>
          <ReportsPage />
      </TwoColumn>
  )
};

export default Reports;
