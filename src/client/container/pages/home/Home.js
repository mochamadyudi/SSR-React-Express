import React,{useState} from 'react'
import {Helmet} from "react-helmet";

const   Home = (props)=> {
  const [data, setData] = useState({data:[
      {nama_lengkap:"Mochamad Yudi"},
      {nama_lengkap:"John Doe"},
    ]})
  const [formdata,setFormdata]  = useState({
    nama_lengkap:'TTESTINF'
  })

  const handleChange = (e)=> setFormdata({formdata, [e.target.name]: e.target.value})
  const handleSubmit = (e)=> {
    e.preventDefault()
    // setData(setData)
  }

  return(
    <React.Fragment>
      <div>
        <h1>SEARCH DATA</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nama_lengkap" onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      {Object.keys(data).length > 0 && data.data.map((item,index)=> (
        <p key={index}> {item.nama_lengkap}</p>
      ))}
    </React.Fragment>
  )
}
Home.propTypes = {
  // children: PropTypes.element.isRequired
}
export default Home