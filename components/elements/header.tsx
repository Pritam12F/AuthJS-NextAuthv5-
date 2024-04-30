interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return <span className="text-3xl flex justify-center">{label}</span>;
};
