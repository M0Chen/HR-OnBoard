import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';
import API from '../../api';

export default function ProfileModal({ profileId }) {
  const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    API.get(`/employee_profile/profile?profile_id=${profileId}`)
      .then((res) => {
        setProfile(res.data);
      });
  }, [profileId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const transformProfile = (profile) => {
    if (!profile || profile.length === 0) {
      return [];
    }
    const profileData = [];
    for (let [key, value] of Object.entries(profile[0])) {
      if (key === "_id" || key === "__v") {
        continue;
      }
      profileData.push([key, value]);
    }
    return profileData;
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose} >
        <DialogTitle>Employee Profile</DialogTitle>
        <DialogContent>
          <form>
            <Stack spacing={1}>
              {transformProfile(profile).map((entry, index) => (
                <FormControl key={"value-" + index}>
                  <FormLabel>{entry[0]}</FormLabel>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    variant="outlined"
                    value={entry[1]}
                  />
                </FormControl>
              ))}

              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </div >
  );
}