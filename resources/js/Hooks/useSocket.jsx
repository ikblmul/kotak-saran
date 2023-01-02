import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";

const listen = (callBack, channel, event, privateChannel = true) => {
    // private
    if (privateChannel)
        window.Echo.private(channel).listen(event, (payload) => {
            callBack(payload);
        });
    else
        window.Echo.channel(channel).listen(event, (payload) => {
            callBack(payload);
        });

    return function cleanUp() {
        window.Echo.leaveChannel(`private-${channel}`);
    };
};

export const useSocket = (
    { channel, event, id },
    callback,
    privateChannel = true
) => {
    console.log("changes");
    const auth = id || usePage().props.auth.user.id;
    useEffect(() => {
        return listen(callback, `${channel}.${auth}`, event, privateChannel);
    });
};
