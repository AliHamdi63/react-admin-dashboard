import "./user.scss"
import { Single } from '../../components'
import { singleUser } from "../../data"

const User = () => {

    // Fetch data and send to single component

    return (
        <div className='user'>
            <Single {...singleUser} />

        </div>
    )
}

export default User