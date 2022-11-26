export const initialState ={
    user: null,
    playlist: [],
    playing: false,
    item: null,
   //token:'BQD1FxGYnQYw-FWp1fzTXqShUmpSn1OSBobwKTcatEmMEkzcdTbZt-8w7Yn_asQ8217i9_spS1qT3vOQ2669P2yE4eSFars2C79o0Y5i88sBS5cimikSbnM4zc47J53kR9CHQO8MWUGvwm2mkniGvstxcDPLE_nxqgqwcxCYvMorFCYIghJ3j3rlZ8iw9au6m0QnF1qxnTigMEcEpT0v',
};

const reducer =(state,action) =>{
        console.log(action);
        switch(action.type)
        {
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                };
                case "SET_TOKEN":
                    return{
                        ...state,
                        token:action.token
                    };
                    case "SET_PLAYLISTS":
                        return{
                            ...state,
                            playlists:action.playlists
                        };
                        case "SET_DISCOVER_WEEKLY":
                        return{
                            ...state,
                            discover_weekly: action.discover_weekly,
                        };
            default:
                return state;
        }
    
    };

export default reducer;