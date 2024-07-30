interface User {
    id: number;
    name: string;
};

const users: User[] = [
    { id: 1, name: 'Harold' },
    { id: 2, name: 'Amira' },
    { id: 3, name: 'Lila'}
];

users.forEach(user => {
    console.log(user.id);
    console.log(user.name);
});