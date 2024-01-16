import { Single } from "../../components/"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

    // Fetch data and send to single component

    return (
        <div className='product'>
            <Single {...singleProduct} />
        </div>
    )
}

export default Product