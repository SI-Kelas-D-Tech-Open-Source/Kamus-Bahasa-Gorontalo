"use server";

import { prisma } from "./prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const LanguageSchema = z.object({
    indonesia: z.string().min(2, "Minimal 2 karakter"),
    gorontalo: z.string().min(2 , "Minimal 2 karakter"),
    categoryId: z.number(),
    picture: z
    .instanceof(File)
    .superRefine((file, ctx) => {
        if (!file || file.size === 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Gambar harus diupload",
          });
          return;
        }
        if (!(file.type === "image/jpeg" || file.type === "image/jpg")) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "File harus berformat jpg",
          });
          return;
        }
        if (file.size >= 5_000_000) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "File harus kurang dari 5 MB",
          });
        }
      }),
    audio: z
    .instanceof(File),
    // .superRefine((file, ctx) => {
    //     if (!file || file.size === 0) {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "Suara harus diupload",
    //       });
    //       return;
    //     }
    //     if (file.type !== "audio/mp3") {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "File harus berformat mp3",
    //       });
    //       return;
    //     }
    //     if (file.size >= 5_000_000) {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "File harus kurang dari 5 MB",
    //       });
    //     }
    //   }),
})

export const saveLanguage = async (preview: any, formData= FormData) => {
    const validatedForm = LanguageSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedForm.success) {
        return {
            Error: validatedForm.error.flatten().fieldErrors
        }
    }

    console.log(validatedForm.data)

    // try {
    //     await prisma.language.create({
    //         data: {
    //             indonesia: validatedForm.data.indonesia,
    //             gorontalo: validatedForm.data.gorontalo,
    //             categoryId: validatedForm.data.categoryId,
    //             image: validatedForm.data.picture.name,
    //             sound: validatedForm.data.audio.name,
    //         }
    //     })
    // } catch (error) {
    //     return {message: "Gagal menambahkan data"}
    // }

}

// revalidatePath("/languages")
// redirect("/languages")