import router from '../router'

export const state = {
    students: [
        {
            id: 1,
            firstname: 'Student1',
            surname: 'Zulu'
        },
        {
            id: 2,
            firstname: 'Student2',
            surname: 'Aardvark'
        },
        {
            id: 3,
            firstname: 'Student3',
            surname : 'Grey'
        }],
    teachers: [
        {
            id: 1,
            name: 'Teacher1'
        },
        {
            id: 2,
            name: 'Teacher2'
        },
        {
            id: 3,
            name: 'Teacher3'
        }],
    user: {
        id: null,
        name: null,
        roles: []
    },
    loggedIn: false,
    loginError: null
}
