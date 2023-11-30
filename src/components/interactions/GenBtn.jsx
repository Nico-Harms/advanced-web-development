export default function GenBtn(props) {

    function btnType() {
        if (props.btnType === "primaryBtn") {
            return "bg-prime-orange text-off-white border-prime-orange border-2 py-1 px-5 text-sm rounded-full hover:bg-off-white hover:text-prime-orange md:text-base";
        } else if (props.btnType === "secondaryBtn") {
            return "bg-white border-off-black border-[1px] text-off-black font-bebas rounded-md py-1.5 px-9  hover:bg-off-black hover:text-off-white";
        } else if (props.btnType === "tertiaryBtn") {
            return "bg-prime-orange font-mont text-xs text-off-white border-prime-orange border-2 py-1 px-2 rounded-full hover:bg-off-white hover:text-prime-orange";
        }else if (props.btnType === "cancelBtn") {
            return "bg-cancel-red font-mont text-xs text-off-white border-cancel-red border-2 px-4 py-2 rounded-[10px] h-[76px] hover:bg-off-white hover:text-cancel-red lg:h-auto";
        }
    }

    return (
        <button className={` flex justify-center items-center ${btnType()}`} onClick={props.click}>
            {props.content}
        </button>
    );
}
