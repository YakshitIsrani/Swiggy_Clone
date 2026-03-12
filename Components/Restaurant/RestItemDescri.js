import { useRef, useState ,useEffect } from "react";

export default function RestItemDescri({ desc }) {
    const [expanded, setExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (el && el.scrollHeight > el.clientHeight) {
            setShowMore(true);
        }
    }, []);

    return (
        <div className="text-[#02060c99] text-[16px]">
            <button
                className="cursor-pointer flex w-fit"
                onClick={() => setExpanded(!expanded)}
            >
                <div
                    className={
                        (!expanded ? "line-clamp-2" : "") +
                        " font-medium text-left wrap-anywhere"
                    } ref={ref}
                >
                    {desc}
                </div>
                {!expanded && showMore && <span className="font-bold flex items-end">more</span>}
            </button>
        </div>
    );
}
