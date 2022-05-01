import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Navigation from "~/component/navigation";
import Project from "~/component/project";
import { getRepository } from "~/service/api";

type LoaderData = {
    repository: Awaited<ReturnType<typeof getRepository>>;
}

export const loader: LoaderFunction = async () => {
    return json<LoaderData>({
        repository: await getRepository(),
    });
}
export default function Index() {
    const { repository } = useLoaderData<LoaderData>();
    return (
        <>
            <Navigation />
            <Project data={repository} />
        </>
    )
}