import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api"

export function useCreateComment() {
    const createHandler = (gameId, comment) => commentsAPI.create(gameId, comment);
    return createHandler;
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        (async () => {
            const allComments = await commentsAPI.getAll(gameId);
            setComments(allComments);
        })();
    }, [gameId]);

    return [comments, setComments];
}