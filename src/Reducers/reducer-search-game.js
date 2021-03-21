export default function (state = null, action) {
    switch (action.type) {
        case "GAME_SEARCH":
            return action.payload;
            break;
    }
    return state;

}