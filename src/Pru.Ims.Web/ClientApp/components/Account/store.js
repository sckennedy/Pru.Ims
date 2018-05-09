const store = {
    namespaced: true,
    state: {
        currentStudent: null,
        allStudents: []
    },
    mutations: {
        setStudent(state, student) {
            state.currentStudent = student
        },
        setStudents(state, students) {
            state.allStudents = students
        }
    },
    actions: {
        async create({ commit, state }, payload) {
            //todo: create a student object and save it to the database
        },
        async edit({ commit, state }, payload) {
            //todo: call aip to edit student
        },
        async delete ({ commit, state }, payload) {
            //todo: call api to delete student
        },
        async getAll({ commit, state }, payload) {
            //todo: get the students from the database
            //this is just dummy data for now
            commit('setStudents', [
                {
                    id: 1,
                    firstname: 'Student1',
                    lastname: 'Zulu'
                },
                {
                    id: 2,
                    firstname: 'Student2',
                    lastname: 'Apple'
                }
                ])
        },
        async get({ commit, state }, payload) {
            //todo: get the student from the database and set the currentStudent object
            commit('setStudent',
                {
                    id: 1,
                    firstname: 'Student1',
                    lastname: 'Zulu'
                })
        },
        async filter({ commit, state }, payload) {
            //todo get the filtered list of students
        }
    },
    modules: {
    },
}

export default store
