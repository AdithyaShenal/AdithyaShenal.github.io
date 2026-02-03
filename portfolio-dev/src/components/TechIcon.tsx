interface Props {
  iconName: string;
  techName: string;
}

const TechIcon = ({ iconName, techName }: Props) => {
  return (
    <span className="inline-flex items-center gap-2 bg-base-100 py-2 px-3 rounded-full justify-center">
      <img
        height="20"
        width="20"
        src={`https://cdn.simpleicons.org/${iconName}`}
        alt={iconName}
      />
      <span className="text-white text-sm font-medium">{techName}</span>
    </span>
  );
};

export default TechIcon;
