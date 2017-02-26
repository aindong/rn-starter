export const POST_SESSION = 'POST_SESSION';
export const POST_SESSION_FAILED = 'POST_SESSION_FAILED';
export const POST_SESSION_SUCCESS = 'POST_SESSION_SUCCESS';

export const postSession = () => (
    {
        type: POST_SESSION
    }
);

export const postSessionFailed = () => (
    {
        type: POST_SESSION_FAILED
    }
);

export const postSessionSuccess = () => (
    {
        type: POST_SESSION_SUCCESS
    }
);