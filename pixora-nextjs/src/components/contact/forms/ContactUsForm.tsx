"use client";
import { ContactUsFormValuesDt } from "@/types/contact-dt";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactUsFormValuesDt>();

    const onSubmit = () => {
        toast.success("Mesajınız başarıyla gönderildi!");
        reset();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Full Name */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Ad Soyad*</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Ad Soyad zorunludur",
                                minLength: {
                                    value: 3,
                                    message: "Ad Soyad en az 3 karakter olmalıdır",
                                },
                            })}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>E-posta Adresi*</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "E-posta adresi zorunludur",
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Geçerli bir e-posta adresi girin",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                {/* Website */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Web Sitesi</label>
                        <input
                            type="text"
                            {...register("website", {
                                pattern: {
                                    value:
                                        /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
                                    message: "Geçerli bir web sitesi adresi girin",
                                },
                            })}
                        />
                        {errors.website && (
                            <p className="form-error">
                                {errors.website.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Size Nasıl Yardımcı Olabiliriz*</label>
                        <textarea
                            {...register("message", {
                                required: "Mesaj alanı zorunludur",
                                minLength: {
                                    value: 10,
                                    message: "Mesaj en az 10 karakter olmalıdır",
                                },
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="form-error">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button className="w-100" type="submit" aria-label="Send contact message">
                            <span>
                                <span className="text-1">Mesaj Gönder</span>
                                <span className="text-2">Mesaj Gönder</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
