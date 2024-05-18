function solution(id_pw, db) {
    let [id, pw] = id_pw;
    let answer = '';
    
    for (let i = 0; i < db.length; i++) {
        let info = db[i];
        
        if (id === info[0]) {
            if (pw === info[1]) return 'login';
            return 'wrong pw';
        }
    }
    
    return 'fail';
}