import { usePage } from "@inertiajs/inertia-react";
import { Alert, IconButton, Typography } from "@mui/joy";
import { X } from "heroicons-react";
import React, { useState } from "react";

const FlashAlert = ({ setOpen, color, title, message }) => {
    return (
        <Alert
            key={title}
            sx={{ alignItems: "flex-start" }}
            variant="soft"
            color={color}
            endDecorator={
                <IconButton
                    variant="soft"
                    size="sm"
                    color={color}
                    onClick={() => setOpen((e) => !e)}
                >
                    <X className="text-sm w-5" />
                </IconButton>
            }
        >
            <div>
                <Typography fontWeight="lg" mt={0.25}>
                    {title}
                </Typography>
                <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                    {message}
                </Typography>
            </div>
        </Alert>
    );
};

const FlashMessage = () => {
    const flash = usePage().props.flash;
    const [open, setOpen] = useState(true);

    return !open ? (
        <></>
    ) : (
        <>
            {flash.error && (
                <FlashAlert
                    color="danger"
                    title="Terjadi Kesalahan"
                    message={flash.error}
                    setOpen={setOpen}
                />
            )}

            {flash.success && (
                <FlashAlert
                    color="success"
                    title="Sukses"
                    message={flash.success}
                    setOpen={setOpen}
                />
            )}
        </>
    );
};

export default FlashMessage;
