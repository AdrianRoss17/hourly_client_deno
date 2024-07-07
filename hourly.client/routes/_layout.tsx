import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state}: PageProps) {
    return (
        <div class="layout">
            <nav class='w-full'>
                <div>
                    <h1>Hourly</h1>
                    <Component/>
                </div>
            </nav>
        </div>
    )
}