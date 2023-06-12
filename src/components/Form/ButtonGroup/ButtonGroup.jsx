import Button from '@/components/Button/Button'
import React from 'react'

const ButtonGroup = ({activePage, setActivePage, className, formInfo, handleClick, handleClickReverse}) => {

  return (
    <div className={className}>
     {activePage > 0 && ( <Button handleClickReverse={handleClickReverse} formInfo={formInfo} setActivePage={setActivePage} text={"Go Back"} style={'back'} clickType={"reverse"}/>)}
      <Button handleClick={handleClick} formInfo={formInfo} setActivePage={setActivePage} text={activePage === 3 ? "Confirm" : "Next Steps"} style={activePage === 3 && "submit"}/></div>
  )
}

export default ButtonGroup