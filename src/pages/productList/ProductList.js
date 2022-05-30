import { useState } from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
//styles
import style from './productList.module.css'
//dummy data
import { productRows} from '../../dummyData';

export const ProductList = () => {
    const [data, setData ] = useState(productRows)

    const onDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        // { field: 'username', headerName: 'Username', width: 130 },
            { field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
                return (
                    <div className={ style.productImage }>
                        <img src={ params.row.img } alt={ params.row.name } />
                        <span>{params.row.name}</span>
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 250 },
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'price', headerName: 'Price', width: 150,},
        {
            field: "action",
            headerName: "Action",
            width: 120,
            renderCell: (params) => (
                <>
                    <Link to={ `/product/${ params.row.id}` }>
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
        <main className={ style.products }>
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
