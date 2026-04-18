import style from "./Button.module.css"
import clsx from 'clsx';
function Button({text, primary, info, error}){
  return(
    <button className={clsx(style.btn, {
      [style.primary]:primary, 
      [style.error]:error,
      [style.info]:info
    })} >{text}</button>
  )
}

export default Button