import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style= {{ height: '100vh'}}>
            <PrettyChatWindow
                projectId= '6af93b77-c2dc-4ac5-aa79-520a9d75d859'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
};

export default ChatsPage