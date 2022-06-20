interface ButtonProps {
  label: string;
  variant: string;
}

function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}

export default Button;
