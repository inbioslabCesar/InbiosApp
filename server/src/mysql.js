import { pool } from './database/connectionMySQL.js';

const getExams = async () => {
    try {
        const [result] = await pool.query("SELECT id, exam, sample, method, pricep, pricec, tube, preanalitic, time, quantity, createdAt FROM exams;");
        console.table(result)
        console.log('Listado de examenes!')
    } catch (error) {
        console.error(error)
    }
};

const addExams = async () => {
    try {
        const [result] = await pool.query("INSERT INTO exams (exam, sample, method, pricep, pricec, tube, preanalitic, time, quantity)" + "VALUES (?,?,?,?,?,?,?,?,?)", ["", "Suero", "CLIA", 100, 180, "tubo rojo", "Ayuno de 8 horas", 1, 1]);
        console.table(result)
        console.log('Adicionar de examenes!')
        
    } catch (error) {
        console,error(error)
        
    }
}
//getExams();
//addExams();
