import { useSocket } from "@/Hooks/useSocket";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import {
    AspectRatio,
    Box,
    Card,
    Chip,
    Link,
    TextField,
    Typography,
} from "@mui/joy";
import { SearchOutline } from "heroicons-react";
import React, { useCallback, useEffect, useState } from "react";

const routePath = route("topic.index");

const List = (props) => {
    const [query, setQuery] = useState({});
    const [search, setSearch] = useState("");
    const [group, setGroup] = useState(props.topic.data);

    useSocket({ channel: "group", event: "GroupEvent" }, (e) => {
        if ("created" === e.type) setGroup((v) => [e.group, ...v]);
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
                    Invite Users
                </Typography>
            }
        >
            <div className="md:w-5/6 sm:w-full mx-auto mt-5">
                <div className="d-flex">
                    <div className="w-3/12 mb-9">
                        <TextField
                            placeholder="Search Here..."
                            size="lg"
                            startDecorator={<SearchOutline className="w-4" />}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>
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
                        <Box>
                            <Chip
                                variant="outlined"
                                color="warning"
                                size="sm"
                                className="mb-3"
                                sx={{ pointerEvents: "none" }}
                            >
                                Cool weather all day long
                            </Chip>
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
        </Authenticated>
    );
};

export default List;
