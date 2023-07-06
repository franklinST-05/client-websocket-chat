import { z } from "zod";

export const AuthSchema = z.object({
  username: z
    .string({
      description: "O nome de usuario deve ser válido",
      invalid_type_error: "O nome de usuario deve ser válido",
      required_error: "O nome de usuario é necessário",
    })
    .trim()
    .min(3, "O nome de usuario deve conter no mínimo 3 caracteres")
    .nonempty("O nome de usuario não pode ser vazio"),
});

export type AuthSchema = z.infer<typeof AuthSchema>;