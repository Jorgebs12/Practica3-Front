import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Job, JobResponse } from "../types.ts";
import JobBase from "../islands/JobBase.tsx";

export const handler: Handlers = {

    GET: async (_req: Request, ctx: FreshContext<unknown, JobResponse>) => {

        try {

            const url = new URL(_req.url);
            const offers = await Axios.get<JobResponse>(`https://www.arbeitnow.com/api/job-board-api`);

            return ctx.render(offers.data.data);

        } catch (e) {

            console.error(e);

            throw new Error("Ha habido un error");
        };
    },
};

export default function Page(props: PageProps<JobResponse>) {

    try {
        const results = props.data;

        return (
            <JobBase
                data={results}>
            </JobBase>
        );
    } catch (e) {

        console.error(e);
        throw new Error("Ha habido un error");
    };
};