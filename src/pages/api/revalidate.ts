export default async function handler(req: any, res: any) {
    try {
        // this should be the actual path not a rewritten path
        // e.g. for "/blog/[slug]" this should be "/blog/post-1"
        await res.revalidate("/");
        return res.json({ revalidated: true });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        return res.status(500).send("Error revalidating");
    }
}

// import { isCollectSignature } from "libs/crypto";

// export default async function handler(req, res) {
//     try {
//         if (
//             !isCollectSignature(req.headers["x-microcms-signature"], req.body)
//         ) {
//             return res.status(401).send("Invalid token");
//         }

//         const playerId = req.body.contents.new.publishValue.player.id;
//         await res.unstable_revalidate(`/players/${playerId}`);

//         return res.status(200).send();
//     } catch (err) {
//         return res.status(500).send("Error revalidating");
//     }
// }
