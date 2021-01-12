import React,{useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
const   Home = (props)=> {
  const [data, setData] = useState({})
  const [formdata,setFormdata]  = useState({
    nama_lengkap:''
  })

  const handleChange = (e)=> setFormdata({formdata, [e.target.name]: e.target.value})
  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post('http://localhost:4000/advanced',{
      nama_lengkap:formdata.nama_lengkap,
    },{headers:{
      "Content-Types":"application/json"
      }})
      .then((res)=> {
        setData(res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  return(
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nama_lengkap" onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      {Object.keys(data).length > 0 && data.data.map((item,index)=> (
        <p key={index}> {item.nama_lengkap}</p>
      ))}
    </div>
  )
}
Home.propTypes = {
  // children: PropTypes.element.isRequired
}
export default Home