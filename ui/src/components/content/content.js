import { useCallback, useContext, useEffect, useState } from 'react';
import '../global.css';
// import { useHttp } from '../hooks/http.hooks';
import api from "../../Api";

function Content() {

    // const {token} = useContext(AuthContext)
    // const {form, setForm} = useState()
    // const {loading, error, request} = useHttp()
    const [data, setData] = useState();

    // const getTodos = useCallback( async () => {
    // try {
    // const data = await request('/', 'GET', {...form})
    // console.log(data, "data")
    // }catch (e) {}
    // }, [token, request])

    useEffect(() => {
        // getTodos().then(res => {
        //     console.log(res);
        // }).catch(e => {
        api.get('/data').then(res => {
            setData(res);
        })
    }, [])

    return (
        <div className="contentContainer">
            <h2 className="todosPage">Todos page</h2>
            <ul>
                {!!data ? data.map((users) => {
                    return (
                        <li className="todo" key={users._id}>
                            <form>
                                <label className="userInfo">
                                    <input type="checkbox" name="completed" />
                                    <span id="userInfo">
                                        Program Name: <span>{users.title}</span><br />
                                        User Name: <span>{users.user_name}</span><br />
                                        Age: <span>{users.user_age}</span><br />
                                        Speciality: <span>{users.speciality}</span><br />
                                    </span>
                                    <input type="hidden" name="id" />
                                </label>
                            </form>
                        </li>
                    )
                }) : ''}
            </ul>
        </div>
    );
}

export default Content;