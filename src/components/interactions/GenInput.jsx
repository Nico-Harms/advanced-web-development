export default function GenInput(props) {

  function inputStyle() {
    if (props.inputStyle === "primaryInput") {
      return "border-[1px] border-off-black py-1 px-1 rounded-sm w-[300px] lg:w-[500px]";
    } else if (props.inputStyle === "secondaryInput") {
      return "border-[1px] border-prime-orange py-1 px-1";
    } else if (props.inputStyle === "tertiaryInput") {
      return "border-[1px] border-off-black py-1 px-1 rounded-xl w-[100%]";
    }
  }
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mont max-w-[300px]" htmlFor={props.labelFor}>{props.labelContent}</label>
      <input id={props.inputId} placeholder={props.inputPlaceholder} type={props.inputType} className={` ${inputStyle()}`} />
    </div>
  )
}