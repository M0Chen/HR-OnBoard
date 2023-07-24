import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';
import API from '../../api';

export default function NewReportModal() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    API.post(`/employee_housing/report`, {
      title: title,
      description: description
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setOpen(false);
      })
  }

  const handleChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    }
    if (event.target.name === 'description') {
      setDescription(event.target.value);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create new facility report
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>Create new facility report</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  name="title"
                />
              </FormControl>
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
                  onChange={handleChange}
                  name="description"
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