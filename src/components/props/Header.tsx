// Type interface
// can also be -> interface HeaderType
type HeaderType = {
    text: string,
    extraText?: string,
    defaultText?: string
}

function Header({ text, extraText, defaultText = "This is a default text" }: HeaderType) {
  return (
    <>
    <h1>{text}</h1>
    <p>{extraText}</p>
    <p>{defaultText}</p>
    </>
  );
}

export default Header;
