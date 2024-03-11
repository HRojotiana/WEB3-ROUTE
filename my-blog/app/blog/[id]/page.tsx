"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BlogPage() {
    const pathName = usePathname();
    const id = pathName ? pathName.split("/").pop(): null;

    return(
        <div>
            <div>Blog: {id}</div>
            <Link href={`/blog/${id}/image`}>Images</Link>
        </div>
    )
}