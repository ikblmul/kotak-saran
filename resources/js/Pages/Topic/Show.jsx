import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";
import { CopyAllOutlined } from "@mui/icons-material";
import { Button, Card, Chip, Typography } from "@mui/joy";
import { Popover } from "@mui/material";
import moment from "moment";
import React from "react";

const Show = (props) => {
    const topic = props.topic;

    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <Typography fontWeight="lg" level="h5">
                        Detail Topic
                    </Typography>
                }
            >
                <div className="container mx-auto">
                    <Card className="mt-6">
                        <Typography level="body3" fontWeight="lg">
                            Title
                        </Typography>
                        <Typography level="body1">{topic.title}</Typography>
                        <div className="my-3"></div>
                        <Typography level="body3" fontWeight="lg">
                            Description
                        </Typography>
                        <Typography level="body1">
                            {topic.description}
                        </Typography>
                        <div className="my-3"></div>
                        <Typography level="body3" fontWeight="lg">
                            Settings
                        </Typography>
                        <div className="flex flex-wrap gap-4 pt-3">
                            {topic.publish_advice ? (
                                <EmojiDescription
                                    title="Advice Publish"
                                    color="warning"
                                    emoji={"🗣️"}
                                />
                            ) : (
                                <EmojiDescription
                                    title="Advice Not Publish"
                                    emoji={"🔒"}
                                />
                            )}

                            {topic.publish ? (
                                <EmojiDescription
                                    title="Topic Publish"
                                    color="warning"
                                    emoji={"🔓"}
                                />
                            ) : (
                                <EmojiDescription
                                    title="Topic Not Publish"
                                    emoji={"🔒"}
                                />
                            )}

                            {topic.meta.only_auth ? (
                                <EmojiDescription
                                    title="Only Login User"
                                    emoji={"💬"}
                                />
                            ) : (
                                <EmojiDescription
                                    title="All User"
                                    color="warning"
                                    emoji={"💬"}
                                />
                            )}

                            {topic.meta.same_user &&
                                (topic.meta.same_user ? (
                                    <EmojiDescription
                                        title="Same User Can Give Multi Advice"
                                        emoji={"👤"}
                                    />
                                ) : (
                                    <EmojiDescription
                                        title="One User Only One Advice"
                                        color="warning"
                                        emoji={"👤"}
                                    />
                                ))}

                            {topic.meta.make_anonymous ? (
                                <EmojiDescription
                                    title="User Is Anonymous"
                                    emoji={"🥸"}
                                />
                            ) : (
                                <EmojiDescription
                                    title="Name Advicer In Publish"
                                    color="warning"
                                    emoji={"🥸"}
                                />
                            )}
                        </div>
                        <div className="my-2"></div>
                        <Typography level="body3" fontWeight="lg">
                            Status
                        </Typography>
                        <div className="flex mt-3">
                            {topic.close_at ? (
                                <EmojiDescription
                                    emoji="X"
                                    title={
                                        "Close " +
                                        moment(topic.close_at).fromNow()
                                    }
                                    color="danger"
                                />
                            ) : (
                                <EmojiDescription
                                    emoji="✔️"
                                    title="Open"
                                    color="success"
                                />
                            )}
                        </div>

                        <div className="my-2"></div>
                        {!topic.close_at && (
                            <>
                                <Typography level="body3" fontWeight="lg">
                                    Link Topic
                                </Typography>
                                <div className="flex mt-3 mb-7">
                                    <Chip
                                        variant="soft"
                                        color={"neutral"}
                                        size="md"
                                        className="mb-3"
                                        sx={{
                                            "--Chip-radius": "8px",
                                        }}
                                        startDecorator={<CopyAllOutlined />}
                                        onClick={() => {
                                            navigator.clipboard
                                                .writeText(
                                                    route("advice.show", {
                                                        id: topic.id,
                                                    })
                                                )
                                                .then(() => {
                                                    alert("link copied");
                                                })
                                                .catch(console.log);
                                        }}
                                    >
                                        {route("advice.show", {
                                            id: topic.id,
                                        })}
                                    </Chip>
                                </div>
                            </>
                        )}

                        {!topic.close_at && (
                            <>
                                <Typography level="body3" fontWeight="lg">
                                    Total Advices
                                </Typography>
                                <span className="mt-2 text-sm">
                                    <b>{props.advices}</b> Record
                                </span>
                            </>
                        )}

                        <div className="flex justify-end">
                            {!topic.close_at && (
                                <Button
                                    component={Link}
                                    className="w-32 ml-auto"
                                    href={route("advice.status", topic.id)}
                                    method="put"
                                    color="danger"
                                >
                                    Close Topic
                                </Button>
                            )}
                        </div>
                    </Card>

                    {topic.close_at && (
                        <Card className="mt-6">
                            <Typography level="h6" fontWeight="lg">
                                List Advices
                            </Typography>
                            <div className="my-1"></div>

                            {props.advices.map((adv, index) => (
                                <Card
                                    variant="outlined"
                                    className="mt-5"
                                    style={{
                                        paddingTop: "0.7em",
                                        paddingBottom: "0.7em",
                                    }}
                                >
                                    <div className="flex items-center">
                                        <span className="mr-7 text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <div className="mb-2">
                                                <Typography
                                                    level="body2"
                                                    fontWeight={"700"}
                                                    color={"neutral"}
                                                >
                                                    {adv.name_author}
                                                </Typography>
                                            </div>

                                            <div className="whitespace-pre-wrap">
                                                {adv.content}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </Card>
                    )}
                </div>
            </Authenticated>
        </>
    );
};

const EmojiDescription = (props) => {
    return (
        <Chip
            variant="soft"
            color={props.color || "primary"}
            size="md"
            className="mb-3"
            sx={{ pointerEvents: "none" }}
            startDecorator={props.emoji}
        >
            {props.title}
        </Chip>
    );
};
export default Show;
