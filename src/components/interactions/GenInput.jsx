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

  const isDateInput = props.inputType === "date";

  return (
    <div className="flex flex-col gap-1">
      <label className="font-mont max-w-[300px]" htmlFor={props.labelFor}>{props.labelContent}</label>
      <input
        id={props.inputId}
        onChange={props.onChange}
        placeholder={props.inputPlaceholder}
        type={props.inputType}
        min={isDateInput ? new Date().toISOString().split('T')[0] : undefined}
        className={` ${inputStyle()}`}
      />
    </div>
  )
}
