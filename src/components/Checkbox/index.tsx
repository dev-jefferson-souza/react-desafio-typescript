interface Props {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  backgroundColor?: string;
  borderColor?: string;
}

export function Checkbox({
  label,
  isChecked,
  onChange,
  backgroundColor = "#fff",
  borderColor = "#999",
}: Props) {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        style={{
          marginRight: "6px",
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        }}
      />
      {label}
    </label>
  );
}
