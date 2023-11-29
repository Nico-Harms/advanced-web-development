export default function GenBtn(props) {

    function btnType() {
        if (props.btnType === "primaryBtn") {
            return "bg-prime-orange border-prime-orange border-2 py-2.5 px-10 rounded-full hover:bg-off-white hover:text-prime-orange";
        } else if (props.btnType === "secondaryBtn") {
            return "bg-white border-off-black text-off-black font-bebas rounded-md border-[1px] py-1.5 px-9  hover:bg-off-black hover:text-off-white border-off-white";
        }
    }

    return (
        <button className={`text-off-white flex justify-center items-center ${btnType()}`} onClick={props.click}>
            {props.content}
        </button>
    );
}
