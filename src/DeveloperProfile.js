function DeveloperProfile(props) {
    return (
        <h1>The developer id is {props.match.params.developerId}</h1>
    );
}

export default DeveloperProfile;