export default function GenTextArea(props) {

    function textareaStyle() {
        if (props.textareaStyle === "primaryTextarea") {
            return "border-[1px] border-off-black py-1 px-1 rounded-sm w-[300px]";
        } else if (props.textareaStyle === "secondaryTextarea") {
            return "border-[1px] border-prime-orange py-1 px-1";
        }
    }

  return (

    <div className="flex flex-col gap-1">
        <label className="font-mont" htmlFor={props.labelFor}>{props.labelContent}</label>
        <textarea className={`${textareaStyle()}`} placeholder={props.textareaPlaceholder} name={props.name} id={props.textareaId} cols={props.cols} rows={props.rows}></textarea>
    </div>
  )
}