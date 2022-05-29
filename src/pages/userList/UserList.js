import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
//styles
import style from './userList.module.css'
// dummy data
import { userRows } from '../../dummyData'

export const UserList = () => {
    const [data, setdata ] = useState(userRows)

    const onDelete = (id) => {
        setdata(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        // { field: 'username', headerName: 'Username', width: 130 },
            { field: 'user', headerName: 'Username', width: 250, renderCell: (params) => {
                return (
                    <div className={ style.userImage }>
                        <img src="https://images.pexels.com/photos/2466668/pexels-photo-2466668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span>{params.row.username}</span>
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'transaction', headerName: 'Transaction', width: 150,},
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => (
                <>
                    <Link to={ `/user/${ params.row.id}` }>
                        <button className={ style.edit }>Edit</button>
                    </Link >
                    <DeleteOutline
                        className={ style.delete }
                        onClick = { () => onDelete( params.row.id ) }
                    />
                </>
            )
        }

    ];

    return (
        <main className={ style.userList }>
            <DataGrid
                className={ style.table }
                rows={ data }
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </main>
    )
}
