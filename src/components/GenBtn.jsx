export default function GenBtn(props) {

    function btnColor() {
        if (props.btnType === "primaryBtn") {
            return "bg-black hover:bg-gray-400";
        } else if (props.color === "secondaryBtn") {
            return "bg-gray-500 hover:bg-gray-400";
        }
    }

    return (
        <button className={`text-white rounded-full flex justify-center items-center py-2.5 px-5 ${btnColor()}`} onClick={props.click}>
            {props.content}
        </button>
    );
}
