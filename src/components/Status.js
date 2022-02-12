import React from 'react'

const Status = ({ status }) => {
    let check = (status) => {
        if (status === true) {
            // console.log("I'm dying")
            return 'red'
        }
        else return 'green'
    }

    return (
      <div style={{
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        margin: 'auto',
        marginTop: '1rem',
        marginBottom: '2rem',
        backgroundColor: `${check(status)}`
      }}>
      </div>
  )
}
export default Status