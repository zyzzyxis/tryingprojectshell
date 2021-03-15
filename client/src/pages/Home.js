import React, {useEffect, useState} from 'react'
import axios from 'axios'

// functional component 
const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=> {
    try{
      let res = await axios.get(`/api/api_test`)
      setTestData(res.data)
      setLoading(false)
    } catch(err) {
      alert('err')
      setLoading(false)
    }
  }

  if (loading) return <p>Loading</p>

  return(
    <div>
      <h1>Home</h1>
      {testData && testData.dataHere}
    </div>
  )
}

//class component
//home is inheriting from react.component, so home is now a react.component

// class Home extends React.Component {

//     render() {
//         return(
//           <div>
//             <h1>Home</h1>
//           </div>
//         )
//     }

// }

export default Home;