import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';
import API from '../../api';

export default function CommentModal({ reportId, creater }) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    API.post(`/employee_housing/comment?report_id=${reportId}`, {
      content: description,
      creator: creater
    })
      .then(res => {
        setDescription(res.data);
        setOpen(false);
      })
  }

  const handleChange = (event) => {
    if (event.target.name === 'description') {
      setDescription(event.target.value);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ marginBottom: 20 }}>
        Post new comment
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>Share your thoughts</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Comment</FormLabel>
                <TextField
                  autoFocus
                  margin="dense"
                  id="outlined-multiline-static"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={6}
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Post Comment</Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}