export interface IButton {
  children: string;
}

function Button({ children }: IButton) {
  return <div>{children}</div>;
}

export default Button;
