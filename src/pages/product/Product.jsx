import { Single } from "../../components/"
import { singleProduct } from "../../data"
import "./product.scss"

// import { useParams } from 'react-router-dom'
// import {
//     useQuery,
// } from '@tanstack/react-query'


const Product = () => {

    // Fetch data and send to single component
    // let { id } = useParams();

    // const { isLoading, data } = useQuery({
    //     queryKey: ['allUsers'],
    //     queryFn: () =>
    //         fetch(`https://simple-back.onrender.com/api/products/${id}`).then((res) =>
    //             res.json(),
    //         ),
    // })

    return (
        <div className='product'>
            <Single {...singleProduct} />
            {/* {isLoading ? "Loading..." : <Single {...singleProduct} />} */}
        </div>
    )
}

export default Product