const Lencheck = (props) => {
  let validmsg = "this is short";
  if (props.userlen > 5) {
    validmsg = "this is long enough";
  }
  return <div>{validmsg}</div>;
};
export default Lencheck;
