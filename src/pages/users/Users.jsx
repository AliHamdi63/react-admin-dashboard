import { useState } from "react";
import { Add, DataTable } from "../../components/"
import { userRows } from "../../data";
import "./users.scss"

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} />
        }
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => {
            return <div className="action">
                <div className="view">View</div>
                <div className="delete">Delete</div>
            </div>
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        type: 'string',
        width: 150,
        // editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        type: 'string',
        width: 150,
        // editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,
        // editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 200,
        // editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: "string",
        width: 200,
    },
    {
        field: 'verified',
        headerName: 'Verified',
        width: 150,
        type: "boolean",
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];


const Users = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users