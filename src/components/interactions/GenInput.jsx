export default function GenInput(props) {

  function inputStyle() {
    if (props.inputStyle === "primaryInput") {
      return "border-[1px] border-off-black py-1 px-1";
    } else if (props.inputStyle === "secondaryInput") {
      return "border-[1px] border-prime-orange py-1 px-1";
    }
  }
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.labelFor}>{props.labelContent}</label>
      <input placeholder={props.placeholder} type={props.inputType} className={` ${inputStyle()}`} />
    </div>
  )
}