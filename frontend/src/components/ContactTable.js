import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Paper, TableContainer, useTheme, Box } from '@mui/material';

const ContactTable = ({ contacts, onEdit, onDelete }) => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: '20px',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ background: theme.palette.primary.main }}>
            {['First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Job Title', 'Actions'].map((header) => (
              <TableCell key={header} style={{ color: theme.palette.text.primary }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit(contact)}
                    sx={{ marginRight: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onDelete(contact._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
