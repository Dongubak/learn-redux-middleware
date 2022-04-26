import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";


function SampleContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(1));
        dispatch(getUsers(1));
    });

    const { post, users } = useSelector(state => state.sample);
    console.log(post, users);
    const { GET_POST: loadingPost, GET_USERS: loadingUsers } = useSelector( state => state.sample.loading )

    return(
        <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers}></Sample>
    )
}


export default SampleContainer;