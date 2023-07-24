import * as React from 'react';
import ReportTable from "../../components/Report/ReportTable";
import NewReportModal from "../../components/Report/NewReportModal";

export default function EmployeeHousing() {
  return (
    <>
      <NewReportModal />
      <ReportTable />
    </>
  )
}
