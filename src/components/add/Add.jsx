import "./add.scss"

import {
    useQueryClient,
    useMutation
} from '@tanstack/react-query'


const Add = (props) => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => {
            return fetch(`https://simple-back.onrender.com/api/${props.slug}s`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 111,
                    img: "",
                    lastName: "Hello",
                    firstName: "test",
                    email: "test@test.com",
                    phone: "123 4568 7895",
                    createdAt: "01.02.2021",
                    verified: true,
                }),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`all${props.slug}`]);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate();
        props.setOpen(false);
    }

    return (
        <div className='add'>
            <div className='modal'>
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img" && item.field !== "actions")
                        .map((column, index) => {
                            return (
                                <div className='item' key={index}>
                                    <label>{column.headerName}</label>
                                    <input type={column.type} placeholder={column.field} />
                                </div>

                            );
                        })}
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add