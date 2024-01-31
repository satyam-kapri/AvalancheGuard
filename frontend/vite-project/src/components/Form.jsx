import { Button } from '@mui/material'
import React from 'react'
import '../css/form.css'
function Form() {
  return (
    <div className='form'>
      <span>Need Help?</span>
      <textarea className='textarea'rows={10} placeholder='Describe your problem...'></textarea>
      <Button variant='contained' sx={{width:'100px'}}>Help</Button>
    </div>
  )
}

export default Form
