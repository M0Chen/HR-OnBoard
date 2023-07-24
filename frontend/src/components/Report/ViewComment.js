import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import API from '../../api';
import CommentModal from "./CommentModal";
import EditCommentModal from "./EditCommentModal";
import Stack from '@mui/material/Stack';

export default function ViewComment({ reportId, creater }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    API.get(`/employee_housing/comment?report_id=${reportId}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setComment(res.data);
        }
      });
  }, [reportId]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogTitle>All Comments</DialogTitle>
        <DialogContent>
          <CommentModal reportId={reportId} creater={creater} />
          <Stack spacing={2}>
            {comment.map((comment, index) => (
              <Typography variant="subtitle1" component="div" key={"comment-" + index}>
                {comment.content} - posted by {comment.creator} - {comment.timestamp}
                <EditCommentModal commentId={comment._id} creater={creater} />
              </Typography>
            ))}
          </Stack>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}