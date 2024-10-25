import { prisma } from "./prisma"

export const getLeanguage = async () => {
    try {
        const languages = await prisma.language.findMany()
        return languages
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async () => {
    try {
        const categories = await prisma.category.findMany()
        return categories
    } catch (error) {
        console.log(error)
    }
}