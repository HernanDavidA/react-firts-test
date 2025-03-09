import { ReactNode } from "react";
import styles from './Button.module.css'

type Props = {
    children: ReactNode
    isLoading? : boolean
    onClick: () => void
}

console.log(styles)

function Button({children, isLoading, onClick}: Props) {

    const className = [`btn btn-${isLoading ? 'secondary' : 'primary' }`, styles.button,  styles.padded].join(" ")

    return (
      <button disabled={isLoading} 
      onClick={onClick}
       type="button" 
       className={ className}> { isLoading ? 'Cargando...' : children}</button>
    //   className={[styles.button, styles.padded].join(" ")}>{children}</button>
    )
  
}

export default Button