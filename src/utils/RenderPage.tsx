import {FC} from "react";
import { notFound } from "next/navigation";
import { PageDocument } from "../types/page.type";
import { Skeleton } from "@/components/ui/skeleton";
import {RenderBlocks} from "./RenderBlocks";


interface RenderPageProps {
    pageData?: PageDocument | null
}

export const RenderPage: FC<RenderPageProps> = ({ pageData }) => {

    if (!pageData) {
        return <Skeleton />
    }

    if (pageData) {
        return (
            <RenderBlocks
                layout={pageData?.layout}
            />
        )
    }

    return notFound()
}