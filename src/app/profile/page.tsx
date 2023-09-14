import { resolve } from "path";

async function takeTime() {
    await new Promise(
        (resolve) => {
            setTimeout(resolve, 3000);
        })
}

export default async function profilePage() {
    await takeTime();
    return (
        <div>
            <h1>Test on profile page.</h1>
        </div>
    );
}