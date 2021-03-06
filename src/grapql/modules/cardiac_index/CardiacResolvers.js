import PatientData from '../../../../public/dados/pacientes.json'
import convertFiles from '../../../database/convertFiles'
const indice_cardiaco = convertFiles('./public/dados/indice_cardiaco')

export default {
    ExameCardiac: {
        paciente: async (patientSearch) => await PatientData.filter( patient => patient.cpf === patientSearch.CPF),
    },
    Query: {
        getExamsCardiac: async () => {
            return (await indice_cardiaco).map( exam => {
            return { data: exam.data, exame: exam.dados } })},

        getExamCardiacByCpf: async (_,{CPF} ) => (await indice_cardiaco).map( exam => { 
            return ({ data: exam.data, exame: exam.dados.filter( patient => patient.CPF === CPF) })}),

        getExamCardiacByDateAndCpf: async (_,{data, CPF} ) => {
            let filterDateExam = (await indice_cardiaco).filter( exam => exam.data === data )[0]
            let filterCpfPatient = filterDateExam.dados.filter( patient => patient.CPF === CPF)
            const resultSearch = [{ data: data, exame: filterCpfPatient}]
            return resultSearch
        },
        
        getExamCardiacByDate: async (_,{data} ) => {
            let filterDataExam = (await indice_cardiaco).filter(exam => exam.data === data)[0]
            const resultSearch = [{ data: filterDataExam.data, exame: filterDataExam.dados}]
            return resultSearch
        },

        getExamCardiacWithInterval: async (_, {dataInicial, dataFinal, CPF}) => {
            let getDatesExams = (await indice_cardiaco).map(exam => exam.data)
            let dateInitial = getDatesExams.indexOf(dataInicial)
            let dateFinal = Number(getDatesExams.indexOf(dataFinal)) + 1
            let getExamInterval = indice_cardiaco.slice(dateInitial, dateFinal)
            const resultSearch = getExamInterval.map( exam => ( {data: exam.data, exame: exam.dados.filter( patient => patient.CPF === CPF)} ))
            return resultSearch
        },
        
        getExamCardiacWithIntervalValue: async (_, {valorInicial, valorFinal, CPF}) => { return ( (await indice_cardiaco).map( exam => { 
                return ({ 
                    data: exam.data, 
                    exame: exam.dados.filter( patient => patient.CPF === CPF)
                    .filter( item => item.ind_card >= valorInicial && item.ind_card <= valorFinal )
                }) 
            }))
        },
    }
}

 