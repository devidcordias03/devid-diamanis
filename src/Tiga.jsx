function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Devid',
    lastName: 'Diamanis'
};

const Element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
function Tiga() {
    return (
        Element
    );
}

export default tiga;


