import { MainButton } from "./styles";
import type { ButtonProps } from "./types";


function Button({ name, onClick, disabled = false, type = 'submit' }: ButtonProps) {
  return (
    <MainButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      
    >
      {name}
    </MainButton>
  )
}

export default Button;