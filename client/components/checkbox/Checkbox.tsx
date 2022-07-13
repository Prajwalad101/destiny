interface CheckboxProps {
  children: React.ReactNode;
}

function Checkbox({ children }: CheckboxProps) {
  return (
    <div>
      <input
        className="inp-cbx"
        id="cbx"
        type="checkbox"
        style={{ display: 'none' }}
      />
      <label className="cbx" htmlFor="cbx">
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{children}</span>
      </label>
    </div>
  );
}

export default Checkbox;
