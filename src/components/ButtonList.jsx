import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Socceer",
    "Web Series",
    "Podcasts",
  ];
  return (
    <div className="flex">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
