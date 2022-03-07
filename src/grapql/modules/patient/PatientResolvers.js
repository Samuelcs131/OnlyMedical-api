import PatientData from '../../../../public/dados/pacientes.json'
import convertFiles from '../../../database/convertFiles'
const indice_pulmonar = convertFiles('./public/dados/indice_pulmonar')
const indice_cardiaco = convertFiles('./public/dados/indice_cardiaco')

export default {
    Patient: {
        indiceCardiaco: async (patientData) => (await indice_cardiaco).map( exam => {
            return ({ data: exam.data, exame: exam.dados.filter( patient => patient.CPF === patientData.cpf) })}),
        indicePulmonar: async (patientData) => (await indice_pulmonar).map( exam => {
            return ({ data: exam.data, exame: exam.dados.filter( patient => patient.CPF === patientData.cpf) })}),
    },
    Query: {
        patients: async () => await PatientData,

        getPatientByCPF: async (_, {cpf}) => await PatientData.filter( patient => patient.cpf === cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")),

        getPatientByName: async (_, {nome}) => {
            nome = nome.toLowerCase()
            return( await PatientData.filter( 
            patient => patient.nome.toLowerCase().includes(nome)) )},
    }
}