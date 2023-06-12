'use client'

import React, { useRef, useState }  from 'react'
import Styles from './Form.module.scss'
import Sidebar from './Sidebar/Sidebar'
import FormBody from './FormBody/FormBody'
import data from '@/data/data'

const Form = () => {
const [activePage, setActivePage] = useState(0);



  return (
    <form className={Styles.form}>
    <Sidebar activePage={activePage} data={data} setActivePage={setActivePage}/>
    <FormBody  activePage={activePage} data={data} setActivePage={setActivePage}/>
    </form>
  )
}

export default Form