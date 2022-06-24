const UL = ({ className, children, ...props }) => {
  return (
    <ul {...props}>
      {!!children.length && children.map((content) => <li>{content}</li>)}
    </ul>
  );
};

export default UL;
