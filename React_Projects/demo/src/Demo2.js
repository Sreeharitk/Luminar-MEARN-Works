import React, { useState } from 'react'

const Demo2 = () => {
  const [person,setPerson] = useState([{name:"Hari",age:23},{name:"Jazim",age:22},{name:"Ansif",age:26},{name:"Naveen",age:16}])
  return (
    <div>
        <h1>Demo2 Component inside Demo1 component</h1>
        <table class="table container w-50 border">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Eligibility</th>
              <th scope="col">Warning</th>
            </tr>
          </thead>
          <tbody>
            {
              person.map((i,index)=>
              <tr>
                <th scope="row">{index+1}</th>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.age>=18?"Eligible":"Not Eligible"}</td>
                <td>{i.age<18 && <span class="text-danger">Check your age</span>}</td>
              </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default Demo2