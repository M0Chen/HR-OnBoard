import React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ViewComment from "./ViewComment";
import API from '../../api';

export default function ReportTable() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    API.get(`/employee_housing`)
      .then((res) => {
        setReport(res.data);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Creater</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>View comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {report.map((report, index) => (
            <TableRow
              key={"row-" + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{report.title}</TableCell>
              <TableCell>{report.description}</TableCell>
              <TableCell>{report.creater}</TableCell>
              <TableCell>{report.timestamp}</TableCell>
              <TableCell>{report.status}</TableCell>
              <TableCell><ViewComment reportId={report._id} creater={report.creater}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
