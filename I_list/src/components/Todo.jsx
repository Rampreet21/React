import { useState } from 'react'

const Todo = () => {
  const [name, setName] = useState({
    name: "",
    address: ""

  })

  const handlenamechange = (e) => {

    setName({ ...name, [e.target.name]: e.target.value })
  }

  const [data, setData] = useState([
    { name: "Harpreet", address: "Bathinda" },
    { name: "Kamal", address: "Bathinda" }
  ]);


  function Adddata(e) {
    e.preventDefault();
    setData([...data, name]);
    console.log(name);
  }
  function Delete(e) {
    data.splice(e.target.value, 1);
    setData([...data]);
  }



  return (
    <div className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "20px",
        margin: " 50px auto"
      }}>
      <h2>Personal Info</h2>
      <form onSubmit={Adddata}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input name='name' value={name.name} onChange={handlenamechange} className="form-control" required/>
        </div>
        <div> <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
          <input name='address' value={name.address} onChange={handlenamechange} type="text" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary" style={{ height: "", margin: " 20px 0" }}>Submit</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td style={{ minWidth: "180px" }}><button onClick={Delete} className='btn btn-danger'>Delete</button></td>
                </tr>
                
              )
            })
          }
        </tbody>
      </table>


    </div>
  )
}

export default Todo