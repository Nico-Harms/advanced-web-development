export default function GenBtn(props) {

    function btnType() {
        if (props.btnType === "primaryBtn") {
            return "bg-prime-orange border-prime-orange border-2 hover:bg-off-white hover:text-prime-orange";
        } else if (props.btnType === "secondaryBtn") {
            return "bg-gray-500 hover:bg-gray-400";
        }
    }

    return (
        <button className={`text-off-white rounded-full flex justify-center items-center py-2.5 px-5 ${btnType()}`} onClick={props.click}>
            {props.content}
        </button>
    );
}
