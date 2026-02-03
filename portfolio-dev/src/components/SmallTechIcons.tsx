interface Props {
  iconName: string;
  techName: string;
}

const SmallTechIcons = ({ iconName, techName }: Props) => {
  return (
    <>
      <span className="inline-flex items-center gap-2 bg-base-100 py-2 px-3 rounded-full justify-center">
        <img
          height="14"
          width="14"
          src={`https://cdn.simpleicons.org/${iconName}`}
          alt={iconName}
        />
        <span className="text-white text-xs font-medium">{techName}</span>
      </span>
    </>
  );
};

export default SmallTechIcons;
