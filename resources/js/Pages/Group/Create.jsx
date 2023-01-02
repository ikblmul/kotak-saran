import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import {
    Box,
    Card,
    CardContent,
    FormHelperText,
    FormLabel,
    Input,
    Textarea,
    TextField,
    Typography,
    Switch,
    Button,
} from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";

const Create = (props) => {
    // INERTIA STATE
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        close_at: "",
        description: "",
        same_user: true,
        max_slow_mode: 0,
        only_auth: false,
        slow_mode: false,
        publish: true,
        publish_advice: true,
        auto_publish: false,
    });

    const saveAction = (e) => {
        e.preventDefault();

        post(route("topic.store"));
    };

    useEffect(() => {
        onHandleChange("same_user", true);
    }, [data.only_auth]);

    useEffect(() => {
        console.log(data.only_auth);
    }, [data.only_auth]);

    // use for future
    const onHandleChange = (name, value) => {
        setData(name, value);
    };

    const readBag = (message) => {
        return message
            ? {
                  error: true,
                  helperText: message,
              }
            : {};
    };

    props.

    //

    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <Typography fontWeight="lg" level="h5">
                        Tambah Topic
                    </Typography>
                }
            >
                <form
                    onSubmit={saveAction}
                    className="md:w-5/6 sm:w-full mx-auto mt-5"
                >
                    <Card>
                        <TextField
                            label="Judul"
                            id="title"
                            onChange={(event) =>
                                onHandleChange("title", event.target.value)
                            }
                            value={data.title}
                            // placeholder="Placeholder"
                            className="my-2"
                            required
                            {...readBag(errors.title)}
                        />

                        <FormControl>
                            <FormLabel required className="mt-3">
                                Deskripsi
                            </FormLabel>
                            <Textarea
                                minRows={3}
                                maxRows={3}
                                id="description"
                                onChange={(event) =>
                                    onHandleChange(
                                        "description",
                                        event.target.value
                                    )
                                }
                                value={data.description}
                                // placeholder="Placeholder"
                                className="my-2"
                                required
                                {...readBag(errors.description)}
                            />
                        </FormControl>
                        <Box className="flex justify-end mt-3">
                            <Button
                                variant="soft"
                                type="submit"
                                className="w-20 ml-auto"
                            >
                                Save
                            </Button>
                        </Box>
                    </Card>
                </form>

                <div className="md:w-5/6 sm:w-full mx-auto mt-12">
                    <Card>
                        <Typography fontWeight="lg" level="h5">
                            Publish
                        </Typography>

                        <Box className="mt-5">
                            {/* Box Status */}
                            <FormControl
                                orientation="horizontal"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <FormLabel>Publish</FormLabel>
                                    <FormHelperText sx={{ mt: 0 }}>
                                        Publikasikan kotak saran ini agar bisa
                                        dilihat semua orang tanpa login
                                    </FormHelperText>
                                </Box>
                                <Switch
                                    checked={data.publish}
                                    id="publish"
                                    onChange={(event) =>
                                        onHandleChange(
                                            "publish",
                                            event.target.checked
                                        )
                                    }
                                    color={data.publish ? "primary" : "neutral"}
                                    // color={data.publish}
                                    variant="soft"
                                    endDecorator={data.publish ? "On" : "Off"}
                                    componentsProps={{
                                        endDecorator: {
                                            sx: {
                                                minWidth: 24,
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl
                                className="mt-7"
                                orientation="horizontal"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <FormLabel>Publish Advice</FormLabel>
                                    <FormHelperText sx={{ mt: 0 }}>
                                        Publikasikan saran ke orang orang yang
                                        melihat topik ini
                                    </FormHelperText>
                                </Box>
                                <Switch
                                    checked={data.pusblish_advice}
                                    id="pusblish_advice"
                                    onChange={(event) =>
                                        onHandleChange(
                                            "pusblish_advice",
                                            event.target.checked
                                        )
                                    }
                                    color={
                                        data.pusblish_advice
                                            ? "primary"
                                            : "neutral"
                                    }
                                    // color={data.pusblish_advice}
                                    variant="soft"
                                    endDecorator={
                                        data.pusblish_advice ? "On" : "Off"
                                    }
                                    componentsProps={{
                                        endDecorator: {
                                            sx: {
                                                minWidth: 24,
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </Card>
                </div>

                {/* SETTINGS */}
                <div className="md:w-5/6 sm:w-full mx-auto mt-12">
                    <Card>
                        <Typography fontWeight="lg" level="h5">
                            Settings
                        </Typography>

                        <Box className="mt-5">
                            {/* Box Status */}
                            <FormControl
                                orientation="horizontal"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <FormLabel>Only Auth</FormLabel>
                                    <FormHelperText sx={{ mt: 0 }}>
                                        hanya user yang mempunyai akun yang bisa
                                        memberi saran
                                    </FormHelperText>
                                </Box>
                                <Switch
                                    checked={data.only_auth}
                                    id="only_auth"
                                    onChange={(event) =>
                                        onHandleChange(
                                            "only_auth",
                                            event.target.checked
                                        )
                                    }
                                    color={
                                        data.only_auth ? "primary" : "neutral"
                                    }
                                    // color={data.only_auth}
                                    variant="soft"
                                    endDecorator={data.only_auth ? "On" : "Off"}
                                    componentsProps={{
                                        endDecorator: {
                                            sx: {
                                                minWidth: 24,
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl
                                className="mt-7"
                                orientation="horizontal"
                                disabled={!data.only_auth}
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <FormLabel>Allow Same User</FormLabel>
                                    <FormHelperText sx={{ mt: 0 }}>
                                        Memberi batasan saran per user
                                    </FormHelperText>
                                </Box>
                                <Switch
                                    checked={data.same_user}
                                    id="same_user"
                                    onChange={(event) =>
                                        onHandleChange(
                                            "same_user",
                                            event.target.checked
                                        )
                                    }
                                    color={
                                        data.same_user ? "primary" : "neutral"
                                    }
                                    // color={data.same_user}
                                    variant="soft"
                                    endDecorator={data.same_user ? "On" : "Off"}
                                    componentsProps={{
                                        endDecorator: {
                                            sx: {
                                                minWidth: 24,
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                            <FormControl
                                className="mt-7"
                                orientation="horizontal"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box>
                                    <FormLabel>Slow Mode</FormLabel>
                                    <FormHelperText sx={{ mt: 0 }}>
                                        memberikan tenggang waktu, untuk memberi
                                        saran satu saran dan lain nya
                                    </FormHelperText>
                                </Box>
                                <Switch
                                    checked={data.slow_mode}
                                    id="slow_mode"
                                    onChange={(event) =>
                                        onHandleChange(
                                            "slow_mode",
                                            event.target.checked
                                        )
                                    }
                                    color={
                                        data.slow_mode ? "primary" : "neutral"
                                    }
                                    // color={data.slow_mode}
                                    variant="soft"
                                    endDecorator={
                                        typeof data.slow_mode !== null
                                            ? "On"
                                            : "Off"
                                    }
                                    componentsProps={{
                                        endDecorator: {
                                            sx: {
                                                minWidth: 24,
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Box>

                        {data.slow_mode && (
                            <Card
                                variant="soft"
                                color="primary"
                                size="sm"
                                className="mt-5"
                            >
                                <FormControl
                                    orientation="horizontal"
                                    sx={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <FormLabel>
                                        Maksimal Waktu (Dalam Jam)
                                    </FormLabel>
                                    <TextField
                                        placeholder="Type in here…"
                                        variant="soft"
                                        color="neutral"
                                        type={"number"}
                                        className="w-16"
                                        // error
                                        id="max_slow_mode"
                                        onChange={(event) =>
                                            onHandleChange(
                                                "max_slow_mode",
                                                event.target.value
                                            )
                                        }
                                        value={data.max_slow_mode}
                                        // placeholder="Placeholder"
                                    />
                                </FormControl>
                            </Card>
                        )}
                    </Card>
                </div>
            </Authenticated>
        </>
    );
};

export default Create;
