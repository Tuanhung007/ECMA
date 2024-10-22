import Joi from "joi"

export const ProSchema = Joi.object({
    id: Joi.string().optional(),
    name: Joi.string().min(5).required().messages({
        "any.required": "name phai nhap",
        "string.empty": "khogn duoc de trong",
        "string.min": "toi thieu 5 ky tu"
    }),
    price: Joi.number().min(1).required().messages({
        "any.required": "price phai nhap",
        "string.empty": "khogn duoc de trong",
        "number.min": "lon hon 1",
        "number.base": "phai la so"
    }),
    image: Joi.string().required().messages({
        "any.required": "anh phai nhap",
        "string.empty": "khogn duoc de trong",
    }),
})
export const RegisterSchema = Joi.object({
    id: Joi.string().optional(),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "any.required": "email phai nhap",
        "string.empty": "khogn duoc de trong",
        "string.email": "emmail khogn dung dinh dang"
    }),
    password: Joi.string().min(5).required().messages({
        "any.required": "pass phai nhap",
        "string.empty": "khogn duoc de trong",
        "string.min": "pass phai lon hon 5",
    }),
    repassword: Joi.string().valid(Joi.ref("password")).required().messages({
        "any.required": "repass phai nhap",
        "string.empty": "khogn duoc de trong",
        "any.only": "phai trung pass"
    }),
})
export const LoginrSchema = Joi.object({
    id: Joi.string().optional(),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "any.required": "email phai nhap",
        "string.empty": "khogn duoc de trong",
        "string.email": "emmail khogn dung dinh dang"
    }),
    password: Joi.string().min(5).required().messages({
        "any.required": "pass phai nhap",
        "string.empty": "khogn duoc de trong",
        "string.min": "pass phai lon hon 5",
    }),

})