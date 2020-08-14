const db = [
    { name: 'Sergio', email: 'sergio@email.com', birthdate: '1989-10-23' },
    { name: 'Yuan', email: 'yuan@email.com', birthdate: '1989-11-24' },
    { name: 'Tuoli', email: 'tuoli@email.com', birthdate: '2019-03-21' },
    { name: 'Chuar-chuar', email: 'chuar@email.com', birthdate: '2019-07-26' },
]

export const fetchDB = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(db)
        }, 2000)
    })
}

export const addUser = (user) => {
    return new Promise((resolve,reject)  => {
        setTimeout(() => {
            if (db.find(el => el.email === user.email )) {
                reject()
            } else {
                db.push(user)
                resolve()
            }
        }, 2000)
    })
}

export const updateUser = (index) => {
    return new Promise((resolve,reject)  => {
        setTimeout(() => {
            db[index] = { name: 'jeje', email: 'lololol', birthdate: '99/99/9999' }
            resolve()
        }, 2000)
    })
}
