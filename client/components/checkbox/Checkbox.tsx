interface CheckboxProps {
  filterName: string;
}

function Checkbox({ filterName }: CheckboxProps) {
  return (
    <div>
      <input
        className="inp-cbx"
        id={filterName}
        type="checkbox"
        style={{ display: 'none' }}
      />
      <label className="cbx" htmlFor={filterName}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className="capitalize">{filterName}</span>
      </label>
    </div>
  );
}

export default Checkbox;
