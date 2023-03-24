import { axiosInstance } from "@utilities/http/axios";

export type CompaniesData = string
export function isCompaniesData(CompaniesData: unknown): CompaniesData is CompaniesData {
    const result = typeof CompaniesData === 'string'

    if (!result) {
        console.error('is no company data')
    }

    return result
}

export type RegistrationFields = {
    login: string,
    password: string
}

class CompaniesService {
    protected instance

    constructor() {
        this.instance = axiosInstance
    }

    async getByINN(inn: string) {
        let res
        let CompaniesData: null | CompaniesData = null

        try {
            res = await this.instance.get<string>(`/api/${inn}`)
            if (!res.data) {
                throw new Error('ничего не найдено')
            }
            if (typeof res.data === 'string') {
                CompaniesData = res.data
            } else {
                throw new Error('Unknown response')
            }
            
        } catch (error) {
            throw error
        }
        
        return CompaniesData
    }
}

export default new CompaniesService()