import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import API from '../../api';

export default function EditCommendModal({commentId, creater}) {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.put(`/employee_housing/comment?comment_id=${commentId}`, {
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>Edit comment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Description</FormLabel>
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
                <Button type="submit">Submit</Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}