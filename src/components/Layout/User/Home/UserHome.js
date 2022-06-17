import { Fragment } from "react";
import HomeDashboard from "./HomeDashboard/HomeDashboard";
import UserDetail from "./UserDetail/UserDetail";

const UserHome = props => { 
    return (
        <Fragment>
            <UserDetail userId={props.userId} />
            <HomeDashboard userId={props.userId} />
        </Fragment>
    )
}
export default UserHome