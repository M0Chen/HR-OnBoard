import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProfileModal from './ProfileModal';
import API from '../../api';
import ProfileSearch from "../../components/Profile/ProfileSearch";

export default function ProfileTable() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    API.get(`/employee_profile`)
      .then((res) => {
        setProfile(res.data);
      });
  }, []);

  return (
    <>
      <ProfileSearch setProfile={setProfile}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>SSN</TableCell>
              <TableCell>Work Authorization</TableCell>
              <TableCell>Phone</TableCell>
              {/* <TableCell>Email</TableCell> */}
              <TableCell>View profile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profile.map((profile, index) => (
              <TableRow
                key={"profile-" + index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{profile.firstName}_{profile.lastName}</TableCell>
                <TableCell>{profile.ssn}</TableCell>
                <TableCell>{profile.visa}</TableCell>
                <TableCell>{profile.phoneNum}</TableCell>
                {/* <TableCell>{profile.email}</TableCell> */}
                <TableCell><ProfileModal profileId={profile._id} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
