import { useSocket } from "@/Hooks/useSocket";
import { useForm } from "@inertiajs/inertia-react";
import {
    Box,
    Button,
    Card,
    CssVarsProvider,
    FormLabel,
    Textarea,
    Typography,
} from "@mui/joy";
import { FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";

const Show = (props) => {
    const [topic, setTopic] = useState(props.topic.advice);
    const [advices, setAdvices] = useState(props.advices);
    const { data, setData, post } = useForm({
        content: "",
        topic_id: props.topic.id,
    });

    const saveAction = (e) => {
        e.preventDefault();

        post(route("advice.store"), {
            preserveScroll: false,
            preserveState: false,
        });
    };

    // useSocket(
    //     { channel: "advice.topic", event: "created", id: props.topic.id },
    //     function (e) {
    //         setTopic((t) => [e, ...t]);
    //     }
    // );

    // useSocket(
    //     { channel: "advice", event: "created", id: props.topic.id },
    //     function (e) {
    //         setAdvices((t) => [e, ...t]);
    //     }
    // );

    useEffect(() => {
        setTopic(props.topic.data);
    }, [props.advice]);

    return (
        <>
            <div className="max-h-screen min-h-screen h-full bg-gray-100 flex relative overflow-auto px-4 px-md-1">
                <div className=" container mx-auto">
                    back
                    <CssVarsProvider>
                        <Card variant="outlined" color="white" className="mt-6">
                            <Typography
                                level="body3"
                                fontWeight={"bold"}
                                textColor={"gray"}
                            >
                                Topik
                            </Typography>

                            <Typography level="h6" fontWeight={"md"}>
                                {props.topic.title}
                            </Typography>
                            <div className="mt-3">
                                <Typography level="body1">
                                    {props.topic.description}
                                </Typography>
                            </div>
                        </Card>

                        <div className=" w-full mt-5 bg-gray-100">
                            <div className="mx-auto container">
                                <AdviceBox
                                    change={data.content}
                                    onChange={(val) => setData("content", val)}
                                    saveAction={saveAction}
                                />
                            </div>
                        </div>

                        <div className="mt-7"></div>
                        <Typography level="h5" fontWeight={"lg"}>
                            Saran{" "}
                        </Typography>

                        {/* <div className="mb"></div> */}

                        <div className="h-3/6 w-full overflow-scroll mt-3 pb-3">
                            {props.topic.publish_advice ? (
                                advices.map((adv) => (
                                    <Card variant="outlined" className="mt-3">
                                        <div className="mb-2">
                                            <Typography
                                                level="body2"
                                                fontWeight={"700"}
                                                color={"neutral"}
                                            >
                                                {adv.user.profile.fullname}
                                            </Typography>
                                        </div>

                                        <div className="whitespace-pre-wrap">
                                            {adv.content}
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div className="flex text-center text-lg mt-12">
                                    <div className="shadow-sm px-7 py-5 rounded-full bg-red-500 text-red-100 font-bold block mx-auto">
                                        Saran Dan Informasi Pengguna Bersifat
                                        Private :)
                                    </div>
                                </div>
                            )}
                        </div>
                    </CssVarsProvider>
                </div>
            </div>
        </>
    );
};

const AdviceBox = ({ change, onChange, saveAction }) => (
    <FormControl className="w-full shadow-md">
        <Textarea
            placeholder="Tulis Saran Mu di sini..."
            minRows={2}
            maxRows={2}
            className="w-full"
            size="lg"
            variant="outline"
            color="primary"
            value={change}
            onChange={(e) => onChange(e.target.value)}
            endDecorator={
                <Box
                    sx={{
                        display: "flex",
                        gap: "var(--Textarea-paddingBlock)",
                        pt: "var(--Textarea-paddingBlock)",
                        borderTop: "1px solid",
                        borderColor: "divider",
                        flex: "auto",
                    }}
                >
                    <Button sx={{ ml: "auto" }} onClick={saveAction}>
                        Send
                    </Button>
                </Box>
            }
            sx={{
                width: "100%",
            }}
        />
    </FormControl>
);

export default Show;
