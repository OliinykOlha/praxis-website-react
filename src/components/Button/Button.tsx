import { MainButton } from "./styles";
import type { ButtonProps } from "./types";


function Button({ name, onClick, disabled = false, type = 'submit', isAbsolute= false }: ButtonProps) {
  return (
    <MainButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      isAbsolute={isAbsolute}
      
    >
      {name}
    </MainButton>
  )
}

export default Button;