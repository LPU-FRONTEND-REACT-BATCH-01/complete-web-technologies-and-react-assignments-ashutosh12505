// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//         <h1>This is a card component. Passed: {props.passedData}</h1>
//     </div>
//   )
// }

// export default Card


// import React from 'react'
// const Card = (props) => {
//   return (
//     <div className='card'>
//         <h3>User ID: {props.passedData.id}</h3>
//         <h3>User Name: {props.passedData.name}</h3>
//         <h3>User City: {props.passedData.city}</h3>
//         <br />
//     </div>
//   )

// destructuring

    // let {passedData:{id, name, city}} = props
    // return (
    //     <div className='card'>
    //         <h3>User ID: {id}</h3>
    //         <h3>User Name: {name}</h3>
    //         <h3>User City: {city}</h3>
    //         <br />
    //     </div>
    // )
// }

// another way - destructuring while receiving
// const Card = ({passedData:{id, name="NameNotGiven", city="CityNotGiven"}}) => {
//         return (
//             <div className='card'>
//                 <h3>User ID: {id}</h3>
//                 <h3>User Name: {name}</h3>
//                 <h3>User City: {city}</h3>
//                 <br />
//             </div>
//     )
// }

// export default Card


import React from 'react'

const Card = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Card