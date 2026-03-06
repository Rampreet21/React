import { useState } from 'react'

const ToDo = () => {

    const [data2, setData2] = useState({
        name: "",
        address: ""
    });

    const setValue = (e) => {
        setData2({ ...data2, [e.target.name]: e.target.value });
    }


    const [data, setData] = useState([
        { name: "Rampreet", address: "Lehra" },
        // { name: "Sonali", address: "Mohabbat" }
    ]);


    function AddData(e) {
        e.preventDefault();
        setData([
            ...data,
            data2
        ])
    }

    const Delete = (e) => {
        data.splice(e.target.id, 1);
        setData([...data]);
    }

    console.log(data);

    return (
        <div className='container con'>
            <h2 className='text-center'>Students</h2>
            <form onSubmit={AddData}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Enter Name</label>
                    <input name='name' onChange={setValue} type="text" className="form-control" value={data2.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Address</label>
                    <input name='address' onChange={setValue} type="text" className="form-control" value={data2.address} />
                </div>
                <button type="submit" className="btn btn-primary">Add Detail</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td><button id={index} onClick={Delete} className="btn btn-primary">Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>


        </div>
    )
}

export default ToDo