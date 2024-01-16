import "./add.scss"

const Add = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // add new item
        console.log(e.target.value);
    }

    return (
        <div className='add'>
            <div className='modal'>
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img" && item.field !== "actions")
                        .map((column) => {
                            return (
                                <div className='item' key={column.id}>
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