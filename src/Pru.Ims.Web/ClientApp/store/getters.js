import state from './state'

export const getters = {
    students(state) {
        return state.students.sort((studentA, studentB) => {
            return studentA.surname > studentB.surname
        })
    },
    student(state) {
        return (studentId) => {
            return state.students.find((studentId) => {
                return student.id === studentId
            })
        }
    }
}
