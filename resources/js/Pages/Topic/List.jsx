import { useSocket } from "@/Hooks/useSocket";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

import {
    AspectRatio,
    Box,
    Button,
    Card,
    Chip,
    Link as JoyLink,
    TextField,
    Typography,
} from "@mui/joy";
import { SearchOutline } from "heroicons-react";
import React, { useCallback, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const routePath = route("topic.index");

const List = (props) => {
    const [query, setQuery] = useState({});
    const [search, setSearch] = useState("");
    const [topic, setTopic] = useState(props.topic.data);

    useEffect(() => {
        setTopic(props.topic.data);
    }, [props.topic]);

    useSocket({ channel: "topic", event: "TopicEvent" }, (e) => {
        if ("created" === e.type) setTopic((v) => [e.topic, ...v]);
    });

    // Behavior
    const queryTable = useCallback((newQuery) => {
        // setup New Query
        setQuery((qry) => ({ ...qry, ...newQuery }));

        Inertia.get(routePath, newQuery, {
            replace: true,
            preserveState: true,
            only: ["topic"],
        });
    }, []);

    useEffect(() => {
        if (query.length > 0)
            Inertia.get(routePath, newQuery, {
                replace: true,
                preserveState: true,
                only: ["data"],
            });
    }, [query]);

    const handleSearchChange = _.debounce((value) => {
        setSearch(value);

        queryTable({ page: 1, q: value });
    }, 100);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <Typography fontWeight="lg" level="h5">
                    List Topic
                </Typography>
            }
        >
            <div className="md:w-5/6 sm:w-full mx-auto mt-5">
                <div className=" mb-9 flex justify-between w-full">
                    <TextField
                        placeholder="Search Here..."
                        size="lg"
                        startDecorator={<SearchOutline className="w-4" />}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <Button
                        component={Link}
                        href={route("topic.create")}
                        method="get"
                    >
                        Tambah Topik
                    </Button>
                </div>
                {topic.map((data) => (
                    <Card
                        variant="outlined"
                        className="mt-5"
                        row
                        sx={{
                            minWidth: "320px",
                            gap: 2,
                            "&:hover": {
                                boxShadow: "md",
                                borderColor: "neutral.outlinedHoverBorder",
                            },
                        }}
                    >
                        {/* <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <img
                                src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?crop=entropy&auto=format&fit=crop&w=3387"
                                alt=""
                            />
                        </AspectRatio> */}
                        <Box>
                            {/* <Chip
                                variant="outlined"
                                color="primary"
                                size="sm"
                                className="mb-3"
                                sx={{ pointerEvents: "none" }}
                            >
                                Cool weather all day long
                            </Chip> */}
                            <Box sx={{ ml: 0.5 }}>
                                <Typography
                                    level="h2"
                                    fontSize="lg"
                                    id="card-description"
                                    mb={0.5}
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    fontSize="sm"
                                    aria-describedby="card-description"
                                    mb={1}
                                ></Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </div>
            {/* <Stack spacing={2}>
                <Pagination
                    count={topic.last_page}
                    color="standard"
                    page={topic.current_page}
                    // onFocus={}
                />
            </Stack> */}
        </Authenticated>
    );
};

export default List;
