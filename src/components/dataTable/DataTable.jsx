import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import "./dataTable.scss"
import { Link } from "react-router-dom";

import {
    useQueryClient,
    useMutation
} from '@tanstack/react-query'




const DataTable = (props) => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id) => {
            return fetch(`https://simple-back.onrender.com/api/${props.slug}/${id}`, {
                method: "DELETE",
            });
        },
        onsuccess: () => {
            queryClient.invalidateQueries([`all${props.slug}`]);
        }
    });
    const handleDelete = (id) => {

        mutation.mutate(id);
    };

    const actionColumn = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" />
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="dataTable">
            <DataGrid
                className="data-grid"
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
            />
        </div>
    )
}

export default DataTable