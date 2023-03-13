interface Props {
  y: string;
  x: string;
}

export const Spacer = ({ y, x }: Props) => {
  return <div style={{ height: y, width: x }} />;
};
