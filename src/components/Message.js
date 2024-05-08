import moment from "moment";
import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Message = ({ sender, message, time }) => {
	const [user] = useAuthState(auth);
	return (
		<>
			<div
				className={`overflow-hidden relative w-fit min-w-[90px] p-1 rounded-lg mt-5 ${
					sender === user?.displayName
						? "rounded-tr-3 bg-stone-400 ml-auto"
						: "rounded-tl-3 bg-gray-400"
				} flex flex-col`}
			>
				<p className="text-sm font-mono font-semibold">
					{sender !== user?.displayName ? sender : ""}
				</p>
				<p className="px-1 text-xl">{message}</p>
				<p className="text-xs text-right font-bold text-slate-800">
					{moment(time).fromNow()}
				</p>
			</div>
		</>
	);
};
