export default function GenTextArea(props) {

    function textareaStyle() {
        if (props.textareaStyle === "primaryTextarea") {
            return "border-[1px] border-off-black py-1 px-1 rounded-sm h-[120px] w-[300px] lg:w-[500px]";
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