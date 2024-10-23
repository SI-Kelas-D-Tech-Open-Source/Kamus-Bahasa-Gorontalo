import { prisma } from "./prisma"

export const getLeanguage = async () => {
    try {
        const languages = await prisma.language.findMany()
        return languages
    } catch (error) {
        console.log(error)
    }
}