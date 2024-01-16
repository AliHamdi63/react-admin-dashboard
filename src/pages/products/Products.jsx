import { useState } from "react";
import "./products.scss"
import { Add, DataTable } from "../../components";
import { products } from "../../data";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img',
        headerName: 'Image',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img} />
        }
    },
    {
        field: 'title',
        headerName: 'Title',
        type: 'string',
        width: 250,
        // editable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        type: 'string',
        width: 150,
        // editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'string',
        width: 200,
        // editable: true,
    },
    {
        field: 'producer',
        headerName: 'Producer',
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
        field: 'inStock',
        headerName: 'In Stock',
        width: 150,
        type: "boolean",
    },
];


const Products = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products