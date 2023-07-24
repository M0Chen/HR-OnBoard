import {
  Box,
  Paper,
  InputBase,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

export default function Registration() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [rows, setRows] = React.useState([
    { name: "John", email: "John@bf.com", status: null },
    { name: "Jn", email: "Jn@bf.com", status: "registered" },
    { name: "Cena", email: "cena@bf.com", status: "registered" },
  ]);
  const form = useRef();
  const sendEmail = () => {

    emailjs.send('registration_token', 'template_prk74qi', {from_name:'Vicky', to_name:name, email:email, message:'123123'}, 'l00MFqEaS-lC5OS2A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  function sendToken() {
    sendEmail();
    if (name && email) {
      setRows((oldArray) => [
        { name: name, email: email, status: "pending" },
        ...oldArray,
      ]);
      console.log(rows);
      alert(name + " with " + email + " has received the token.");
      setEmail("");
      setName("");
    }
  }
  
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <h3 style={{ textAlign: "left" }}>Registration Invitation</h3>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: 40,
            m: "10px 20px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Email"
            inputProps={{ "aria-label": "Search" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Paper>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: 40,
            m: "10px 20px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Name"
            inputProps={{ "aria-label": "Search" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Paper>
        <Button
          sx={{ ml: 4, alignSelf: "center" }}
          variant="contained"
          onClick={() => {
            sendToken();
          }}
        >
          Send
        </Button>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
