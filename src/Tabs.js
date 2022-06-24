const UL = ({ className, children, ...props }) => {
  console.log();
  return (
    <ul>
      {!!children.length && children.map((content) => <li>{content}</li>)}
    </ul>
  );
};

export default UL;
