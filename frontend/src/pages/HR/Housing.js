import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Field, Form } from "formik";

import React from "react";
// import { bgcolor } from "@mui/system";
// {/* <TableCell>Address</TableCell> */}
//               <TableCell>Landlord Name</TableCell>
//               <TableCell>Landlord Number</TableCell>
//               <TableCell>Landlord Email</TableCell>
//               <TableCell># of Residents</TableCell>
//               <TableCell>Delete</TableCell>
//               <TableCell>Summary View</TableCell>
const columns = [
  {
    field: "address",
    headerName: "Address",
    description: "Housing address.",
    width: 300,
  },
  { field: "landlord", headerName: "Landlord", width: 400 },
  {
    field: "residents",
    headerName: "# of Residents",
    description: "Total number of residents.",
    width: 160,
  },
  {
    field: "summary",
    headerName: "Summary View",
  },
  //   {
  //     field: 'delete',
  //     headerName: 'Delete',
  //   }
];

const rows = [
  {
    id: 0,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View</div>,
  },
  {
    id: 1,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View 2</div>,
  },
  {
    id: 2,
    address: "343 park view ave",
    landlord: {
      name: "Snow",
      landlordNumber: 9999999999,
      email: "asn@mnas.com",
    },
    residents: 4,
    summary: <div>View 3</div>,
  },
];

export default function Housing() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function ModalDialog() {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>New Housing</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                address: "",
                landlordName: "",
                landlordPhone: "",
                landlordEmail: "",
                residents: "",
                beds: "",
                mattresses: "",
                tables: "",
                chairs: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values));
              }}
            >
              <Form>
               <Box sx={{display:'flex', flexDirection:'column'}}>
               <label htmlFor="address">Address</label>
                <Field
                  id="address"
                  name="address"
                  placeholder="343 gold street"
                />

                <label htmlFor="landlordName">Landlord Name</label>
                <Field
                  id="landlordName"
                  name="landlordName"
                  placeholder="Doe John"
                />

                <label htmlFor="landlordPhone">Landlord Phone</label>
                <Field
                  id="landlordPhone"
                  name="landlordPhone"
                  placeholder="xxx-xxx-xxxx"
                />
                <label htmlFor="landlordEmail">Landlord Email</label>
                <Field
                  id="landlordEmail"
                  name="landlordEmail"
                  placeholder="xxx@xxx.com"
                  type="email"
                />
                <label htmlFor="beds">Beds</label>
                <Field id="beds" name="beds" type="number" min="1" />
                <label htmlFor="mattresses">Mattresses</label>
                <Field id="mattresses" name="mattresses" type="number" />
                <label htmlFor="tables">Tables</label>
                <Field id="tables" name="tables" type="number" />
                <label htmlFor="chairs">Chairs</label>
                <Field id="chairs" name="chairs" type="number" />

                <button type="submit">Submit</button>
                <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} >Subscribe</Button>
               </Box>
              </Form>
            </Formik>
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "80%",
      }}
    >
      <Button
        variant="outlined"
        sx={{ width: "20%", right: 0 }}
        onClick={handleClickOpen}
      >
        Add new Housing
      </Button>
      <ModalDialog />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Landlord Name</TableCell>
              <TableCell>Landlord Email</TableCell>
              <TableCell>Landlord Number</TableCell>
              <TableCell>Residents</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.landlord.name}</TableCell>
                <TableCell>{row.landlord.email}</TableCell>
                <TableCell>{row.landlord.landlordNumber}</TableCell>
                <TableCell>{row.residents}</TableCell>
                <TableCell>123</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
